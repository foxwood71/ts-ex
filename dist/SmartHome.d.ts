import CoolAircon from "./CoolAircon";
import Door from "./Door";
import Window from "./Widnow";
import HeatBoiler from "./HeatBoler";
import type Mediator from "./Mediator";
import type Participaint from "./Participaint";
export default class SmartHome implements Mediator {
    door: Door;
    window: Window;
    aircon: CoolAircon;
    boiler: HeatBoiler;
    display(): void;
    install(): void;
    participantChanged(participant: Participaint): void;
}
//# sourceMappingURL=SmartHome.d.ts.map