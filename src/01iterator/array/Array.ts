import Item from "./Item";
import type { Iterator } from "./Iterator";
import type { Aggregator } from "./Aggregator";
import ArrayIterator from "./ArrayIterator";

export default class Array implements Aggregator<Item> {
  private _items: Item[];

  constructor(items: Item[]) {
    this._items = items;
  }

  public getItem(index: number): Item {
    const item = this._items[index];
    if (item === undefined) {
      throw new Error(`Index ${index} is out of bounds`);
    }
    return item;
  }

  public get count(): number {
    return this._items.length;
  }

  iterator(): Iterator<Item> {
    return new ArrayIterator(this);
  }
}
