import Animal from "./Animal";

export default class Cat extends Animal {
  sound(): void {
    console.log(`${this._name}가 야옹~`);
  }

  constructor(name: string) {
    super(name);
  }
}
