import Item from "./item";
import Array from "./array";
import type { Iterator } from "./iterator";
export default class ArrayIterator implements Iterator<Item> {
    private _array;
    private _index;
    constructor(array: Array);
    next(): boolean;
    current(): Item;
}
//# sourceMappingURL=arrayiterator.d.ts.map