import UIFactory from "./UIFactory";

import type Button from "./Button";
import type CheckBox from "./CheckBox";
import type TextEdit from "./TextEdit";

import D3Button from "./D3Button";
import D3CheckBox from "./D3CheckBox";
import D3TextEdit from "./D3TextEdit";

export default class D3UIFactory extends UIFactory {
  createButton(dom: HTMLElement, caption: string): Button {
    return new D3Button(dom, caption);
  }
  createCheckBox(dom: HTMLElement, label: string, checked: boolean): CheckBox {
    return new D3CheckBox(dom, label, checked);
  }
  createTextEdit(dom: HTMLElement, text: string): TextEdit {
    return new D3TextEdit(dom, text);
  }
}
