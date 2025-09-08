export default abstract class Animal {
  protected _name: string;

  constructor(name: string) {
    this._name = name;
  }

  abstract sound(): void;
}
