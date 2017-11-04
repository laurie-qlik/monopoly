/* eslint-env mocha */
require('should');
const { Player } = require('../src/monopoly');

describe('Monopoly', () => {
  describe('Player', () => {
    describe('constructor', () => {
      it('sets name', () => {
        const player = new Player('Valerie');
        player.name.should.eql('Valerie');
      });
      it('sets chestNumber', () => {
        const player = new Player();
        player.chestNumber.should.eql(0);
      });
    });
  });
});
