const Engineer = require('../lib/Engineer');

test('can set github', () => {
    const gitHub = 'hstor3';
    const E = new Engineer('Sam', 7, 'sam@aol.com', gitHub);
    expect(E.gitHub).toBe(gitHub);
});

test('can get github', () => {
    const gitHub = 'hstor3';
    const E = new Engineer('Sam', 7, 'sam@aol.com', gitHub);
    expect(E.getGitHub()).toBe(gitHub);
});