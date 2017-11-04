const Player = require('./player');

function isGameFinished(playerList) {
  return playerList.filter(p => !p.isBankrupted()).length !== 1;
}

function playTurn(player) {
  const diceValue = Math.floor(6 * Math.random()) + 1;
  player.position = (player.position + diceValue) % 40;
  player.money -= Math.floor(300 * Math.random());
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
