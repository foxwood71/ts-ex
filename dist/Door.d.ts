import type Mediator from "./Mediator";
import Participaint from "./Participaint";
export default class Door extends Participaint {
    displayState(dom: HTMLElement): void;
    private _bClosed;
    constructor(mediator: Mediator);
    open(): void;
    close(): void;
    isClosed(): boolean;
}
//# sourceMappingURL=Door.d.ts.map