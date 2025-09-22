import DBMS from "./DBMS";
import Cache from "./Cache";
import Message from "./Message";

export default class Facade {
  private _dbms = new DBMS();
  private _cache = new Cache();

  queryName(
    name: string,
    onBeforeQuery: () => void,
    onAfterQuery: () => void,
    domOutput: Element
  ) {
    const row = this._cache.get(name);

    if (!row) {
      onBeforeQuery();
      this._dbms.query(name, (row) => {
        onAfterQuery();
        if (row) {
          this._cache.put(row);
        }
        const message = new Message(row);
        message.print(domOutput);
      });
    } else {
      const message = new Message(row);
      message.print(domOutput);
    }
  }
}
