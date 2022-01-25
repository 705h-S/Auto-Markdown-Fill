// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
    if (license !== "NONE"){
    return `![License](https://img.shields.io/badge/license-${license}-orange)`;
}
return ""
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
    if (license !== "NONE"){
        return `* [License](#License)`;
    }
    return ""
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
    if (license !== "NONE"){
        return `## License
        
        Copyright © ${license}. All rights reserved. 
    ---
        `;
    }
    return ""
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}

  ${renderLicenseBadge(data.license)}

  ${data.description}

  ---

  ## TABLE OF CONTENTS

  *[Installation](#Installation)

  *[Usage](#usage)

  *[Contributors](#Contributors)

  ${renderLicenseLink(data.license)}

  --- 

  ## Installation

  ${data.install}

  --- 

  ## usage 

  ${data.usage}

  ---

  ## Contributors

  ${data.colab}

  ---

  ${renderLicenseSection(data.license)}

  ### Author

  created and built by <br>
  [${data.GitHub}](https://github.com/${data.GitHub}) <br>
 ${data.email}

`;
}

module.exports = generateMarkdown;