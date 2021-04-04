const Intern = require('../lib/Intern');

test('can set school', () => {
    const school = 'msu';
    const E = new Intern('Heather', 1, 'abc@gmail.com', school);
    expect(E.school).toBe(school)
});

test('can get school', () => {
    const school = 'msu';
    const E = new Intern('Heather', 1, 'abc@gmail.com', school);
    expect(E.getSchool()).toBe(school)
})