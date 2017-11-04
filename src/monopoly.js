const Player = require('./player');
const { getRandomInteger } = require('./utils');

function isGameFinished(playerList) {
  return playerList.filter(p => !p.isBankrupted()).length !== 1;
}

function getPositionMoney(position) {
  switch (position) {
    case 0:
      return 200;
    case 4:
    case 12:
    case 28:
    case 38:
      return -150;
    default:
      return 0;
  }
}

function isSendingToJail(position) {
  switch (position) {
    case 30:
      return true;
    case 2:
    case 7:
    case 17:
    case 22:
    case 33:
    case 36:
      return getRandomInteger(0, 2) === 0;
    default:
      return false;
  }
}

function playTurn(player) {
  if (player.inJail) {
    player.inJail = false;
  } else {
    const diceValue = getRandomInteger(1, 7);
    player.position = (player.position + diceValue) % 40;
    player.money += getPositionMoney(player.position);
    if (isSendingToJail(player.position)) {
      player.position = 10;
      player.inJail = true;
    }
  }
}

const playerNames = ['Alicia', 'Bob', 'Cheryl'];
console.log(playerNames.join(', '), 'start to play Monopoly');
const playerList = playerNames.map(name => new Player(name));

for (let i = 0; isGameFinished(playerList); i += 1) {
  const player = playerList[i % 3];
  console.log(`State after ${i} turns`, playerList);
  if (!player.isBankrupted()) {
    playTurn(player);
  }
}

console.log(playerList.find(player => !player.isBankrupted()).name, 'wins the game');
