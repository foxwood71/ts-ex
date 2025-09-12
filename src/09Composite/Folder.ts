import Unit from "./Unit";

export default class Folder extends Unit {
  private _units: Array<Unit> = [];
  constructor(name: string) {
    super(name);
  }

  getSize(): number {
    return this._units.reduce(
      (accumulator, currentValue) => accumulator + currentValue.getSize(),
      0
    );
  }

  add(unit: Unit) {
    this._units.push(unit);
  }

  remove(unit: Unit) {
    const index = this._units.indexOf(unit);
    if (index > -1) {
      this._units.splice(index, 1);
    }
  }

  createUnit(unit: Unit, dom: Element) {
    const domUnit = document.createElement("div");
    domUnit.classList.add("unit");
    domUnit.innerHTML = `<div><span>${unit.getName()}</span><span>(${unit.getSize()})</span></div>`;
    dom.append(domUnit);
    return domUnit;
  }

  list(dom: Element) {
    const domUnit = this.createUnit(this, dom); // Root dom
    const bFolder = this instanceof Folder;

    if (bFolder) {
      domUnit.classList.add("folder");
      this._units.forEach((unit) => {
        if (unit instanceof Folder) {
          unit.list(domUnit);
        } else {
          this.createUnit(unit, domUnit);
        }
      });
    }
  }
}
