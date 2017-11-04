const Player = require('./player');
const { getRandomInteger } = require('./utils');

function isGameFinished(playerList) {
  return playerList.filter(p => !p.isBankrupted()).length !== 1;
}

function playTurn(player) {
  const diceValue = getRandomInteger(1, 7);
  player.position = (player.position + diceValue) % 40;
  player.money -= getRandomInteger(0, 300);
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
