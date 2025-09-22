import type Row from "./Row";

export default class Message {
  private _row: Row;

  constructor(row: Row) {
    this._row = row;
  }

  print(dom: Element) {
    const domLayout = document.createElement("div");
    domLayout.classList.add("layout");
    if (this._row) {
      domLayout.innerHTML = `
        <div class="name">${this._row.name}</div>
        <div class="birthday">${this._row.birthday}</div>
        <div class="email">${this._row.email}</div>
      `;
    } else {
      domLayout.innerText = `NO RESULT`;
    }
    dom.append(domLayout);
  }
}
