const prog = require('caporal');
const logSymbols = require('log-symbols');
const logUpdate = require('log-update');
const chalk = require('chalk');
const red = chalk.red;
const spinner = require('./../utils/spinner');
const timelineApi = require('./../apis/timeline');
const country = require('./../utils/country');
const chart = require('./../utils/chart');

module.exports = {

    init: (program) => {
        return program
            .command('country:timeline', 'Display corona timeline chart for countries')
            .option('--name <country-name>', 'Show corona timeline chart for <country-name>', prog.STRING, null, true)
            .action(async (args, options, logger) => {
                spinner.start();
                const validate = country.validate(options.name);
                timelineApi.getTimelineByCountry(validate.ISO)
                    .then(response => {
                        spinner.stop();
                        logUpdate(logSymbols.success, 'Fetched data successfully!');
                        chart.drawChart(response.data);
                    })
                    .catch(error => {
                        spinner.stop();
                        logUpdate(red(logSymbols.error, 'Data fetching failed, please try again later!\n'), logSymbols.info, error);
                        process.exit(1);
                    });
            });
    }
};