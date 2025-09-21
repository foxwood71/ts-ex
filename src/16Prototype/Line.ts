import type Point from "./Point";
import type Prototype from "./Prototype";
import type Shape from "./Shape";

export default class Line implements Shape, Prototype {
  private _pt1: Point;
  private _pt2: Point;

  constructor(pt1: Point, pt2: Point) {
    this._pt1 = pt1.copy(); // 새로운 객체를 생성할후 내용이 변경되도라도 원본이 변경되지 않도록 copy메서드를 사용해서 복사
    this._pt2 = pt2.copy(); // 새로운 객체를 생성할후 내용이 변경되도라도 원본이 변경되지 않도록 copy메서드를 사용해서 복사
  }

  get pt1(): Point {
    return this._pt1;
  }

  set x(pt: Point) {
    this._pt1 = pt.copy();
  }

  get pt2(): Point {
    return this._pt2;
  }

  set pt2(pt: Point) {
    this._pt2 = pt.copy();
  }

  copy(): this {
    const result = new Line(this._pt1, this._pt2);
    return result as this;
  }

  draw(canvas: HTMLCanvasElement): this {
    const context = canvas.getContext("2d");
    context!.beginPath();
    context!.moveTo(this._pt1.x, this.pt1.y);
    context!.lineTo(this._pt2.x, this._pt2.y);
    context!.stroke();
    return this;
  }

  moveOffset(dx: number, dy: number): this {
    this.pt1.moveOffset(dx, dy);
    this.pt2.moveOffset(dx, dy);
    return this;
  }
}
