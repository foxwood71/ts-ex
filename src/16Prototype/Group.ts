import type Prototype from "./Prototype";
import type Shape from "./Shape";

export default class Group implements Shape, Prototype {
  private _shapes = new Array<Shape | Prototype>();

  add(shape: Shape | Prototype): this {
    this._shapes.push((shape as Prototype).copy());
    return this;
  }

  copy(): this {
    const result = new Group();
    this._shapes.forEach((shape) => {
      result.add(shape);
    });

    return result as this;
  }

  draw(canvas: HTMLCanvasElement): this {
    this._shapes.forEach((shape) => {
      (shape as Shape).draw(canvas);
    });
    return this;
  }

  moveOffset(dx: number, dy: number): this {
    this._shapes.forEach((shape) => {
      (shape as Shape).moveOffset(dx, dy);
    });
    return this;
  }
}
