import type Image from "./Image";

export default class RealImage implements Image {
  private _title: string;
  private _url: string;
  private _parent: Element;
  private _domLayout: HTMLDivElement | null = null;
  private _domTitle: HTMLDivElement | null = null;
  private _domImage: HTMLImageElement | null = null;
  private _domLoading: HTMLDivElement | null = null;

  constructor(title: string, url: string, parent: Element) {
    this._title = title;
    this._url = url;
    this._parent = parent;

    this._domLayout = document.createElement("div");
    this._domLayout.classList.add("layout");
    this._parent.append(this._domLayout);

    this._domTitle = document.createElement("div");
    this._domTitle.classList.add("title");
    this._domTitle.innerText = this._title;
    this._domLayout.append(this._domTitle);

    this._domLoading = document.createElement("div");
    this._domLoading.classList.add("loading");
    this._domLoading.innerText = "Loading...";
  }

  append() {
    if (this._domImage) return;
    this._domImage = new Image();

    if (this._domLayout && this._domLoading) {
      this._domLayout.append(this._domLoading);
    } else {
      throw console.error();
    }

    this._domImage.src = this._url;
    this._domImage.onload = () => {
      setTimeout(() => {
        // Optional Chaining과 Nullish Coalescing(널 병합연산자) 연산자 활용
        // Optional Chaining(?.) this._domLayout이 null이나 undefined일 경우 에러없이 처리
        // Nullish Coalescing(??) => const parentDom = this._domLayout ?? document.body; // Null | Undefined 일경우 오른쪽 값을제시
        // 타입단언=> null이 들어올 확율이 없다 강조!
        // 그 모든것을 무시하고 null or Undefined 여부를 확인하여 실행
        if (this._domLayout && this._domLoading && this._domImage) {
          this._domLayout.removeChild(this._domLoading);
          this._domLayout.append(this._domImage);
        } else {
          // 1. console.error(): 이 부분은 브라우저의 개발자 도구나 Node.js 환경의 콘솔에 에러 메시지를 출력합니다.
          //    일반적으로 이 함수는 에러 로그를 남기는 데 사용되지만, 실제로 프로그램의 실행을 멈추지는 않습니다.
          // 2. throw: 이 키워드는 뒤에 오는 값을 **예외(exception)**로 던져서 프로그램의 일반적인 흐름을 중단시킵니다.
          //    throw 뒤에는 숫자, 문자열, 객체 등 어떤 것이든 올 수 있지만, 보통은 new Error() 객체를 던져서
          //    에러의 스택 트레이스(호출 경로)를 확인할 수 있게 합니다.
          //
          // console.error() 함수를 실행하여 에러 메시지를 콘솔에 출력한 다음,
          // **console.error()가 반환하는 값(undefined)**을 예외로 던져서 프로그램의 실행을 멈춥니다.
          // 권장은 throw new Error("오류 메시지"); 요게 더 좋음 오류의 원인을 상세하게 설명하고
          // 디버깅에 필수적인 호출 스택 정보를 담고 있기 때문임.
          //
          throw console.error();
        }
      }, Math.random() * 5000 + 3000);
    };
  }
}
