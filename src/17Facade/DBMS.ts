import Row from "./Row";

export default class DBMS {
  private _db = new Map<string, Row>();

  constructor() {
    this._db.set("jane", new Row("jane", "1990-02-14", "jane09@geosee.co.kr"));
    this._db.set("rbert", new Row("rbert", "1979-11-05", "nice@gmail.com"));
    this._db.set("dorosh", new Row("dorosh", "1985-08-21", "dorosh@naver.com"));
  }

  query(name: string, callback: (row: Row) => void): void {
    setTimeout(() => {
      const result = this._db.get(name);
      if (result) {
        callback(result);
      }
    }, 1500);
  }
}
