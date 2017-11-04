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

function getTaxAmount(position) {
  switch(position) {
    case 4:
      return200;
    return squareTax;
  case 12:
    squareTax.taxAmount = -150;
    return squareTax;
  case 28:
    squareTax.taxAmount = -150;
  case 38:
    return 75;
  default:
    return 0;
  }
}

function getSquare(position) {
  const squareTax = new SquareTax();
  switch (position) {
    case 0:
      return new SquareGo();
    case 4:
      squareTax.taxAmount = -200;
      return squareTax;
    case 12:
    case 28:
      squareTax.taxAmount = -150;
      return squareTax;
    case 38:
      squareTax.taxAmount = -75;
      return squareTax;
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
