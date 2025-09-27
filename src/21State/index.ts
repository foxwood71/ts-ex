// State 패턴
//  - 상태(State)를 클래스화하여 객체를 만들 수 있는 패턴
//  - 어떤 상태에서 다른 상태로 변경할때 각 상태의 변화 따른 조건 처리를 매우 효과적으로 코딩할 수 있음
//  - 상태 조건 및 변화에 따른 if조건문을 제거할 수 있음
//  [정리]
//  - State 패턴은 상태를 클래스화하여 객체를 만들 수 있는 패턴입니다.
//  - 어떤 상태에서는 다른 상태로 변경할 때 각 상태 변화에 따른 조건 처리를 매우 효과적으로 코딩할 수 있습니다.
//  - 새로운 상태 추가 시에도 상태 변화 로직이 복잡해지지 않고 한가지 상태만 집중해서 처리할 수 있습니다.
//

import Player from "./Player";

const domTalk = document.querySelector(".talk") as HTMLElement;
const domStand = document.querySelector(".stand") as HTMLElement;
const domSit = document.querySelector(".sit") as HTMLElement;
const domWalk = document.querySelector(".walk") as HTMLElement;
const domRun = document.querySelector(".run") as HTMLElement;

const player = new Player(domTalk);

function putDescription() {
  const domDescription = document.querySelector(".description") as HTMLElement;
  domDescription!.innerText = `${player
    .getState()
    .getDescription()} / 속도 ${player.getSpeed()} km/h`;
}

putDescription();

domStand.addEventListener("click", () => {
  player.getState().standUp();
  putDescription();
});

domSit.addEventListener("click", () => {
  player.getState().sitDown();
  putDescription();
});

domWalk.addEventListener("click", () => {
  player.getState().walk();
  putDescription();
});

domRun.addEventListener("click", () => {
  player.getState().run();
  putDescription();
});
