const { add, subtract } = require('../src/index.js');

describe('Math Functions', () => {
  test('should add two numbers', () => {
    expect(add(2, 3)).toBe(5);
  });

  test('should subtract two numbers', () => {
    expect(subtract(5, 3)).toBe(2);
  });

  test('should handle negative numbers', () => {
    expect(add(-1, -2)).toBe(-3);
    expect(subtract(-1, -2)).toBe(1);
  });
});