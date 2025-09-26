import UIFactory from "./UIFactory";

import type Button from "./Button";
import type CheckBox from "./CheckBox";
import type TextEdit from "./TextEdit";

import FlatButton from "./FlatButton";
import FlatCheckBox from "./FlatCheckBox";
import FlatTextEdit from "./FlatTextEdit";

export default class FlatUIFactory extends UIFactory {
  createButton(dom: HTMLElement, caption: string): Button {
    return new FlatButton(dom, caption);
  }
  createCheckBox(dom: HTMLElement, label: string, checked: boolean): CheckBox {
    return new FlatCheckBox(dom, label, checked);
  }
  createTextEdit(dom: HTMLElement, text: string): TextEdit {
    return new FlatTextEdit(dom, text);
  }
}
