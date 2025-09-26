export default abstract class CheckBox {
  protected _dom: HTMLElement;
  protected _label: string;
  protected _checked: boolean;

  constructor(dom: HTMLElement, label: string, checked: boolean) {
    this._dom = dom;
    this._label = label;
    this._checked = checked;
  }

  abstract render(): void;
}
