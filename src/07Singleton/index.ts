// Singleton Pattern은 특정 Class의 instance가 오직 한개만 존재하는 것을 보장합니다.
// Singleton Pattern이 적용된 Cloass의 insttance는 미리 생성해 놓거나 사용될 때 생성하는 것이 가능합니다.

import King from "./King";

// const king  = new King() // 생성자가 private으로 선언되어 있어 instance를 생성 할 수 없다
const king1 = King.getInstance();
king1.sayHello();

const king2 = King.getInstance();

if (king1 === king2) {
  console.log("같은놈");
} else {
  console.log("다른놈");
}
