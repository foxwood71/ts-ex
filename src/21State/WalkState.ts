import State from "./State";
import Player from "./Player";
import RunState from "./RunState";
import SitDownState from "./SitDownState";
import StandUpState from "./StandUpState";

export default class WalkState extends State {
  standUp(): void {
    this._player.setSpeed(0);
    this._player.setState(new StandUpState(this._player));
    this._player.talk("멈춰...");
  }

  sitDown(): void {
    this._player.setSpeed(0);
    this._player.setState(new SitDownState(this._player));
    this._player.talk("걷다가 앉으면 넘어질 수 있어요");
  }

  walk(): void {
    this._player.talk("난 걷는걸 좋아하지~");
  }

  run(): void {
    this._player.setSpeed(20);
    this._player.setState(new RunState(this._player));
    this._player.talk("걷다가 뛰면 더 빨리 뛸 수 있지!");
  }

  getDescription(): string {
    return "걷는 중";
  }

  constructor(player: Player) {
    super(player);
  }
}
