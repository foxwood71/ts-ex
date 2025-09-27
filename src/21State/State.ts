import Player from "./Player";

export default abstract class State {
  protected _player: Player;

  constructor(player: Player) {
    this._player = player;
  }

  abstract standUp(): void;
  abstract sitDown(): void;
  abstract walk(): void;
  abstract run(): void;

  abstract getDescription(): string;
}
