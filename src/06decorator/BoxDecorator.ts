import Decorator from "./Decorator";
import type Item from "./Item";

export default class BoxDecorator extends Decorator {
  getLinesCount(): number {
    return this._tagetItem.getLinesCount() + 2;
  }

  getLength(i: number): number {
    return this._tagetItem.getLength(i) + 2;
  }

  getMaxLength(): number {
    return this._tagetItem.getMaxLength() + 2;
  }

  getString(i: number): string {
    const maxWidth = this.getMaxLength();
    if (i === 0 || i === this.getLinesCount() - 1) {
      return `<span style='color:yellow'>+${"-".repeat(maxWidth - 2)}+</span>`;
    } else {
      return (
        `<span style='color:yellow'>${"|"}</span>` +
        `${this._tagetItem.getString(i - 1)}${" ".repeat(
          maxWidth - this.getLength(i - 1)
        )}` +
        `<span style='color:yellow'>${"|"}</span>`
      );
    }
  }

  constructor(tagetItem: Item) {
    super(tagetItem);
  }
}
