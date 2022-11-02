 // TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(questions) {

}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {

}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  if (license === 'None') {
    return 
  } else {
    return `## License\n${license}`
  }
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}

## Description
${data.description}

## Table of Contents

* [Installation](#installation)
* [Usage](#usage)
* [Contributing](#contributing)
* [Test](#test)
* [License](#license)
* [Questions](#questions)

## Installation
${data.installation}

## Usage
${data.usage}

## Contributing
${data.contribute}

## Test
${data.test}

${renderLicenseSection(data.license)}

## Questions
Click on my GitHub username to be taken to my GitHub profile!\n
GitHub: [${data.github}](https://github.com/${data.github})\n
Below is my email, contact me via email if you have any questions about this project.\n
Email: ${data.email}
`;
}

module.exports = generateMarkdown;
