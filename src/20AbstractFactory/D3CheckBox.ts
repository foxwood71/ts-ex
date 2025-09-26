import CheckBox from "./CheckBox";

export default class D3CheckBox extends CheckBox {
  constructor(dom: HTMLElement, label: string, checked: boolean) {
    super(dom, label, checked);
    this.render();
  }

  render(): void {
    this._dom.innerHTML = `
      <label>${this._label}
        <input type="checkbox" ${this._checked ? 'checked = "checked"' : ""}>
        <div class="box"></div>
        <div class="line"></div>
      </label>
    `;
    this._dom.classList.add("d3-checkbox");
  }
}
