import type Command from "./Command";
import Draw from "./Draw";

export default class BoxCommand extends Draw implements Command {
  private _x: number;
  private _y: number;
  private _width: number;
  private _height: number;

  constructor(
    canvas: HTMLCanvasElement,
    x: number,
    y: number,
    width: number,
    height: number
  ) {
    super(canvas);
    this._x = x;
    this._y = y;
    this._width = width;
    this._height = height;
  }

  run(): void {
    const context = this._canvas.getContext("2d");
    if (context) {
      context.beginPath();
      context.rect(this._x, this._y, this._width, this._height);

      context.fillStyle = this._fillColor;
      context.strokeStyle = this._strockeColor;

      context.fill();
      context.stroke();
    } else {
      console.error;
    }
  }

  undo(): void {
    throw new Error("Method not implemented.");
  }
}
