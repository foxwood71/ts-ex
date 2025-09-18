import type Image from "./Image";
export default class RealImage implements Image {
    private _title;
    private _url;
    private _parent;
    private _domLayout;
    private _domTitle;
    private _domImage;
    private _domLoading;
    constructor(title: string, url: string, parent: Element);
    append(): void;
}
//# sourceMappingURL=RealImage.d.ts.map