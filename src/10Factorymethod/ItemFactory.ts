import Bow from "./Bow";
import Factory, { type ItemName } from "./Factory";
import type Item from "./Item";
import Shield from "./Shield";
import Sword from "./Sword";

class ItemCount {
  private _currentCount = 0;
  private _maxCount = 0;

  constructor(maxCount: number) {
    this._maxCount = maxCount;
  }

  get maxCount() {
    return this._maxCount;
  }

  isCreateable(): boolean {
    return this._currentCount < this._maxCount;
  }

  increaseCount(): void {
    this._currentCount++;
  }
}

export default class ItemFactory extends Factory {
  protected isCreateable(name: ItemName): boolean {
    const itemCount = this._repository.get(name);
    if (!itemCount) {
      return false;
    }
    return itemCount.isCreateable();
  }

  protected createItem(name: ItemName): Item {
    let result: Item;

    if (name === "sword") result = new Sword();
    else if (name === "shield") result = new Shield();
    else if (name === "bow") result = new Bow();
    else {
      // typeGuard
      // This case should ideally not be reached if `isCreateable` is correctly implemented
      // or if `ItemName` is exhaustive and handled.
      throw new Error(`Unknown item name: ${name}`);
    }
    return result;
  }

  protected postprocessItem(name: ItemName): void {
    const itemCount = this._repository.get(name);
    if (itemCount) {
      // typeGuard - undefined 확인
      itemCount.increaseCount();
    }
  }

  private _repository = new Map<ItemName, ItemCount>();

  constructor() {
    super();
    this._repository.set("sword", new ItemCount(3));
    this._repository.set("shield", new ItemCount(5));
    this._repository.set("bow", new ItemCount(2));
  }
}
