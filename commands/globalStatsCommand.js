const logSymbols = require('log-symbols');
const logUpdate = require('log-update');
const chalk = require('chalk');
const red = chalk.red;
const spinner = require('./../utils/spinner');
const statsApi = require('./../apis/stats');
const table = require('./../utils/table');

module.exports = {

    init: (program) => {
        return program
            .command('global:stats', 'Display global corona stats')
            .action(async (args, options, logger) => {
                spinner.start();
                statsApi.getGlobalStats()
                    .then(response => {
                        spinner.stop();
                        logUpdate(logSymbols.success, 'Fetched data successfully!');
                        table.drawGlobalStats(response.data);
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