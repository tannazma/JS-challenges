const convertMinToSec = require('./minToSec');

test('Converts 1 minute to 60 seconds', () => {
    expect(convertMinToSec(1)).toBe(60);
});

test('Converts 2 minutes to 120 seconds', () => {
    expect(convertMinToSec(2)).toBe(120);
});

test('Converts 0 minute to 0 seconds', () => {
    expect(convertMinToSec(0)).toBe(0);
});