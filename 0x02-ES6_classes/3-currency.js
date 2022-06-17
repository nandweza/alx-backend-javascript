export default class Currency {
  constructor(code, name) {
    this.code = code;
    this.name = name;
  }

  // get and set code
  get code() {
    return this._code;
  }

  set code(value) {
    this._code = value;
  }

  // get and set name
  get name() {
    return this._name;
  }

  set name(value) {
    this._name = value;
  }

  // method
  displayFullCurrency() {
    return `${this._name} (${this._code})`;
  }
} 
