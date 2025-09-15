import type Mediator from "./Mediator";
import Participaint from "./Participaint";
export default class Window extends Participaint {
    displayState(dom: HTMLElement): void;
    private _bClosed;
    constructor(mediator: Mediator);
    open(): void;
    close(): void;
    isClosed(): boolean;
}
//# sourceMappingURL=Widnow.d.ts.map