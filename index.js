// const employee = require('./employee.js')

function generateHTML(data) {
    // console.log(data)
    // console.log(team)
    return `
    <!DOCTYPE html>
    <html lang="en">
    
    <head>
        <meta charset="UTF-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css" />
        <title>Team Profile Generator</title>
    </head>
    
    <body>
        <header id="profiles" class="profiles">
            <h1 id="title" class="title text-center bg-success m-2 p-2 mb-3">Team Profiles</h1>
        </header>
        <main class='flex-wrap d-flex m-auto justify-content-center'>
            ${choice(data)}
            </main>
    </body>
    
    </html>
    `
}

function choice(data) {
    // console.log(data)
    // return
    let html = ''
    for (let i = 0; i < data.length; i++) {
        // let data = team[i]
   
        
        if (data[i].getRole() == 'Manager') {
            html += generateManager(data[i])
        } else if (data[i].getRole() == 'Intern') {
            html += generateIntern(data[i])
        } else if (data[i].getRole() == 'Engineer') {
            html += generateEngineer(data[i])
        // } else {
            // return ''
        }
        
    }
    return html
}

function generateManager(data) {
    return `
    <div class="card m-1" style="width: 18rem;">
        <section id="colored" class="card-body">
            <h3 id='name' class="card-title">${data.name}</h3>
            <h5 id="jobTitle" class="card-text">${data.getRole()}</h5>
        </section>
        <ul id="info" class="list-group list-group-flush">
            <li id="idNumber" class="list-group-item">Id: ${data.id}</li>
            <li id="office" class="list-group-item">Office number: ${data.office}</li>
            <li class="list-group-item">
                <a href="mailto: ${data.email}" target="_blank">Email: ${data.email}</a>
            </li>
        </ul>
        </div>
`
}

function generateIntern(data) {
    // console.log(getRole, data, data.name)
    return `
    <div class="card m-1" style="width: 18rem;">
        <section id="colored" class="card-body">
            <h3 id='name' class="card-title">${data.name}</h3>
            <h5 id="jobTitle" class="card-text">${data.getRole()}</h5>
        </section>
        <ul id="info" class="list-group list-group-flush">
            <li id="idNumber" class="list-group-item">Id: ${data.id}</li>
            <li id="school" class="list-group-item">School: ${data.school}</li>
            <li class="list-group-item">
                <a href="mailto: ${data.email}" target="_blank">Email: ${data.email}</a>
            </li>
        </ul>
        </div>
`
}

function generateEngineer(data) {
    return `
    <div class="card m-1" style="width: 18rem;">
        <section id="colored" class="card-body">
            <h3 id='name' class="card-title">${data.name}</h3>
            <h5 id="jobTitle" class="card-text">${data.getRole()}</h5>
        </section>
        <ul id="info" class="list-group list-group-flush">
            <li id="idNumber" class="list-group-item">Id: ${data.id}</li>
            <li class="list-group-item">
                <a href="mailto: ${data.email}" target="_blank">Email: ${data.email}</a>
            </li>
            <li class="list-group-item">
                <a href="https://github.com/${data.gitHub}" target="_blank">GitHub ${data.gitHub}</a>
            </li>
        </ul>
        </div>
`
}

module.exports = generateHTML;