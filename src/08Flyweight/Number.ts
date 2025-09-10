import DigitFactory from "./DigitFactory";

export default class Number {
  private _factory: DigitFactory;
  private _num: number;

  constructor(factory: DigitFactory, num: number) {
    this._factory = factory;
    this._num = num;
  }

  put(dom: Element) {
    const strNum = this._num.toString();
    dom.innerHTML = "";

    // strNum[i]에서 'string | undefined' 형식의 인수는 'string' 형식의 매개 변수에 할당될 수 없습니다.
    // 'undefined' 형식은 'string' 형식에 할당할 수 없습니다." 에러가 발생
    //
    // strictNullChecks 옵션이 켜져 있으면 열이나 문자열에서 인덱스를 사용해 특정 요소에 접근(strNum[i])할 때
    // 그 결과값의 타입은 원본 타입과 undefined의 유니온 타입(string | undefined)으로 추론
    //
    // const len = strNum.length;
    //     for (let i = 0; i < len; i++) {
    //   const div = document.createElement("div");
    //   this._factory.getDigit(parseInt(strNum[i])).put(div);
    //   dom.append(div);
    // }

    // 상기 지적 개선
    for (const char of strNum) {
      const div = document.createElement("div");
      this._factory.getDigit(parseInt(char)).put(div);
      dom.append(div);
    }
  }
}
