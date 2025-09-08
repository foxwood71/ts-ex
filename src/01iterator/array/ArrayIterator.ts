import Item from "./Item";
import Array from "./Array";
import type { Iterator } from "./Iterator";

export default class ArrayIterator implements Iterator<Item> {
  private _array: Array;
  private _index: number;

  constructor(array: Array) {
    this._array = array;
    this._index = -1;
  }
  next(): boolean {
    this._index++;
    return this._index < this._array.count;
  }
  current(): Item {
    return this._array.getItem(this._index);
  }
}
