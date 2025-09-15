import DiceGame from "./DiceGame";

export default class FairDiceGames extends DiceGame {
  play(): number {
    const n = Math.floor(Math.random() * 6) + 1;
    this._players.forEach((player) => player.update(n));
    return n;
  }
}
