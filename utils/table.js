const Table = require('cli-table');
const orderBy = require('lodash.orderby');
const chalk = require('chalk');
const logSymbols = require('log-symbols');
const infoIcon = logSymbols.info;
const red = chalk.bold.red;
const yellow = chalk.yellow;
const green = chalk.italic.green;
const underline = chalk.underline;
const log = console.log;

module.exports = {

    drawGlobalStats: ({ results }) => {
        const table = new Table({
            head: [' ', 'COVID-19 CORONAVIRUS PANDEMIC NUMBERS'],
            style: {
                head: ['italic'],
            }
        });

        const {
            total_cases,
            total_new_cases_today,
            total_deaths,
            total_new_deaths_today,
            total_recovered,
            total_active_cases,
            total_serious_cases,
            total_affected_countries,
            source,
        } = results[0];

        table.push(
            {'TOTAL CASES': [total_cases]},
            {'NEW CASES TODAY': [yellow(`+${total_new_cases_today}`)]},
            {'TOTAL DEATHS': [total_deaths]},
            {'NEW DEATHS TODAY': [red(`+${total_new_deaths_today}`)]},
            {'TOTAL RECOVERED': [total_recovered]},
            {'ACTIVE CASES': [total_active_cases]},
            {'CRITICAL': [total_serious_cases]},
            {'TOTAL AFFECTED COUNTRIES': [total_affected_countries]},
        );
        log(infoIcon, green(`SOURCE: ${underline(source.url)}`));
        log(table.toString());
    },


    drawCountryStats: ({countrydata}) => {
        const table = new Table({
            head: ["Country", 'Total Cases', 'New Cases Today', 'Total Deaths', 'New Deaths Today', 'Total Recovered', 'Active Cases', 'Critical', 'Most Affected Countries Rank'],
            style: {
                head: ['italic', 'green'],
            }
        });

        for (let country of countrydata) {

            const {
                info: { title },
                total_cases,
                total_new_cases_today,
                total_deaths,
                total_new_deaths_today,
                total_recovered,
                total_active_cases,
                total_serious_cases,
                total_danger_rank,
            } = country;

            table.push(
                [
                    title,
                    total_cases,
                    parseInt(total_new_cases_today) !== 0 ? yellow(`+${total_new_cases_today}`) : total_new_cases_today,
                    total_deaths,
                    parseInt(total_new_deaths_today) !== 0 ? red(`+${total_new_deaths_today}`) : total_new_deaths_today,
                    total_recovered,
                    total_active_cases,
                    total_serious_cases,
                    total_danger_rank,
                ]
            );
        }

        log(infoIcon, green(`SOURCE: ${underline(countrydata[0].info.source)}`));
        log(table.toString());
    },

    drawAllCountriesStats: ({ countryitems, sitedata }) => {
        const table = new Table({
            head: ["Country", 'Total Cases', 'New Cases Today', 'Total Deaths', 'New Deaths Today', 'Total Recovered', 'Active Cases', 'Critical'],
            style: {
                head: ['italic', 'green'],
            }
        });

        const [list] = countryitems;
        const sortedList = orderBy(list, 'total_cases', 'desc');
        const cleanList = sortedList.filter(item => item.total_cases !== 0);

        for (let country of cleanList) {
            if ('ok' === country) {
                continue;
            }

            const {
                title,
                total_cases,
                total_new_cases_today,
                total_deaths,
                total_new_deaths_today,
                total_recovered,
                total_active_cases,
                total_serious_cases,
            } = country;

            table.push(
                [
                    title,
                    total_cases,
                    parseInt(total_new_cases_today) !== 0 ? yellow(`+${total_new_cases_today}`) : total_new_cases_today,
                    total_deaths,
                    parseInt(total_new_deaths_today) !== 0 ? red(`+${total_new_deaths_today}`) : total_new_deaths_today,
                    total_recovered,
                    total_active_cases,
                    total_serious_cases,
                ]
            );
        }

        log(infoIcon, green(`SOURCE: ${underline(sitedata[0].info.source)}`));
        log(table.toString());
    },
};