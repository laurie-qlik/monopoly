class Player {
  constructor(name) {
    this.name = name;
    this.position = 0;
    this.money = 1500;
  }

  isBankrupted() {
    return this.money < 0;
  }
}

module.exports = Player;
