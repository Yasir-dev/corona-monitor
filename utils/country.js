const countryCodeLookup = require('iso-countries-lookup');
const chalk = require('chalk');
const red = chalk.red;
const logSymbols = require('log-symbols');
const error = logSymbols.error;

module.exports = {

    validate: (name) => {
        let countryISO = countryCodeLookup(name);
        if (!countryISO) {
            console.log(red(`${error} ${name} is not a valid country`));
            process.exit(0);
        }

        /**
         * FIX: correct iso code for uk, as correct ISO 3166-1 alpha-2 for United Kingdom is GB and not UK
         * (wrong code in npm package: iso-countries-lookup)
         */
        if ('UK' === countryISO) {
            countryISO = 'GB';
        }

        return { country: name, ISO: countryISO };
    },
};