import Decorator from "./Decorator";
import type Item from "./Item";
export default class BoxDecorator extends Decorator {
    getLinesCount(): number;
    getLength(i: number): number;
    getMaxLength(): number;
    getString(i: number): string;
    constructor(tagetItem: Item);
}
//# sourceMappingURL=BoxDecorator.d.ts.map