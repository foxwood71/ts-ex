import Item from "./item";
import type { Iterator } from "./iterator";
import type { Aggregator } from "./aggregator";
export default class Array implements Aggregator<Item> {
    private _items;
    constructor(items: Item[]);
    getItem(index: number): Item;
    get count(): number;
    iterator(): Iterator<Item>;
}
//# sourceMappingURL=array.d.ts.map