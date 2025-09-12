import Unit from "./Unit";

export default class File extends Unit {
  private _size: number;
  constructor(name: string, size: number) {
    super(name);
    this._size = size;
  }

  getSize(): number {
    return this._size;
  }
}
