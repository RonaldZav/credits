const fs = require('fs');
const path = require('path');
const chalk = require('chalk');

function showCredits(status) {
    if (status !== false) {
        const packageJsonPath = path.resolve(process.cwd(), 'package.json');
        let packageJson = require(packageJsonPath);

        const type = "credits";
        if(packageJson.arc !== false) console.log(`[${chalk.black.bgGreen(type.toUpperCase())}] ${atob(packageJson.cc || "Developed by RonaldZav")}`);
    };
};

function saveCredits(text) {
    const packageJsonPath = path.resolve(process.cwd(), 'package.json');

    let packageJson = require(packageJsonPath);

    packageJson.cc = btoa(text);
    packageJson.arc = btoa(true);
    fs.writeFileSync(packageJsonPath, JSON.stringify(packageJson, null, 2));

    const type = "log";
    console.log(`[${chalk.black.bgBlue(type.toUpperCase())}] Credits saved correctly.`);
}

showCredits(true);

module.exports = {
    saveCredits,
    showCredits
};
