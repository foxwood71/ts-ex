import State from "./State";
import Player from "./Player";
import StandUpState from "./StandUpState";

export default class SitDownState extends State {
  standUp(): void {
    this._player.setState(new StandUpState(this._player));
    this._player.talk("인나자..");
  }

  sitDown(): void {
    this._player.talk("언제까지 앉아있어.. 쥐나겠다.");
  }

  walk(): void {
    this._player.setState(new StandUpState(this._player));
    this._player.talk("앉아서 어떻게 걸어? 일단 설께..");
  }

  run(): void {
    this._player.setSpeed(10);
    this._player.setState(new StandUpState(this._player));
    this._player.talk("앉아서 어떻게 뛰어? 일단 서자!");
  }

  getDescription(): string {
    return "앉아있음";
  }

  constructor(player: Player) {
    super(player);
  }
}
