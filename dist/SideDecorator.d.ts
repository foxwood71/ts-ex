import Decorator from "./Decorator";
import type Item from "./Item";
export default class SideDecorator extends Decorator {
    getLinesCount(): number;
    getLength(i: number): number;
    getMaxLength(): number;
    getString(i: number): string;
    private _ch;
    constructor(tagetItem: Item, ch: string);
}
//# sourceMappingURL=SideDecorator.d.ts.map