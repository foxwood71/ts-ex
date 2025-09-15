import type Mediator from "./Mediator";
export default abstract class Participaint {
    protected _mediator: Mediator;
    constructor(mediator: Mediator);
    abstract displayState(dom: HTMLElement): void;
}
//# sourceMappingURL=Participaint.d.ts.map