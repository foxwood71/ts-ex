import Player from "./Player";
import State from "./State";
import StandUpState from "./StandUpState";
import WalkState from "./WalkState";

export default class RunState extends State {
  standUp(): void {
    this._player.setSpeed(0);
    this._player.setState(new StandUpState(this._player));
    this._player.talk("뛰다가 갑자기 서면 무른 연골 나가요..!");
  }

  sitDown(): void {
    this._player.setSpeed(0);
    this._player.setState(new StandUpState(this._player));
    this._player.talk("뛰다가 앉으라고!? 너 죽을래!?");
  }

  walk(): void {
    this._player.setSpeed(8);
    this._player.setState(new WalkState(this._player));
    this._player.talk("속도를 줄일께요~");
  }

  run(): void {
    this._player.setSpeed(this._player.getSpeed() + 2);
    this._player.talk("더 빨리 뛰라는 애기지?");
  }

  getDescription(): string {
    return "뛰는 중";
  }

  constructor(player: Player) {
    super(player);
  }
}
