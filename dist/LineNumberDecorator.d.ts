import Decorator from "./Decorator";
import type Item from "./Item";
export default class LineNumberDecorator extends Decorator {
    getLinesCount(): number;
    getLength(i: number): number;
    getMaxLength(): number;
    getString(i: number): string;
    constructor(tagetItem: Item);
}
//# sourceMappingURL=LineNumberDecorator.d.ts.map