const fs = require('fs');
const inquirer = require('inquirer');
const generateMarkdown = require('./utils/generateMarkdown');

// Array of questions for user input
const questions = [
  {
    type: 'input',
    name: 'title',
    message: 'Enter the title of your project:'
  },
  {
    type: 'input',
    name: 'description',
    message: 'Enter a description of your project:'
  },
  {
    type: 'list',
    name: 'license',
    message: 'Choose a license for your project:',
    choices: ['MIT', 'Apache-2.0', 'GPL-3.0', 'BSD-3-Clause', 'None'],
    default: 'None'
  },
  // Add more questions for other sections of README
];

// Function to write README file
function writeToFile(fileName, data) {
  fs.writeFile(fileName, data, err => {
    if (err) {
      console.error(err);
      return;
    }
    console.log('README.md file has been generated successfully!');
  });
}

// Function to initialize app
function init() {
  console.log('Welcome to the README generator!');
  inquirer.prompt(questions).then((answers) => {
    // Generate markdown content
    const markdown = generateMarkdown(answers);

    // Write content to README file
    writeToFile('README.md', markdown);
  });
}

// Call the init function to start the application
init();
