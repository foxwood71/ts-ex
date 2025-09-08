// Decorator Pattern
// # Decorator의 뜻은 "장식하는 사람"
// # 장식되는 대상과 장식을 동일한 개념으로 처리함
// # 기능을 마지 장식처럼 계속 추가할 수 있는 패턴
// # 기능을 실행 주에 동적으로 변경 또는 확장할 수 있는 패턴
//
// # 상속보다 유연한 패턴
// # 상속은 컴파일 시점에 기능이 결정되지만, 데코레이터는 런타임 시점에 기능이 결정됨
//
// # 장식하는 대상과 장식하는 객체가 동일한 인터페이스를 구현함
// # 장식하는 객체는 장식되는 대상을 포함함
// # 장식하는 객체는 장식되는 대상의 기능을 호출할 수 있음
// # 장식하는 객체는 장식되는 대상의 기능을 호출한 후에 추가적인 기능을 수행할 수 있음
// # 장식하는 객체는 여러 개를 중첩해서 사용할 수 있음
//
// [정리]
// # Decorator 패턴은 어떤 개체에 기능(장식)을 적용할때 그 객체와 적용될 기능을 동일시 할 수 있음
// # 데이터와 기능을 동일시할 수 있으므로 다양한 기능을 중첩해서 적용할 수 있으며 적용되는 기능의
// # 순서에 따라 다를 결과를 얻을 수 있음

import BoxDecorator from "./BoxDecorator";
import LineNumberDecorator from "./LineNumberDecorator";
import SideDecorator from "./SideDecorator";
import Strings from "./Strings";

const strs = new Strings();
strs.add("Hello!");
strs.add("My name is Kim Hyoung-Jun.");
strs.add("I am a GIS Developer.");
strs.add("Design-Pattern is powerful tool.");

const domPre = document.querySelector("pre") as HTMLElement;
const d1 = new SideDecorator(strs, '"');
// d1.print(domPre);

const d2 = new LineNumberDecorator(d1);
// d2.print(domPre);

const d3 = new BoxDecorator(d2);
d3.print(domPre);
