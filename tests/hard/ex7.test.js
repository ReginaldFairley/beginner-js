const { Player, createPlayer } = require('../../exercises/hard/ex7-player-class');

describe('Player Class', () => {
  test('should create a player with all required properties', () => {
    const player = new Player('Hero', 100, 'Sword', 10, 25);
    
    expect(player.name).toBe('Hero');
    expect(player.health).toBe(100);
    expect(player.weapon).toBe('Sword');
    expect(player.speed).toBe(10);
    expect(player.damage).toBe(25);
  });
  
  test('createPlayer function should return a Player instance', () => {
    const player = createPlayer('Villain', 80, 'Axe', 8, 30);
    
    expect(player instanceof Player).toBe(true);
    expect(player.name).toBe('Villain');
    expect(player.health).toBe(80);
    expect(player.weapon).toBe('Axe');
    expect(player.speed).toBe(8);
    expect(player.damage).toBe(30);
  });
});
