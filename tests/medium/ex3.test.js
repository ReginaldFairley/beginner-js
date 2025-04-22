const checkResolution = require('../../exercises/medium/ex3-resolution-checker');

describe('Resolution Checker function', () => {
  test('should return "landscape" when width > height', () => {
    expect(checkResolution(1920, 1080)).toBe('landscape');
    expect(checkResolution(800, 600)).toBe('landscape');
  });

  test('should return "portrait" when height >= width', () => {
    expect(checkResolution(1080, 1920)).toBe('portrait');
    expect(checkResolution(500, 500)).toBe('portrait');
  });
});
