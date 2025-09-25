import type Command from "./Command";
import Draw from "./Draw";

export default class TextCommand extends Draw implements Command {
  private _x: number;
  private _y: number;
  private _size: number;
  private _text: string;

  constructor(
    canvas: HTMLCanvasElement,
    x: number,
    y: number,
    size: number,
    text: string
  ) {
    super(canvas);
    this._x = x;
    this._y = y;
    this._size = size;
    this._text = text;
  }

  run(): void {
    const context = this._canvas.getContext("2d");
    if (context) {
      context.font = `${this._size}px arial`;
      context.textAlign = "center";
      context.textBaseline = "middle";

      context.fillStyle = this._fillColor;
      context.strokeStyle = this._strockeColor;

      context.fillText(this._text, this._x, this._y);
      context.strokeText(this._text, this._x, this._y);
    } else {
      console.error;
    }
  }

  undo(): void {
    throw new Error("Method not implemented.");
  }
}
