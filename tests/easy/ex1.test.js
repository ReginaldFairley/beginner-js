const helloWorld = require('../../exercises/easy/ex1-hello-world');

describe('hello world function', () => {
  test('should log "Hello World!" to the console', () => {
    const consoleSpy = jest.spyOn(console, 'log');
    helloWorld();
    expect(consoleSpy).toHaveBeenCalledWith('Hello World!');
    consoleSpy.mockRestore();
  });
});
