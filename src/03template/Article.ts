export default class Aticle {
  private _title: string;
  private _content: string[];
  private _footer: string;

  constructor(title: string, content: string[], footer: string) {
    this._title = title;
    this._content = content;
    this._footer = footer;
  }

  public getTitle(): string {
    return this._title;
  }

  public getContent(): string[] {
    return this._content;
  }

  public getFooter(): string {
    return this._footer;
  }
}
