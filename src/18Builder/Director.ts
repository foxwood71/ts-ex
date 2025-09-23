import type Builder from "./Builder";

export default class Director {
  private _builder: Builder;
  constructor(builder: Builder) {
    this._builder = builder;
  }
  build() {
    return `${this._builder.head()}${this._builder.body()}${this._builder.foot()}`;
  }
}
