// TODO: Include packages needed for this application
const fs = require("fs");
const inquirer = require('inquirer')
const generateMarkdown = require("./utils/generateMarkdown.js");
// TODO: Create an array of questions for user input
//const questions = [];
function askQs(){
    inquirer.prompt([
        {
            type: "input",
            message: "Welcome!  What is your name?",
            name: "promptUserName"
        },
        {
            type: "input",
            message: "What is your e-mail address?",
            name: "promptUserEmail"
        },
        {
            type: "input",
            message: "What's your GitHub username?",
            name: "promptUserGithub"
        },
        {
            type: "input",
            message: "What command should be run to do tests",
            name: "promptUserRepo"
        },
        {
            type: "input",
            message: "What would you like to name your file?",
            name: "promptFileName"
        },
        {
            type: "input",
            message: "Give me a description about your project",
            name: "promptFileDescription"
        },
        {
            type: "input",
            message: "What command should be run to install dependencies?",
            name: "promptFileInstallation"
        },
        {
            type: "input",
            message: "What does the user need to know about using the repo?",
            name: "promptFileUsage"
        },
        {
            type: "list",
            message: "What licensing for this project?",
            name: "promptFileUserLicense",
            choices: ["Apache 2.0", "GPL", "MIT", "BSD"]
        },
    ]).then(function(answers){
        var strReadme = generateMarkdown(answers);
        writeToFile(answers, strReadme)
    })
}

// TODO: Create a function to write README file
function writeToFile(answers, myReadMe) {
    fs.writeFile(`${answers.promptFileName}-readMe.md`, myReadMe, () => {
        console.log("done!");
    })
}

// TODO: Create a function to initialize app
function init() {
    askQs()
}

// Function call to initialize app
init();
//////////////////////////////////////////////////
