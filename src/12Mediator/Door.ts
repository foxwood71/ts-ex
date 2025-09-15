import type Mediator from "./Mediator";
import Participaint from "./Participaint";

export default class Door extends Participaint {
  displayState(dom: HTMLElement): void {
    dom.innerHTML = this._bClosed ? "문 CLOSE" : "문 OPEN";
    if (this._bClosed) dom.classList.remove("hilighting");
    else dom.classList.add("hilighting");
  }

  private _bClosed: boolean = true;

  constructor(mediator: Mediator) {
    super(mediator);
  }

  open(): void {
    if (!this._bClosed) return;
    this._bClosed = false;
    this._mediator.participantChanged(this);
  }

  close(): void {
    if (this._bClosed) return;
    this._bClosed = true;
    this._mediator.participantChanged(this);
  }

  isClosed(): boolean {
    return this._bClosed;
  }
}
