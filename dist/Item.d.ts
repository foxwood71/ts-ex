export default abstract class Item {
    abstract getLinesCount(): number;
    abstract getLength(i: number): number;
    abstract getMaxLength(): number;
    abstract getString(i: number): string;
    print(dom: HTMLElement): void;
}
//# sourceMappingURL=Item.d.ts.map