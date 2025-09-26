// Abstract Factory 패턴
//  - Abstract Factory는 추상적인 것들을 미리 정해두고 만드는 공장을 의미함
//  - 먼자 만들어야할 컴포넌트들을 추상적으로 정하고 구체적인 조건이 주어지면 조건에 맞는 구체적인 컴포넌트들을 정해 생성하는 패턴
//  - 구체적인 컴포넌트들을 생성해 조립해서 하나의 시스템을 만드는 패턴
//  [정리]
//  - Abstract Factory 패턴은 만들어야 하는 컴포넌트들을 먼저 개념적으로 정해두고 특정한 조건이 주어지면 해당 조건에 맞는 구체적인
//    컴포넌트를 생성하는 페턴입니다.
//  - 미리 정해두는 개념적인 컴포넌트들을 그룹(Group)으로 정하고 해당 조건에 맞는 구제척인 컴포넌트들을 생성하고
//    조립해 하나의 시스템을 완성시키는 패턴입니다.
//

import D3UIFactory from "./D3UIFactory";
import FlatUIFactory from "./FlatUIFactory";
import type UIFactory from "./UIFactory";

let factory: UIFactory;

const flatMode = false;

if (flatMode) {
  factory = new FlatUIFactory();
} else {
  factory = new D3UIFactory();
}

const domButton = document.querySelector(".button") as HTMLElement;
const domCheckBox = document.querySelector(".checkbox") as HTMLElement;
const domTextEdit = document.querySelector(".textedit") as HTMLElement;

factory.createButton(domButton!, "Button");
factory.createCheckBox(domCheckBox!, "CheckBox", true);
factory.createTextEdit(domTextEdit!, "DesignPattern");
