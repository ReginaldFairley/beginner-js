const showAllTypes = require('../../exercises/easy/ex2-type-checker');

describe('Show All Types function', () => {
  test('should return an object with all the types', () => {
    const result = showAllTypes();
    
    expect(result).toHaveProperty('object');
    expect(result).toHaveProperty('array');
    expect(result).toHaveProperty('string');
    expect(result).toHaveProperty('number');
    expect(result).toHaveProperty('boolean');
    expect(result).toHaveProperty('null');
    expect(result).toHaveProperty('undefined');
    expect(result).toHaveProperty('nan');
    
    expect(result.object).toBe('object');
    expect(result.array).toBe('object');
    expect(result.string).toBe('string');
    expect(result.number).toBe('number');
    expect(result.boolean).toBe('boolean');
    expect(result.null).toBe('object');
    expect(result.undefined).toBe('undefined');
    expect(result.nan).toBe('number');
  });
});
