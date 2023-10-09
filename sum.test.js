const sum = require('./sum');

test('1+3', () => {
    expect(sum(1, 3)).toBe(4);
});

test('3+8', () => {
    expect(sum(3, 8)).toBe(11);
});

test('-2 add 5', () => {
    expect(sum(-2, 5)).toBe(3);
});