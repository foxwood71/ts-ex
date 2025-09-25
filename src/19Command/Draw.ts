export default class Draw {
  protected _canvas: HTMLCanvasElement;
  protected _fillColor: string;
  protected _strockeColor: string;

  constructor(
    canvas: HTMLCanvasElement,
    fillColor = "#ffffff",
    strokeColor = "#000000"
  ) {
    this._canvas = canvas;
    this._fillColor = fillColor;
    this._strockeColor = strokeColor;
  }

  setFillColor(color: string): Draw {
    this._fillColor = color;
    return this;
  }
  setStrokeColor(color: string): Draw {
    this._strockeColor = color;
    return this;
  }
}
