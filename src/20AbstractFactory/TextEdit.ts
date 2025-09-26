export default abstract class TextEdit {
  protected _dom: HTMLElement;
  protected _text: string;

  constructor(dom: HTMLElement, text: string) {
    this._dom = dom;
    this._text = text;
  }

  abstract render(): void;
}
