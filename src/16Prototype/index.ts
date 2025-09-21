// Prototype  Pattern
//  - 실행중에 생성된 객체로 다른 객체를 생성하는 패턴
//  - Prototype으로 만든 객체의 상태를 변경해도 원본 객체의 상태는 변경되지 않도록 해야함(Deep Copy; 깊은복사)
//  [정리]
//    - Prototype 패턴은 객체를 클래스 이름으로 생성하지 않고 실행중에 생성된 객체를 통해 동일한 생태 값으로 새로운 객체를 생성하는 패턴입니다.
//    - 원본 객체에 대한 깊은 복사(Deep Copy)를 사용하여 변경에 대해 서로 다른 쪽에 영향을 주지 않습니다.
//

import Group from "./Group";
import Line from "./Line";
import Point from "./Point";

const domCanvas = document.querySelector("canvas");

const pt1 = new Point(100, 100);
// pt1.draw(domCanvas!);

const pt2 = new Point(200, 100);
// pt2.draw(domCanvas!);

const pt3 = new Point(200, 200);
// pt3.draw(domCanvas!);

const pt4 = new Point(100, 200);
// pt4.draw(domCanvas!);

const line1 = new Line(pt1, pt2);
// line1.draw(domCanvas!);

const line2 = new Line(pt2, pt3);
// line2.draw(domCanvas!);

const line3 = new Line(pt3, pt4);
// line3.draw(domCanvas!);

const line4 = new Line(pt4, pt1);
// line4.draw(domCanvas!);

const rect = new Group();
rect.add(line1).add(line2).add(line3).add(line4);

const cloneRect = rect.copy();

cloneRect.moveOffset(200, 200);
rect.moveOffset(-50, -50);

rect.draw(domCanvas!);
cloneRect.draw(domCanvas!);
