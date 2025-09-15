// Mediator: 중재자
// [정리]
// - Mediator 패턴은 많은 객체들 간의 복잡한 관계를 중재자를 두어 단순화 시킵니다.
// - 또한 객체의 상태 변경으로 인해 다른 객체를 제어할 때 제어에 대한 흩어진 코드를
//   중재자로 모아 모두 처리해 줌으로써 객체들의 복잡한 관계를 제거 합니다.

import SmartHome from "./SmartHome";

const home = new SmartHome();
home.install();
