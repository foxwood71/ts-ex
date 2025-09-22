export default class Row {
  private _name: string;
  private _birthday: string;
  private _email: string;

  constructor(name: string, birthday: string, email: string) {
    this._name = name;
    this._birthday = birthday;
    this._email = email;
  }

  get name(): string {
    return this._name;
  }

  get birthday(): string {
    return this._birthday;
  }

  get email(): string {
    return this._email;
  }
}
