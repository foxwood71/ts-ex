import type Command from "./Command";
import Draw from "./Draw";

export default class CircleCommand extends Draw implements Command {
  private _x: number;
  private _y: number;
  private _radius: number;
  // 직전의 Image의 data를 보관하고 있는 속성
  private _previousState: ImageData | null = null;

  constructor(canvas: HTMLCanvasElement, x: number, y: number, radius: number) {
    super(canvas);
    this._x = x;
    this._y = y;
    this._radius = radius;
  }

  run(): void {
    const context = this._canvas.getContext("2d");

    if (context) {
      // 1. 현재의 canvas상의 ImageData를 저장
      this._previousState = context.getImageData(
        0,
        0,
        this._canvas.width,
        this._canvas.height
      );
      context.beginPath();
      context.arc(this._x, this._y, this._radius, 0, 2 * Math.PI);

      context.fillStyle = this._fillColor;
      context.strokeStyle = this._strockeColor;

      context.fill();
      context.stroke();
    } else {
      console.error("2D context not available on canvas.");
    }
  }

  undo(): void {
    const context = this._canvas.getContext("2d");
    if (context && this._previousState) {
      // 저장된 ImageData를 활용하여 canvas를 복원
      context.putImageData(this._previousState, 0, 0);
      this._previousState = null; // 저장된 ImageData를 삭제
    } else if (context && !this._previousState) {
      console.warn("Undo called, but no previous state was saved.");
    } else {
      console.error("2D context not available for undo operation.");
    }
  }
}
