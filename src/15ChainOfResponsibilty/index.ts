// Chain of Responsibuility design-Pattern
//  - 책임이란 무언가를 처리하는 기능(클래스)
//  - 역러개의 책임들을 동적으로 연결해서 순차적으로 실행하는 패턴
//  - 기능을 클래스 단위로 분리하여 구현함으로써 단일 책임의 원칙(SRP)을 자연스럽게 따르게 됨
//  ex)
//    url -> 책임(프로토콜) -> 책임2(도메인) -> 책임3(포트)
//    신용카드 -> 국민 -> 삼성 -> 현대
//
// [객체지향 설계원칙(SOLID)]
//  - 단일 책임 원칙(Single Responsiblity Principle): 각 클래스는 하나의 책임만 가져야 한다
//  - 개방-폐쇄 원칙(Open Closed Principle): 확장에는 열려 있고 수정에는 닫혀 있는, 즉 기존 코드를 변경하지 않으면서(Close).
//    기능을 추가할 수 있도록(Open) 설계 되어야 한다
//  - 리스코프 치환 원칙(Liskov Substitution Principle): 자식 클래스는 언제나 자신의 부모 클래를 대체할 수 있다.
//  - 인터페이스 분리 원칙(Interface Segregation Principle): 작은 기능별로 인터페이스를 작게 분리해야 한다.
//  - 의존 역전 원칙(Dependency Inversion Principle): 의존 관계를 맺을 때 변경이 자주 발생하는 것보다 변경이 거의 없는 것에 의존해야 한다는 것으로
//    최대한 인터페이스나 추상 클래스와 관계를 맺으라는 것임
//
//  [정리]
//  - Chain Of Respoinsibility 패턴은 기능 단위로 클래스를 분리하고 이 클래스의 객체를 연결해서 각 기능을 지정된 수서로 실행할 수 있는 패턴 입니다.
//  - 기능을 클래스 별로 분리하여 구현하도록 유도하므로 객체지향 설계 원칙 중 단일 책임 원칙 및 개방폐쇠원칙 등을 자연스럽게 따르게 됩니다.
//

import DomainHandler from "./DomainHandler";
import PortHandler from "./PortHandler";
import ProtocolHandler from "./ProtocolHandler";

const handler1 = new ProtocolHandler();
const handler2 = new DomainHandler();
const handler3 = new PortHandler();

handler1.setNext(handler2).setNext(handler3); // return 문에 handler를 돌려줘서 chain처럼 연결된다

const domInput = document.querySelector("#url") as HTMLInputElement;
const domBtn = document.querySelector("#btn") as HTMLButtonElement;

if (domBtn) {
  domBtn.addEventListener("click", () => {
    if (domInput) {
      const url = domInput.value;
      handler1.run(url);
    }
  });
}
