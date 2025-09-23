import Builder from "./Builder";
import type Data from "./Data";

export default class XMLBuilder extends Builder {
  head(): string {
    return '<?xml version="1.0" encoding="utf-8"?><DATA>';
  }

  body(): string {
    return `<NAME>${this._data.name}</NAME><AGE>${this._data.age}</AGE>`;
  }

  foot(): string {
    return "</DATA>";
  }
  constructor(data: Data) {
    super(data);
  }
}
