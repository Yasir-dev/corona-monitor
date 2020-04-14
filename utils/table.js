const Table = require('cli-table');
const chalk = require('chalk');
const logSymbols = require('log-symbols');
const info = logSymbols.info;
const red = chalk.bold.red;
const yellow = chalk.yellow;
const green = chalk.italic.green;
const log = console.log;

module.exports = {

    drawGlobalStats: ({ data }) => {
        const table = new Table({
            head: [' ', 'COVID-19 CORONAVIRUS PANDEMIC NUMBERS'],
            style: {
                head: ['italic'],
            }
        });

        const {
            total_cases,
            new_cases,
            total_deaths,
            new_deaths,
            total_recovered,
            active_cases,
            serious_critical,
            cases_per_mill_pop,
        } = data.rows[0];

        table.push(
            {'TOTAL CASES': [total_cases]},
            {'NEW CASES': [yellow(`+${new_cases}`)]},
            {'TOTAL DEATHS': [total_deaths]},
            {'NEW DEATHS': [red(`+${new_deaths}`)]},
            {'TOTAL RECOVERED': [total_recovered]},
            {'ACTIVE CASES': [active_cases]},
            {'CRITICAL': [serious_critical]},
            {'CASES PER 1M POPULATION': [cases_per_mill_pop]},
        );
        log(info, green(`Statistics last updated at ${data.last_update}`));
        log(table.toString());
    },


    drawCountryStats: ({data}) => {
        const table = new Table({
            head: ["Country", 'Total Cases', 'New Cases', 'Total Deaths', 'New Deaths', 'Total Recovered', 'Active Cases', 'Critical', 'Cases per 1M Population'],
            style: {
                head: ['italic', 'green'],
            }
        });

        for (let row of data.rows) {
            if (row.country === 'World') {
                continue;
            }

            const {
                country,
                total_cases,
                new_cases,
                total_deaths,
                new_deaths,
                total_recovered,
                active_cases,
                serious_critical,
                cases_per_mill_pop,
            } = row;

            table.push(
                [
                    country,
                    total_cases,
                    parseInt(new_cases) !== 0 ? yellow(`+${new_cases}`) : new_cases,
                    total_deaths,
                    parseInt(new_deaths) !== 0 ? red(`+${new_deaths}`) : new_deaths,
                    total_recovered,
                    active_cases,
                    serious_critical,
                    cases_per_mill_pop,
                ]
            );
        }

        log(info, green(`Statistics last updated at ${data.last_update}`));
        log(table.toString());
    },
};