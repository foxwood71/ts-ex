// Memento Pattern
//  - Memento의 뜻은 "추억", "과거의 기억"
//  - 객체의 상태를 기억해 두었다가 필요할때 기억해둔 상태로 객체를 되돌린다
//  - 객체의 상테에 대한 기억은 다른 객체에서도 읽기 전용으로 접근할수 있다
//  - 객체의 상태에 대한 기억에 생성은 오직 해당 객체만 할 수 있다.
//  [정리]
//    - Memento Pattern은 객체의 상태를 기억해 두고 필요할때 다시 복원하기 위한 패턴입니다.
//    - 어떤 기능의 실행 이력 보관, 실행 취소, 재실행 등의 목적을 위해 활용될 수 있는 패턴입니다.
//    - 이미 기억된 객체의 상태가 변경되지 않도록 주의해야 합니다.
//
//

import BlindMan, { Memento, Action, ActionNames } from "./BlindMan";

const blindMan = new BlindMan(0, 0, 10, 10);
let minDistance = Number.MAX_VALUE;
let memento: Memento | null = null;

// enum 미사용 -- ACTION_VALUES 타입 단언으로 안전하게 처리
const ACTION_VALUES = Object.values(Action) as Action[];

// enum 미사용 --  랜덤 선택 함수
function getRandomAction(): Action {
  const idx = Math.floor(Math.random() * ACTION_VALUES.length);
  const result = ACTION_VALUES[idx];
  if (result === undefined) {
    throw new Error("랜덤 인덱스 오류!");
  }
  return result;
}

while (true) {
  // enum 사용시
  //const action: Action = Math.floor(Math.random() * 4) + 1;
  // enum 미사용 --
  const action: Action = getRandomAction();
  const distance = blindMan.walk(action);

  // enum 사용시
  //console.log(Action[action], distance);
  // enum 미 사용시
  console.log(ActionNames[action], distance);

  if (distance === 0.0) {
    console.log("도착!");
    break;
  }
  // 이동시 거리가 멀어지면 기억해둔 최근의 좌표로 이동한다
  if (distance < minDistance) {
    minDistance = distance;
    memento = blindMan.createMemento();
  } else {
    if (memento != null) {
      blindMan.restoreMemento(memento);
      console.log(">> 최근 저장된 기억으로 이동!!"); // action array도 변화를 준다
    }
  }
}

console.log(blindMan.resultPath());
