// Flyweight Design-Pattern
// [개념]
// - 어떤 객체를 사용할 때마다 매번 생성하지 않고 한번만 생성하고 다시 필요해 질때는 이전에 생성된 객체를 재사용함
// - 즉 미리 생성된 객체를 공유해서 사용한다는 개념으로 특히 객체를 생성할 때 많은 자원(메모리, 소요시간 등)이 소모될 경우
//   유용 할 수 있음
// [정리]
// - Flyweight Design-Pattern은 동일한 객체를 여러 번 생성하지 않고 미리 생성해 두고 공유해 사용할 수 있음
// - Flyweight Design-Pattern을 통해 미리 생성해둔 객체는 공유의 개념으로 사용되므로 공유할 속성과 공유하지 않을 속성을 구분하여
//   설계할 필요가 있음
//

import DigitFactory from "./DigitFactory";
import Number from "./Number";

const factory = new DigitFactory();
const domTaget = document.querySelector("#tmp");

let value = 100000;

setInterval(() => {
  const number = new Number(factory, value++);
  if (domTaget) number.put(domTaget);
}, 100);
