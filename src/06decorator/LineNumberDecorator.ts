import Decorator from "./Decorator";
import type Item from "./Item";

export default class LineNumberDecorator extends Decorator {
  getLinesCount(): number {
    return this._tagetItem.getLinesCount();
  }

  getLength(i: number): number {
    return this._tagetItem.getLength(i) + 6;
  }

  getMaxLength(): number {
    return this._tagetItem.getMaxLength() + 6;
  }

  getString(i: number): string {
    return (
      '<span style="color:green">' +
      `${i}`.padStart(4, "0") +
      `</span><span style="color:dimgray">: </span>${this._tagetItem.getString(
        i
      )}`
    );
  }

  constructor(tagetItem: Item) {
    super(tagetItem);
  }
}
