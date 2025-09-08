import Decorator from "./Decorator";
import type Item from "./Item";

export default class SideDecorator extends Decorator {
  getLinesCount(): number {
    return this._tagetItem.getLinesCount();
  }

  getLength(i: number): number {
    return this._tagetItem.getLength(i) + this._ch.length * 2;
  }

  getMaxLength(): number {
    return this._tagetItem.getMaxLength() + this._ch.length * 2;
  }

  getString(i: number): string {
    return (
      `<span style='color:gray'>${this._ch}</span>` +
      `${this._tagetItem.getString(i)}` +
      `<span style='color:gray'>${this._ch}</span>`
    );
  }

  private _ch: string;

  constructor(tagetItem: Item, ch: string) {
    super(tagetItem);
    this._ch = ch;
  }
}
