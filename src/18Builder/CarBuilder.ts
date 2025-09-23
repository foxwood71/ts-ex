// Builder 1형
import Car from "./Car";

export default class CarBuilder {
  private _engine: string | undefined = undefined; // 엔진 이름
  private _airbag: boolean = false; // 에어백 여부
  private _color: string | undefined = undefined; // 차량 색상
  private _cameraSensor: boolean = false; // 카메라 센서 유무
  private _AEB: boolean | undefined = undefined; // 자동급제동장치 유무

  setEngine(v: string | undefined): this {
    this._engine = v;
    return this;
  }

  setAirbag(v: boolean): this {
    this._airbag = v;
    return this;
  }

  setColor(v: string | undefined): this {
    this._color = v;
    return this;
  }

  setCameraSensor(v: boolean): this {
    this._cameraSensor = v;
    return this;
  }

  setAEB(v: boolean | undefined): this {
    this._AEB = v;
    return this;
  }

  build(): Car | null {
    if (this._engine == undefined) return null;
    if (this._color == undefined) return null;
    if (this._AEB == undefined) return null;

    return new Car(
      this._engine,
      this._airbag,
      this._color,
      this._cameraSensor,
      this._AEB
    );
  }
}
