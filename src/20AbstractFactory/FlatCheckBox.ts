import CheckBox from "./CheckBox";

export default class FlatCheckBix extends CheckBox {
  constructor(dom: HTMLElement, label: string, checked: boolean) {
    super(dom, label, checked);
    this.render();
  }

  render(): void {
    this._dom.innerHTML = `
      <label>${this._label}
        <input type="checkbox" ${this._checked ? 'checked = "checked"' : ""}>
        <span></span>
      </label>
    `;
    this._dom.classList.add("flat-checkbox");
  }
}
