const screamName = require('../../exercises/easy/ex6-name-screamer');

describe('Name Screamer function', () => {
  test('should convert name to uppercase and add exclamation marks', () => {
    expect(screamName('john')).toBe('JOHN!!!');
    expect(screamName('Sarah')).toBe('SARAH!!!');
    expect(screamName('bob smith')).toBe('BOB SMITH!!!');
  });
});
