const prog = require('caporal');
const logSymbols = require('log-symbols');
const logUpdate = require('log-update');
const chalk = require('chalk');
const red = chalk.red;
const spinner = require('./../utils/spinner');
const newsBoard = require('./../utils/newsBoard');
const newsApi = require('./../apis/news');
const country = require('./../utils/country');


module.exports = {

    init: (program) => {
        return program
            .command('country:news', 'Display latest corona news for countries')
            .option('--name <country-name>', 'Show corona news for <country-name>', prog.STRING, null, true)
            .action(async (args, options, logger) => {
                spinner.start();
                const validated = country.validate(options.name);
                newsApi.getNewsByCountry(validated.ISO)
                    .then(response => {
                        spinner.stop();
                        logUpdate(logSymbols.success, 'Fetched data successfully!');
                        newsBoard.print(response.data, options.name);
                        process.exit(0);

                    })
                    .catch(error => {
                        spinner.stop();
                        logUpdate(red(logSymbols.error, 'Data fetching failed, please try again later!\n'), logSymbols.info, error);
                        process.exit(1);
                    });
            });
    }
};