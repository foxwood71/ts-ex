import type Mediator from "./Mediator";
import Participaint from "./Participaint";
export default class HeatBoiler extends Participaint {
    displayState(dom: HTMLElement): void;
    private _bOff;
    constructor(mediator: Mediator);
    on(): void;
    off(): void;
    isRunning(): boolean;
}
//# sourceMappingURL=HeatBoler.d.ts.map