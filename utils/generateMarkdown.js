function renderLicenseBadge(license) {
  switch (license) {
    case "Apache License 2.0":
      return `[![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)`

    case "GNU General Public License v3.0":
      return `[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)`

    case "MIT License":
      return `[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)`

    case "Boost Software License 1.0":
      return `[![License](https://img.shields.io/badge/License-Boost_1.0-lightblue.svg)](https://www.boost.org/LICENSE_1_0.txt)`

    case "Creative Commons Zero v1.0 Universal":
      return `[![License: CC0-1.0](https://img.shields.io/badge/License-CC0_1.0-lightgrey.svg)](http://creativecommons.org/publicdomain/zero/1.0/)`

    case "Eclipse Public License 2.0":
      return `[![License](https://img.shields.io/badge/License-EPL_1.0-red.svg)](https://opensource.org/licenses/EPL-1.0)`

    case "Mozilla Public License 2.0":
      return `[![License: MPL 2.0](https://img.shields.io/badge/License-MPL_2.0-brightgreen.svg)](https://opensource.org/licenses/MPL-2.0)`

    case "The Unlicense":
      return `[![License: Unlicense](https://img.shields.io/badge/license-Unlicense-blue.svg)](http://unlicense.org/)`
    
    default:
      return ""
  }
}

function renderLicenseLink(license) {
  switch (license) {
    case "Apache License 2.0":
      return `https://opensource.org/licenses/Apache-2.0`

    case "GNU General Public License v3.0":
      return `https://www.gnu.org/licenses/gpl-3.0`

    case "MIT License":
      return `https://opensource.org/licenses/MIT`

    case "Boost Software License 1.0":
      return `https://www.boost.org/LICENSE_1_0.txt`

    case "Creative Commons Zero v1.0 Universal":
      return `http://creativecommons.org/publicdomain/zero/1.0/`

    case "Eclipse Public License 2.0":
      return `https://opensource.org/licenses/EPL-1.0`

    case "Mozilla Public License 2.0":
      return `https://opensource.org/licenses/MPL-2.0`

    case "The Unlicense":
      return `http://unlicense.org/`
    
    default:
      return ""
  }
}

function renderLicenseSection(license) {
  if (license === 'None') {
    return 
  } else {
    return `## License\nThis application is covered under the [${license}]`
  }
}

function generateMarkdown(data) {
  return `# ${data.title}

${renderLicenseBadge(data.license)}
  
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

${renderLicenseSection(data.license)}(${renderLicenseLink(data.license)})

## Questions
Click on my GitHub username to be taken to my GitHub profile!\n
GitHub: [${data.github}](https://github.com/${data.github})\n
Below is my email, contact me via email if you have any questions about this project.\n
Email: ${data.email}
`;
}

module.exports = generateMarkdown;
