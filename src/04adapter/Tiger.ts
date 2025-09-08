// 수정 불가 Class (이 파일은 어댑터 패턴을 설명하기 위한 예시입니다)
// 컴파일된 클래스, 많이 사용된 공영 클래스를 변경하면 많은 프로그램에 영향을 미치는 경우
// 어떤 클래스가 버전업된 경우 하위 버전의 클래스도 지원해야 하는 경우
export default class Tiger {
  private _name: string = "";

  set name(name: string) {
    this._name = name;
  }

  get name(): string {
    return this._name;
  }

  roar(): string {
    return "으르릉~";
  }
}
