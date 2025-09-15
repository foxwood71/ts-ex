import Player from "./Player";

export default class OddBettingPlayer extends Player {
  update(diceNumber: number): void {
    this._winning = diceNumber % 2 === 1;
  }

  constructor(name: string) {
    super(name);
  }
}
