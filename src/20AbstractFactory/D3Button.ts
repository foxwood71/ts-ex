import Button from "./Button";

export default class D3Button extends Button {
  constructor(dom: HTMLElement, caption: string) {
    super(dom, caption);
    this.render();
  }

  render(): void {
    this._dom.innerHTML = `
      ${this._caption}
      <div></div>
      <div></div>
    `;
    this._dom.classList.add("d3-button");
  }
}
