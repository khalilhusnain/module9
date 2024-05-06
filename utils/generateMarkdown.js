
function renderLicenseBadge(license) {
  if (!license) {
    return '';
  }

  // Map license names to their respective badge URLs
  const licenseBadges = {
    'MIT': '[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)',
    // Add more licenses and badge URLs as needed
  };

  // Return the badge URL for the provided license, or an empty string if the license is not found
  return licenseBadges[license] || '';
}

// Function to return the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  if (!license) {
    return '';
  }

  // Map license names to their respective license URLs
  const licenseLinks = {
    'MIT': 'https://opensource.org/licenses/MIT',
    // Add more licenses and URLs as needed
  };

  // Return the license URL for the provided license, or an empty string if the license is not found
  return licenseLinks[license] || '';
}

// Function to return the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  if (!license) {
    return '';
  }

  // Return the license section with a link to the license URL
  return `This project is licensed under the [${license}](${renderLicenseLink(license)}) License.`;
}

// Function to generate markdown for README
function generateMarkdown(data) {
  const { title, description, license } = data;
  return `# ${title}

## Description
${description}

## License
${renderLicenseBadge(license)}
${renderLicenseSection(license)}

<!-- Add other sections here -->

`;
}

module.exports = generateMarkdown;
