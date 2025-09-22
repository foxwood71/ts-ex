// Frcade(정면, 앞면, 겉보기) Pattern
//  - 어떤 기능을 처리하기 위해 여러 객체들 사이의 복잡한 매서드 사용을 감춰서 단순화 시켜주는 패턴
//
//  ex) 어떤 데이터를 조회해서 출력해주는 기능
//
//  Cache 객체    - Cache 조회        -> (Facade 패턴 적용) ->  결과 조회 및 출력   ->  Facade 객체
//  DBMS 객체     - DBMS 조회
//  Row 객체      - Cache에 입력
//  Message객체   - 조회 결과 가공
//                - 가공결과 출력
// [정리]
//  - Facade 패턴은 어떤 기능 개발을 위해 필요한 많은 클래스와 관련 API 호출 등 복잡한 내용을 단순화 시켜주는 패턴
//  - 즉 Facade에 해당하는 클래스 하나로 단순화 시키고 기존의 클래스들은 감출 수 있습니다.(비공개 처리가 가능).
//  - Facade 패턴을 적용하여 만들어진 라이브러리를 사용하는 개발자의 입장에서는 학습에 대한 부담을 많이 줄이게 됩니다.

import Facade from "./Facade";

// import DBMS from "./DBMS";
// import Cache from "./Cache";
// import Message from "./Message";

// const dbms = new DBMS();
// const cache = new Cache();

const domInput = document.querySelector("input") as HTMLInputElement;
const domButton = document.querySelector("Button") as HTMLButtonElement;
const domResult = document.querySelector(".result");

// Facade 적용전

const facade = new Facade();

if (domButton && domInput && domResult) {
  domButton.addEventListener("click", () => {
    const name = domInput.value;
    facade.queryName(
      name,
      () => {
        domInput.value = "(조회 중...)";
        domButton.disabled = true;
      },
      () => {
        domInput.value = name;
        domButton.disabled = false;
      },
      domResult
    );
  });
}

/* Facade 적용전
if (domButton && domInput && domResult) {
  domButton.addEventListener("click", () => {
    const name = domInput.value;
    const row = cache.get(name);
    if (!row) {
      domInput.value = "(조회 중...)";
      domButton.disabled = true;

      dbms.query(name, (row) => {
        domInput.value = name;
        domButton.disabled = false;
        if (row) {
          cache.put(row);
        }
        const message = new Message(row);
        message.print(domResult);
      });
    } else {
      const message = new Message(row);
      message.print(domResult);
    }
  });
}
*/
