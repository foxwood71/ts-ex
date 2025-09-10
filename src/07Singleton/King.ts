export default class King {
  private constructor() {}
  private static _instance: King | undefined;

  static getInstance(): King {
    if (this._instance === undefined) this._instance = new King();
    return this._instance;
  }

  sayHello() {
    console.log("I am only one...");
  }
}
