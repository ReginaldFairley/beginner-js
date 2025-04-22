const reverseString = require('../../exercises/medium/ex9-reverse-string');

describe('Reverse String function', () => {
  test('should reverse a string', () => {
    expect(reverseString('hello')).toBe('olleh');
    expect(reverseString('JavaScript')).toBe('tpircSavaJ');
    expect(reverseString('12345')).toBe('54321');
  });

  test('should handle empty string', () => {
    expect(reverseString('')).toBe('');
  });

  test('should handle single character', () => {
    expect(reverseString('a')).toBe('a');
  });
});
