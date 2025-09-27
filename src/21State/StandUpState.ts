import State from "./State";
import Player from "./Player";
import RunState from "./RunState";
import SitDownState from "./SitDownState";
import WalkState from "./WalkState";

export default class StandUpState extends State {
  standUp(): void {
    this._player.talk("언제 움직일꺼야?");
  }

  sitDown(): void {
    this._player.setState(new SitDownState(this._player));
    this._player.talk("앉으니깐 편하고 좋습니다.");
  }

  walk(): void {
    this._player.setSpeed(8);
    this._player.setState(new WalkState(this._player));
    this._player.talk("걷기는 제2의 생각하기다..");
  }

  run(): void {
    this._player.setSpeed(10);
    this._player.setState(new RunState(this._player));
    this._player.talk("갑자히 뛴다?!");
  }

  getDescription(): string {
    return "제자리에 서 있음";
  }

  constructor(player: Player) {
    super(player);
  }
}
