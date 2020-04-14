const prog = require('caporal');
const logSymbols = require('log-symbols');
const logUpdate = require('log-update');
const chalk = require('chalk');
const red = chalk.red;
const spinner = require('./../utils/spinner');
const statsApi = require('./../apis/stats');
const table = require('./../utils/table');
const country = require('./../utils/country');

module.exports = {

    init: (program) => {
        return program
            .command('country:stats', 'Display corona stats for countries')
            .option('--name <country-name>', 'Show corona stats for <country-name>', prog.STRING)
            .action(async (args, options, logger) => {
                if (options.name) {
                    spinner.start();
                    const validated = country.validate(options.name);
                    statsApi.getStatsByCountry(validated.country)
                        .then(response => {
                            spinner.stop();
                            logUpdate(logSymbols.success, 'Fetched data successfully!');
                            table.drawCountryStats(response.data);
                            process.exit(0);
                        })
                        .catch((error) => {
                            spinner.stop();
                            logUpdate(red(logSymbols.error, 'Data fetching failed, please try again later!\n'), logSymbols.info, error);
                            process.exit(1);
                        });
                    return;
                }

                spinner.start();
                statsApi.getAllCountriesStats()
                    .then(response => {
                        spinner.stop();
                        logUpdate(logSymbols.success, 'Fetched data successfully!');
                        table.drawCountryStats(response.data);
                        process.exit(0);
                    })
                    .catch(error => {
                        spinner.stop();
                        logUpdate(red(logSymbols.error, 'Data fetching failed, please try again later!\n'), logSymbols.info, error);
                        process.exit(1)
                    });
            });
    }
};