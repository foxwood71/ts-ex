export default abstract class Button {
  protected _dom: HTMLElement;
  protected _caption: string;

  constructor(dom: HTMLElement, caption: string) {
    this._dom = dom;
    this._caption = caption;
  }

  abstract render(): void;
}
