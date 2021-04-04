let jobTitle = '';
const inquirer = require('inquirer');
const fs = require('fs');
const path = require('path');
const render = require('./index.js');
const Manager = require('./lib/Manager.js');
const Intern = require('./lib/Intern');
const Engineer = require('./lib/Engineer.js');
const Employee = require('./lib/Employee.js');

let team = []

const questionsManager = [
    {
        type: 'input',
        name: 'managerName',
        message: "Please enter the manager's name.",
    },
    {
        type: 'input',
        name: 'managerIdNum',
        message: "What is the manager's ID number?",
    },
    {
        type: 'input',
        name: 'managerEmail',
        message: "What is the employee's email address?",
    },
    {
        type: 'input',
        name: 'office',
        message: "Please enter the manager's office number."
    },
    // name, id, email, office number, menu option to add 
    // engineer or intern
];
const questionsIntern = [
    {
        type: 'input',
        name: 'internName',
        message: "Please enter the intern's name.",
    },
    {
        type: 'input',
        name: 'internIdNum',
        message: "What is the intern's ID number?",
    },
    {
        type: 'input',
        name: 'internEmail',
        message: "What is the intern's email address?",
    },
    {
        type: 'input',
        name: 'school',
        message: "Please enter the intern's school."
    },
    // name, id, email, school, back to menu to add another or finish
];

const engineerQuestions = [
    {
        type: 'input',
        name: 'engineerName',
        message: "Please enter the engineer's name.",
    },
    {
        type: 'input',
        name: 'engineerIdNum',
        message: "What is the engineer's ID number?",
    },
    {
        type: 'input',
        name: 'engineerEmail',
        message: "What is the engineer's email address?",
    },
    {
        type: 'input',
        name: 'engineerGithub',
        message: "Please enter the engineer's GitHub user name."
    },
    // name, id, email, github username, back to the menu
]


function promptQuestions() {
    return inquirer
        .prompt([
            {
                type: 'list',
                name: 'jobTitle',
                message: "What is the employee's job title?",
                choices: ['Intern', 'Engineer', 'Manager']
            },
        ])
        .then(direction => {
            if (direction.jobTitle === 'Manager') {
                jobTitle = 'Manager' 
                return promptManager()
            } else if (direction.jobTitle === 'Intern') {
                jobTitle = 'Intern'
                return promptIntern()
            } else if (direction.jobTitle === 'Engineer') {
                jobTitle = 'Engineer'
                return promptEngineer()
            }
        })

}

function promptAnother() {
    return inquirer.prompt(
        {
            type: 'confirm',
            name: 'another',
            message: 'Would you like to add another employee?'
        },
    )
        .then(direction => {
            if (direction.another === true) {
                // init()
                return promptQuestions()
            }
        })
}

function promptManager() {
    return inquirer.prompt(questionsManager).then(answers => {
        const manager = new Manager(answers.managerName, answers.managerIdNum, answers.managerEmail, answers.office)
        team.push(manager)
    })
        .then(() => {
            return promptAnother()
        })
}
function promptIntern() {
    return inquirer.prompt(questionsIntern).then(answers => {
        const intern = new Intern(answers.internName, answers.internIdNum, answers.internEmail, answers.school)
        team.push(intern)
    })
        .then(() => {
            return promptAnother()
        })
}
function promptEngineer() {
    return inquirer.prompt(engineerQuestions).then(answers => {
        const engineer = new Engineer(answers.engineerName, answers.engineerIdNum, answers.engineerEmail, answers.engineerGithub)
        team.push(engineer)
    })
        .then(() => {
            return promptAnother()
        })
}

function writeToFile(fileName, data) {
    return fs.writeFileSync(path.join(__dirname, fileName), data)
}

function init() {
    promptQuestions()
        // .then(() => 
        // {
        .then(() => {
            // console.log(team)
            writeToFile('index.html', render(team))
        // }
            // )
        })
            .then(() => console.log("You've successfully written an HTML file."))
            .catch((err) => console.log(err))
}

init();
// promptQuestions()

// module.exports = team;