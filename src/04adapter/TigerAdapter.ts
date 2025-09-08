// 수정 불가 Class =>
// 컴파일된 클래스, 많이 사용된 공영 클래스를 변경하면 많은 프로그램에 영향을 미치는 경우
// 어떤 클래스가 버전업된 경우 하위 버전의 클래스도 지원해야 하는 경우
// 사용되는 어댑터 패턴
import Animal from "./Animal";
import Tiger from "./Tiger";

export default class TigerAdapter extends Animal {
  private _tiger: Tiger;

  constructor(name: string) {
    super(name);
    this._tiger = new Tiger();
    this._tiger.name = name;
  }

  get name(): string {
    return this._tiger.name;
  }

  sound(): void {
    console.log(`${this._tiger.name}가 ${this._tiger.roar()}`);
  }
}
