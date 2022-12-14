const inquirer = require('inquirer')
const fs = require('fs');
const generateMarkdown = require('./utils/generateMarkdown');

const questions = [
    {
        type: 'input',
        message: 'What is the title of your project?',
        name: 'title',
    },
    {
        type: 'input',
        message: 'Provide a short description about your project.',
        name: 'description',
    },
    {
        type: 'input',
        message: 'What are the steps required to install your project?',
        name: 'installation',
    },
    {
        type: 'input',
        message: 'Please provide instructions on how to use your project.',
        name: 'usage',
    },
    {
        type: 'input',
        message: 'How can other people contribute to this project?',
        name: 'contribute',
    },
    { 
        type: 'input',
        message: 'Please input any test instructions for your project',
        name: 'test',
    },
    {
        type: 'list',
        message: 'Which license does your project use?',
        name: 'license',
        choices: ['None', 'Apache License 2.0', 'GNU General Public License v3.0', 'MIT License', 'Boost Software License 1.0', 'Creative Commons Zero v1.0 Universal', 'Eclipse Public License 2.0', 'Mozilla Public License 2.0', 'The Unlicense']
    },
    {
        type: 'input',
        message: 'What is your GitHub username?',
        name: 'github',
    },
    {
        type: 'input',
        message: 'What is your email address?',
        name: 'email',
    },
];

function writeToFile(fileName) {
    inquirer
        .prompt(questions)
        .then((data) => {
            fs.writeFile(fileName, generateMarkdown(data), (err) =>
            err ? console.log(err) : console.log("README file successfully generated!") 
            );
        });
}

function init(data) {
    const fileName = `./Generated-README/README.md`

    writeToFile(fileName, data)
}

init(questions);

