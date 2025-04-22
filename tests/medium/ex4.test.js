const rollDice = require('../../exercises/medium/ex4-dice-roller');

describe('Dice Roller function', () => {
  test('should return a number between 1 and 6', () => {
    // Run multiple tests to ensure randomness
    for (let i = 0; i < 100; i++) {
      const result = rollDice();
      expect(result).toBeGreaterThanOrEqual(1);
      expect(result).toBeLessThanOrEqual(6);
      expect(Number.isInteger(result)).toBe(true);
    }
  });
});
