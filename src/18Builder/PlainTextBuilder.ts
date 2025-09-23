import Builder from "./Builder";
import type Data from "./Data";

export default class PlainTextBuilder extends Builder {
  head(): string {
    return "";
  }
  body(): string {
    return `Name: ${this._data.name}, Age: ${this._data.age}`;
  }
  foot(): string {
    return "";
  }

  constructor(data: Data) {
    super(data);
  }
}
