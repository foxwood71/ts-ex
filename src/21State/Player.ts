import StandUpState from "./StandUpState";
import State from "./State";

export default class Player {
  private _speed: number = 0;
  private _state: State;
  private _domTalk: HTMLElement;

  constructor(domTalk: HTMLElement) {
    this._domTalk = domTalk;
    this._state = new StandUpState(this);
  }

  getSpeed() {
    return this._speed;
  }
  setSpeed(speed: number): void {
    this._speed = speed;
  }

  getState(): State {
    return this._state;
  }
  setState(state: State): void {
    this._state = state;
  }

  talk(msg: string) {
    this._domTalk.innerText = msg;
  }
}
