import type Mediator from "./Mediator";
import Participaint from "./Participaint";

export default class CoolAircon extends Participaint {
  displayState(dom: HTMLElement): void {
    dom.innerHTML = this._bOff ? "에어컨 꺼짐" : "에어컨 가동중";
    if (this._bOff) dom.classList.remove("hilighting");
    else dom.classList.add("hilighting");
  }

  private _bOff: boolean = true;

  constructor(mediator: Mediator) {
    super(mediator);
  }

  on(): void {
    if (!this._bOff) return;
    this._bOff = false;
    this._mediator.participantChanged(this);
  }

  off(): void {
    if (this._bOff) return;
    this._bOff = true;
    this._mediator.participantChanged(this);
  }

  isRunning(): boolean {
    return !this._bOff;
  }
}
