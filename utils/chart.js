const blessed = require('blessed');
const contrib = require('blessed-contrib');
const moment = require('moment');

module.exports = {

    drawChart: (data) => {

        const { location: {countryOrRegion}, stats, stats: { history } } = data;
        const dates = history.map(item => moment(item.date).format('DD.MM'));
        const cases = history.map(item => item.confirmed);
        const deaths = history.map(item => item.deaths);

        const screen = blessed.screen();
        const line = contrib.line(
            { style:
                    {
                        text: "green",
                        baseline: "green"
                    },
                abbreviate: true,
                showLegend: true,
                legend: { width: 30 },
                wholeNumbersOnly: false,
                label: `CORONA TIMELINE CHART FOR ${countryOrRegion.toUpperCase()}`
            });

        const casesLine = {
            title: `TOTAL CASES: ${stats.totalConfirmedCases}`,
            x: dates,
            y: cases,
            style: {
                line: 'yellow',
                bold: true,
            }
        };

        const deathsLine = {
            title: `TOTAL DEATHS: ${stats.totalDeaths}`,
            x: dates,
            y: deaths,
            style: {
                line: 'red',
                bold: true,
            }
        };

        screen.append(line); //must append before setting data
        line.setData([casesLine, deathsLine]);

        screen.key(['escape', 'q', 'C-c'], function(ch, key) {
            return process.exit(0);
        });

        screen.render();
    }
};