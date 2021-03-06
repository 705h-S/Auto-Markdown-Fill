// TODO: Include packages needed for this application
const inquirer = require("inquirer");
const fs = require ("fs")
const path = require("path");
const generateMarkdown = require("./generateMarkdown");
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

    {
        type:"input",
        name: "email",
        message: "what is your email address"
    },
];

// TODO: Create a function to write README file
    function writeToFile(fileName, data) {
        return fs.writeFileSync(path.join(process.cwd(), fileName), data);
    }
    
    // function to initialize program
    function init() {
        inquirer.prompt(questions)
            .then((inquirerAnswers) => {
                console.log("l0ading.... Please look at your editor for README.md");
                writeToFile("README.md", generateMarkdown({ ...inquirerAnswers }));
            })
    }
// Function call to initialize app
init();