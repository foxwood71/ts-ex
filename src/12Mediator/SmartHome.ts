import CoolAircon from "./CoolAircon";
import Door from "./Door";
import Window from "./Widnow";
import HeatBoiler from "./HeatBoler";
import type Mediator from "./Mediator";
import type Participaint from "./Participaint";

export default class SmartHome implements Mediator {
  door = new Door(this);
  window = new Window(this);
  aircon = new CoolAircon(this);
  boiler = new HeatBoiler(this);

  display() {
    const domDoor = document.querySelector(".door") as HTMLElement;
    const domWindow = document.querySelector(".window") as HTMLElement;
    const domAircon = document.querySelector(".coolaricon") as HTMLElement;
    const domBoiler = document.querySelector(".heatboiler") as HTMLElement;

    this.door.displayState(domDoor);
    this.window.displayState(domWindow);
    this.aircon.displayState(domAircon);
    this.boiler.displayState(domBoiler);
  }

  install() {
    const domDoor = document.querySelector(".door") as HTMLElement;
    const domWindow = document.querySelector(".window") as HTMLElement;
    const domBoiler = document.querySelector(".heatboiler") as HTMLElement;
    const domAircon = document.querySelector(".coolaricon") as HTMLElement;

    domDoor.addEventListener("click", () => {
      this.door.isClosed() ? this.door.open() : this.door.close();
      this.display();
    });
    domWindow.addEventListener("click", () => {
      this.window.isClosed() ? this.window.open() : this.window.close();
      this.display();
    });

    domBoiler.addEventListener("click", () => {
      this.boiler.isRunning() ? this.boiler.off() : this.boiler.on();
      this.display();
    });

    domAircon.addEventListener("click", () => {
      this.aircon.isRunning() ? this.aircon.off() : this.aircon.on();
      this.display();
    });

    this.display();
  }

  participantChanged(participant: Participaint): void {
    if (participant === this.door && !this.door.isClosed()) {
      this.aircon.off();
      this.boiler.off();
    }
    if (participant === this.window && !this.window.isClosed()) {
      this.aircon.off();
      this.boiler.off();
    }

    if (participant === this.aircon && this.aircon.isRunning()) {
      this.boiler.off();
      this.door.close();
      this.window.close();
    }

    if (participant === this.boiler && this.boiler.isRunning()) {
      this.aircon.off();
      this.window.close();
      this.door.close();
    }
  }
}
