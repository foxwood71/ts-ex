export declare const Action: {
    readonly UP: 1;
    readonly DOWN: 2;
    readonly LEFT: 3;
    readonly RIGHT: 4;
};
export declare const ActionNames: Record<Action, string>;
export type Action = (typeof Action)[keyof typeof Action];
export declare class Memento {
    private _actions;
    private _x;
    private _y;
    get action(): Action[];
    get x(): number;
    get y(): number;
    constructor(x: number, y: number, actions: Array<Action>);
}
export default class BlindMan {
    private _currentX;
    private _currentY;
    private _targetX;
    private _targetY;
    private _actions;
    constructor(crruntX: number, currentY: number, targetX: number, targety: number);
    walk(action: Action): number;
    createMemento(): Memento;
    restoreMemento(memento: Memento): void;
    resultPath(): string;
}
//# sourceMappingURL=BlindMan.d.ts.map