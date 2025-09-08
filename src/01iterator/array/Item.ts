export default class Item {
  private _name: string;
  private _cost: number;

  constructor(name: string, cost: number) {
    this._name = name;
    this._cost = cost;
  }
  // -> eraableSyntaxOnly: false시만 사용가능`
  //constructor(private name: string, private _cost: number) {}

  get name(): string {
    return this._name;
  }

  get cost(): number {
    return this._cost;
  }
}
