function rollDice() {
  /* return a random number between 1 and 6, simulating a dice roll */
  return Math.floor(Math.random() * 6) + 1;
}

module.exports = rollDice;
