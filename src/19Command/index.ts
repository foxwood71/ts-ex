// Command 패턴
//  - 하나의 명령(기능)을 객체화한 패턴
//  - 객체는 전달할 수 있고 보관할 수 있음, 즉 명령(기능)을 전달하고 보관할 수 있께 됨.
//  - 배치 실행, Undo/Redo, 우선 순위가 높은 명령을 먼저 실행하기등이 가능해짐
//
// [정리]
//  - Command 패턴은 하나의 기능을 클래스의 객체로 정의한 것이며 이를 커맨드 객체라고 합니다.
//  - 커맨드 객체는 저장소에 저장해서 계속 유지할 수 있고 함수의 인자등으로 전달할 수 있어 다양하게 사용될 수 있습니다.
//  - 여러개의 커맨드를 한번에 실해하는 배치 기능, 실행에 대한 취소와 재실에 대한 Undo/Redo 기능 개발레 Command 패턴을 적용 할수 있습니다.

import BoxCommand from "./BoxCommand";
import CircleCommand from "./CircleCommand";
import ClearCommand from "./ClearCommand";
import PlayCommand from "./PlayCommand";
import TextCommand from "./TextCommand";

const domCanvas = document.querySelector("canvas");
const domDraw = document.querySelector(".draw");
const domPlay = document.querySelector(".play");

if (domCanvas && domDraw && domPlay) {
  const cmdClear = new ClearCommand(domCanvas);

  const cmdCircle1 = new CircleCommand(domCanvas, 50, 150, 40);
  cmdCircle1.setFillColor("#ee4040").setStrokeColor("#ee4040");

  const cmdText = new TextCommand(domCanvas, 200, 200, 40, "Design Patterns");
  cmdText.setStrokeColor("#458de5");

  const cmdCircle2 = new CircleCommand(domCanvas, 355, 240, 30);
  cmdCircle2.setFillColor("#ff884d").setStrokeColor("#ff884d");

  const cmdBox = new BoxCommand(domCanvas, 40, 165, 320, 65);
  cmdBox.setFillColor("#4dc4ff").setStrokeColor("#4dc4ff");

  domDraw.addEventListener("click", () => {
    cmdClear.run();
    cmdCircle1.run();
    cmdBox.run();
    cmdCircle2.run();
    cmdText.run();
  });

  const cmdPlay = new PlayCommand(domCanvas);
  cmdPlay.addCommand(cmdClear);
  cmdPlay.addCommand(cmdCircle1);
  cmdPlay.addCommand(cmdBox);
  cmdPlay.addCommand(cmdCircle2);
  cmdPlay.addCommand(cmdText);

  domPlay.addEventListener("click", () => {
    cmdPlay.run();
  });
}
