export default class Digit {
  private _data: Array<string> | null = null;
  private _url: string;

  constructor(url: string) {
    this._url = url;
  }

  private load(url: string, domOutput: Element) {
    fetch(url)
      .then((response) => {
        return response.json();
      })
      .then((json) => {
        this._data = json;
        if (domOutput) this.put(domOutput);
      })
      .catch(function (error) {
        console.log(error);
      });
  }

  put(dom: Element): void {
    if (!this._data) this.load(this._url, dom);
    else {
      dom.innerHTML = '<div class="digit-layout"></div>';
      const domLayout = dom.querySelector(".digit-layout");

      this._data.forEach((item: string) => {
        const len = item.length;
        for (let i = 0; i < len; i++) {
          const domCell = document.createElement("div");
          // 주의
          //  #ff00 -> rgba: RGB + Alpha(last digit)
          //  #ff0 -> rgb: RGB
          domCell.style.backgroundColor = item[i] === "1" ? "#ff0" : "#333";
          domLayout?.append(domCell);
        }
      });
    }
  }
}
