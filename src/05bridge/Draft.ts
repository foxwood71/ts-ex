import type Display from "./Display";

export default class Draft {
  private _title: string;
  private _author: string;
  private _contents: string[];

  constructor(title: string, author: string, contents: string[]) {
    this._title = title;
    this._author = author;
    this._contents = contents;
  }

  getTitle() {
    return this._title;
  }

  getAuthor() {
    return this._author;
  }

  getContents() {
    return this._contents;
  }

  print(display: Display): void {
    display.title(this);
    display.author(this);
    display.content(this);
  }
}
