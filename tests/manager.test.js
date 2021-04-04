// const { test, expect } = require('@jest/globals');
const Manager = require('../lib/Manager');

test('can set office', () => {
    const office = 3;
    const E = new Manager('Bill', 5, 'abc@yahoo.com', office)
    expect(E.office).toBe(office)
});

test('can get office', () => {
    const office = 3;
    const E = new Manager('Bill', 5, 'abc@yahoo.com', office)
    expect(E.getOfficeNumber()).toBe(office)
});