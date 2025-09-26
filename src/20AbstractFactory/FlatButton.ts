import Button from "./Button";

export default class FlatButton extends Button {
  constructor(dom: HTMLElement, caption: string) {
    super(dom, caption);
    this.render();
  }

  render(): void {
    this._dom.innerText = this._caption;
    this._dom.classList.add("flat-button");
  }
}
