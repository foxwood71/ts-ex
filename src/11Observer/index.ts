// 상태(Stat:DiceGame) 변화를 관찰자(ObServer: Player) 전달
// [정리]
// - Observer 패턴은 어떤 상태의 변화에 대한 처리를 위해 사용됩니다.
// - 상태 변화가 발생하면 상태 변화에 관심을 가지고 있는 객체들(Observer)에게 상태 변화를 알리며
//   필요하다면 변경된 상태 값도 전달합니다.

import EvenBettingPlayer from "./EvenBettingPlayer";
import FairDiceGame from "./FairDiceGame";
import NBettingPlayer from "./NBettingPlayer";
import OddBettingPlayer from "./OddBettingPlayer";

const diceGame = new FairDiceGame();
const players = [
  new OddBettingPlayer("홀쭉이"),
  new EvenBettingPlayer("짝눈이"),
  new NBettingPlayer("점쟁이", [2, 3, 5]),
];

players.forEach((player) => diceGame.addPlayer(player));

// 화면 표시
function updateBoard() {
  const domPlayers = document.querySelector(".players");

  if (domPlayers) {
    domPlayers.innerHTML = "";
    players.forEach((player) => {
      const domPlayer = document.createElement("div");
      domPlayer.innerText = player.name;
      if (player.winning) domPlayer.classList.add("win");
      domPlayers.appendChild(domPlayer);
    });
  }
}

updateBoard();

document.querySelector("button")?.addEventListener("click", () => {
  const diceNumber = diceGame.play();

  const domDice = document.querySelector(".dice") as HTMLElement;
  if (domDice) domDice.innerText = diceNumber.toString();
  updateBoard();
});
