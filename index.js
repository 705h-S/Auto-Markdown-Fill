// TODO: Include packages needed for this application
const inquirer = require("inquirer");
const generateMarkdown = require("generateMarkdown.js");
// TODO: Create an array of questions for user input
const questions = [

    {
        type: "input",
        name: "title",
        message: "What is the title of your project?"
    },

    {
        type: "input",
        name: "description",
        message: "Whats your project? What does it do?"
    },

    {
        type: "input",
        name: "install",
        message: "What are the steps required to install your project?"
    },

    {

        type: "list",
        name: "license",
        message: "What license does your project have?",
        choices: ["Apache 2.0", "Boost 1.0", "BSD 2", "BSD 3", "GNPLv3", "IBM", "ISC", "MIT", "NONE"]
    },

    {
        type: "input",
        name: "usage",
        message: "How do you use your project?"
    },

    {
        type: "input",
        name: "colab",
        message: "What are the names of the Contributors?"
    },

    {
        type: "input",
        name: "GitHub",
        message: "Enter your GitHub user name"
    },
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
function init() {}

// Function call to initialize app
init();