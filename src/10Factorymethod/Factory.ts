import type Item from "./Item";

export type ItemName = "sword" | "shield" | "bow";

export default abstract class Factory {
  protected abstract isCreateable(name: ItemName): boolean;
  protected abstract createItem(name: ItemName): Item;
  protected abstract postprocessItem(name: ItemName): void;

  public create(name: ItemName): Item | null {
    const bCreateable = this.isCreateable(name);
    if (bCreateable) {
      const item = this.createItem(name);
      this.postprocessItem(name);
      return item;
    }
    return null;
  }
}
