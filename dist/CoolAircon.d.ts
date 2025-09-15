import type Mediator from "./Mediator";
import Participaint from "./Participaint";
export default class CoolAircon extends Participaint {
    displayState(dom: HTMLElement): void;
    private _bOff;
    constructor(mediator: Mediator);
    on(): void;
    off(): void;
    isRunning(): boolean;
}
//# sourceMappingURL=CoolAircon.d.ts.map