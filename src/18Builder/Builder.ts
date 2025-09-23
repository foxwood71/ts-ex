import type Data from "./Data";

export default abstract class Builder {
  protected _data: Data;

  constructor(data: Data) {
    this._data = data;
  }
  abstract head(): string;
  abstract body(): string;
  abstract foot(): string;
}
