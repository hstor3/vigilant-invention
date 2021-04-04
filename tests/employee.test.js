const Employee = require('../lib/Employee');

test('can create employee', () => {
    const E = new Employee();
    expect(typeof(E)).toBe('object')
});


test('can set name', () => {
    const name = 'Heather';
    const E = new Employee(name);
    expect(E.name).toBe(name)
});

test('can get name', () => {
    const testValue = 'Heather';
    const E = new Employee(testValue);
    expect(E.getName()).toBe(testValue)
})