const countryCodeLookup = require('iso-countries-lookup');
const chalk = require('chalk');
const red = chalk.red;
const logSymbols = require('log-symbols');
const error = logSymbols.error;

module.exports = {

    validate: (name) => {
        const result = countryCodeLookup(name);
        if (!result) {
            console.log(red(`${error} ${name} is not a valid country`));
            process.exit(0);
        }

        return result;
    }
};