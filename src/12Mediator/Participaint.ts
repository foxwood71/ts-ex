import type Mediator from "./Mediator";

export default abstract class Participaint {
  protected _mediator: Mediator;

  constructor(mediator: Mediator) {
    this._mediator = mediator;
  }
  abstract displayState(dom: HTMLElement): void;
}
