import TextEdit from "./TextEdit";

export default class D3TextEdit extends TextEdit {
  constructor(dom: HTMLElement, text: string) {
    super(dom, text);
    this.render();
  }

  render(): void {
    this._dom.innerHTML = `
      <input value="${this._text}">
    `;
    this._dom.classList.add("d3-input");
  }
}
