// # Bridge Pattern은 기능 계층과 구현 개층을 분리합니다.
//
// # 새로운 기능을 추가 할때는 기능 계층을 확장하고 새로운 구현을 추가할때는
//   구현 계층을 확장함으로써 복잡도를 효과적으로 낮출 수 있습니다.
//
// # 기능 계층과 구현 계층은 서로 위임을 통해서 통신합니다. (draft class, display interface <- Bridge)
//
// # 클래스들간의 관계는 단순하게 만들어 주는 것이 좋은대  Brige Pattern은
//   기능과 구현을 분리함으로써 클래스들간의 관계를 단순하게 유지시켜 줍니다.
//
//  기능계층 : 상속받은 클래스에서 완전히  새로운 매서드(기능)을 추가하는 것
//    Draft <- CharactersCounter
//
//  구현계층 : 추상 클래스 상속 또는 인터페이스 구현을 통해 이미 선언된 매서드를 구현하는 것
//    Display(i/f) - SimpleDisplay,
//                 - CaptionDisplay
//
import Draft from "./Draft";
import SimpleDisplay from "./SimpleDisplay";
import CaptionDisplay from "./CaptionDisplay";
import CharactersCounter from "./CharactersCounter";

const title = "복원된 지구";
const author = "김형준";
const contents = [
  "플라스틱 사용의 감소와",
  "바다 생물 어획량 감소로 인하여",
  "지구는 복원되었다.",
];

const draft1 = new Draft(title, author, contents);
const draft2 = new CharactersCounter(title, author, contents);

const display1 = new SimpleDisplay();
const display2 = new CaptionDisplay();

draft1.print(display1);
draft1.print(display2);

draft2.print(display1);
draft2.print(display2);

console.log(`전체 문자수: ${draft2.getCharactersCount()}`);
