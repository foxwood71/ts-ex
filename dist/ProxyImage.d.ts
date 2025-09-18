import type Image from "./Image";
export default class PorxyImage implements Image {
    private _image;
    private _domLayout;
    private _domTitle;
    private _title;
    private _url;
    private _parent;
    constructor(title: string, url: string, parent: Element);
    append(): void;
}
//# sourceMappingURL=ProxyImage.d.ts.map