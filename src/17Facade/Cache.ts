import type Row from "./Row";

export default class Cache {
  private _cache = new Map<string, Row>();

  put(row: Row): void {
    this._cache.set(row.name, row);
  }

  get(name: string): Row | undefined {
    const result = this._cache.get(name);
    return result;
  }
}
