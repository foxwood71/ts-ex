import type Player from "./Player";

export default abstract class DiceGane {
  protected _players = new Array<Player>();

  addPlayer(player: Player): void {
    this._players.push(player);
  }

  abstract play(): number;
}
