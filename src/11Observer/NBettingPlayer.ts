import Player from "./Player";

export default class NBettingPlayer extends Player {
  update(diceNumber: number): void {
    this._winning = this._ns.includes(diceNumber);
  }

  private _ns = new Array<number>();

  constructor(name: string, ns: Array<number>) {
    super(name);
    this._ns = ns;
  }
}
