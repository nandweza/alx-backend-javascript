// eslint-disable-next-line
import Currency from "./3-currency";

export default class Pricing {
  constructor(amount, currency) {
    this.amount = amount;
    this.currency = currency;
  }

  // get and set amount
  get amount() {
    return this._amount;
  }

  set amount(value) {
    this._amount = value;
  }

  // get and set currency
  get currency() {
    return this._currency;
  }

  set currency(value) {
    this._currency = value;
  }

  //methods
  displayFullPrice() {
      return `${this.amount} ${this.currency.displayFullCurrency()}`;
  }

  //static method
  static convertPrice(amount, conversionRate) {
    return amount * conversionRate;
  }
}
