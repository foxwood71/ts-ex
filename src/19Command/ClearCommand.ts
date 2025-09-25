import type Command from "./Command";
import Draw from "./Draw";

export default class ClearCommand extends Draw implements Command {
  constructor(canvas: HTMLCanvasElement) {
    super(canvas);
  }

  run(): void {
    const context = this._canvas.getContext("2d");
    context?.clearRect(0, 0, this._canvas.width, this._canvas.height);
  }

  undo(): void {
    throw new Error("Method not implemented.");
  }
}
