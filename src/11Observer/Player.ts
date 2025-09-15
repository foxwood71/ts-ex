export default abstract class Player {
  private _name: string;
  protected _winning: boolean = false;

  constructor(name: string) {
    this._name = name;
  }

  get name(): string {
    return this._name;
  }

  get winning(): boolean {
    return this._winning;
  }

  public abstract update(diceNumber: number): void;
  // public abstract win(): void;
}
