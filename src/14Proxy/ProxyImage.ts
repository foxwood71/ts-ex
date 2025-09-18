import type Image from "./Image";
import RealImage from "./RealImage";

export default class PorxyImage implements Image {
  private _image: RealImage | null = null;
  private _domLayout: HTMLDivElement | null = null;
  private _domTitle: HTMLDivElement | null = null;
  private _title: string;
  private _url: string;
  private _parent: Element;

  constructor(title: string, url: string, parent: Element) {
    this._title = title;
    this._url = url;
    this._parent = parent;

    this._domLayout = document.createElement("div");
    this._domLayout.classList.add("layout");
    this._parent.append(this._domLayout);

    this._domTitle = document.createElement("div");
    this._domTitle.classList.add("title-proxy");
    this._domTitle.innerHTML = `<span>${this._title}</span><br/><span>Click to load</span>`;
    this._domLayout.append(this._domTitle);
  }

  append(): void {
    if (this._image) return;
    if (this._domLayout) {
      // 외부에서 null 체크를 해도, 그 값이 콜백(addEventListener 내부 등)에서 실행되는 시점까지 동일하다는 보장이 없다고 TypeScript가 판단
      // 특히 클로저나 비동기 함수에서는 이 현상이 두드러집니다. 타입 가드(if문 등)의 효력이 블록/스코프 내에서만 인정되기 때문.
      this._domLayout.addEventListener("click", () => {
        if (this._domLayout) {
          this._domLayout.style.border = "none";
          this._domLayout.innerHTML = "";
          this._image = new RealImage(this._title, this._url, this._domLayout);
          this._image.append();
        }
      });
    }
  }
}
