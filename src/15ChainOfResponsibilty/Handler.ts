export default abstract class Handler {
  protected nextHandler: Handler | null = null;

  setNext(handler: Handler): Handler {
    this.nextHandler = handler;
    return handler;
  }

  protected abstract process(url: string): void;
  run(url: string): void {
    this.process(url);
    if (this.nextHandler) this.nextHandler.run(url);
  }

  protected displayResult(title: string, content: string): void {
    const domLayout = document.createElement("div");
    const domTitle = document.createElement("div");
    const domContent = document.createElement("div");

    domLayout.append(domTitle, domContent);
    domLayout.classList.add("layout");
    domTitle.classList.add("title");
    domContent.classList.add("content");

    domTitle.innerText = title;
    domContent.innerText = content;

    const domTarget = document.querySelector(".result");
    if (domTarget) {
      domTarget?.append(domLayout);
    }
  }
}
