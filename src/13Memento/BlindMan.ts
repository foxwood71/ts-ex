//'erasableSyntaxOnly' 옵션을 활성화하면 TypeScript에서 enum 구문을 사용할 수 없음
// 그외에도 enum, namespace, class parameter property
//
// export enum Action {
//   UP = 1,
//   DOWN,
//   LEFT,
//   RIGHT,
// }

export const Action = {
  UP: 1,
  DOWN: 2,
  LEFT: 3,
  RIGHT: 4,
} as const;

// 값 → 문자열 맵 enum의 역방향 참조 제시
export const ActionNames: Record<Action, string> = {
  [Action.UP]: "UP",
  [Action.DOWN]: "DOWN",
  [Action.LEFT]: "LEFT",
  [Action.RIGHT]: "RIGHT",
};

export type Action = (typeof Action)[keyof typeof Action];

export class Memento {
  private _actions = new Array<Action>();
  private _x: number;
  private _y: number;

  get action() {
    return this._actions;
  }

  get x() {
    return this._x;
  }

  get y() {
    return this._y;
  }

  constructor(x: number, y: number, actions: Array<Action>) {
    this._x = x;
    this._y = y;
    this._actions = structuredClone(actions);
    //this._actions = JSON.parse(JOSN.stringify(actions)); // structuredClone 이 구문이 지원하지 않는 환경
  }
}

export default class BlindMan {
  private _currentX: number;
  private _currentY: number;
  private _targetX: number;
  private _targetY: number;
  private _actions = new Array<Action>();

  constructor(
    crruntX: number,
    currentY: number,
    targetX: number,
    targety: number
  ) {
    this._currentX = crruntX;
    this._currentY = currentY;
    this._targetX = targetX;
    this._targetY = targety;
  }

  walk(action: Action): number {
    this._actions.push(action);
    if (action === Action.UP) this._currentY += 1;
    else if (action === Action.RIGHT) this._currentX += 1;
    else if (action === Action.DOWN) this._currentY -= 1;
    else if (action === Action.LEFT) this._currentX -= 1;

    return Math.sqrt(
      Math.pow(this._targetX - this._currentX, 2) +
        Math.pow(this._targetY - this._currentY, 2)
    );
  }
  createMemento(): Memento {
    const memonto = new Memento(this._currentX, this._currentY, this._actions);
    return memonto;
  }
  restoreMemento(memento: Memento): void {
    this._currentX = memento.x;
    this._currentY = memento.y;
    this._actions = structuredClone(memento.action);
  }

  resultPath(): string {
    // return this._actions.map((action) => Action[action]).join("->");
    return this._actions.map((action) => ActionNames[action]).join("->");
  }
}
