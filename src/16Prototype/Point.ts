import type Prototype from "./Prototype";
import type Shape from "./Shape";

export default class Point implements Shape, Prototype {
  private _x: number;
  private _y: number;

  constructor(x: number, y: number) {
    this._x = x;
    this._y = y;
  }

  get x(): number {
    return this._x;
  }

  set x(v: number) {
    this._x = v;
  }

  get y(): number {
    return this._y;
  }

  set y(v: number) {
    this._y = v;
  }

  copy(): this {
    const result = new Point(this._x, this._y);
    return result as this;
  }

  draw(canvas: HTMLCanvasElement): this {
    const context = canvas.getContext("2d");
    context!.beginPath();
    context!.arc(this._x, this._y, 4, 0, 2 * Math.PI);
    context!.fill();

    return this;
  }

  moveOffset(dx: number, dy: number): this {
    this._x += dx;
    this._y += dy;
    return this;
  }
}
