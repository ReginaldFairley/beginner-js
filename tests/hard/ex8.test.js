const simulateBattle = require('../../exercises/hard/ex8-battle-simulation');

describe('Battle Simulation function', () => {
  test('should reduce health of both players based on damage', () => {
    const player1 = { name: 'Hero', health: 100, damage: 20, weapon: 'Sword', speed: 10 };
    const player2 = { name: 'Enemy', health: 80, damage: 15, weapon: 'Axe', speed: 8 };
    
    const result = simulateBattle(player1, player2);
    
    expect(result).toHaveProperty('player1Health');
    expect(result).toHaveProperty('player2Health');
    expect(result.player1Health).toBe(85); // 100 - 15
    expect(result.player2Health).toBe(60); // 80 - 20
  });
});
