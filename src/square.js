const { getRandomInteger } = require('./utils');

class Square {
  getGain() {
    return 0;
  }
  isSendingToJail() {
    return false;
  }
}

class SquareGo {
  getGain() {
    return 200;
  }
  isSendingToJail() {
    return false;
  }
}

class SquareTax {
  constructor(taxAmount) {
    this.taxAmount = taxAmount;
  }
  getGain() {
    return -this.taxAmount;
  }
  isSendingToJail() {
    return false;
  }
}

class SquareCard {
  getGain() {
    return 0;
  }
  isSendingToJail() {
    return getRandomInteger(0, 2) === 0;
  }
}

class SquareSendingToJail {
  getGain() {
    return 0;
  }
  isSendingToJail() {
    return true;
  }
}

function getSquare(position) {
  switch (position) {
    case 0:
      return new SquareGo();
    case 4:
      return new SquareTax(200);
    case 12:
    case 28:
      return new SquareTax(150);
    case 38:
      return new SquareTax(75);
    case 30:
      return new SquareSendingToJail();
    case 2:
    case 7:
    case 17:
    case 22:
    case 33:
    case 36:
      return new SquareCard();
    default:
      return new Square();
  }
}

module.exports = getSquare;
