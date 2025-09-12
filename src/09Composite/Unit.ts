export default abstract class Unit {
  private _name: string;

  constructor(name: string) {
    this._name = name;
  }
  getName(): string {
    return this._name;
  }

  abstract getSize(): number;
}
