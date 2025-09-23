export default class Car {
  private _engine: string; // 엔진 이름
  private _airbag: boolean; // 에어백 여부
  private _color: string; // 차량 색상
  private _cameraSensor: boolean; // 카메라 센서 유무
  private _AEB: boolean; // 자동급제동장치 유무

  constructor(
    engine: string,
    airbag: boolean,
    color: string,
    cameraSensor: boolean,
    AEB: boolean
  ) {
    this._engine = engine;
    this._airbag = airbag;
    this._color = color;
    this._cameraSensor = cameraSensor;
    this._AEB = AEB;
  }

  print(): void {
    //console.table(this); 이거 필드가 설정만 하고 사용하지 않는다는 오류 제거를 위해 이렇게 적어야 함
    console.table({
      engine: this._engine,
      airbag: this._airbag,
      color: this._color,
      cameraSensor: this._cameraSensor,
      AEB: this._AEB,
    });
  }
}
