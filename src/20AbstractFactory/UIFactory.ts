import type Button from "./Button";
import type CheckBox from "./CheckBox";
import type TextEdit from "./TextEdit";

export default abstract class UIFactory {
  abstract createButton(dom: HTMLElement, caption: string): Button;
  abstract createCheckBox(
    dom: HTMLElement,
    label: string,
    checked: boolean
  ): CheckBox;
  abstract createTextEdit(dom: HTMLElement, text: string): TextEdit;
}
