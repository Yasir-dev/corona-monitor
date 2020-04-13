const chalk = require('chalk');
const moment  = require('moment');
const logSymbols = require('log-symbols');
const warning = logSymbols.warning;
const info = logSymbols.info;
const red = chalk.red;
const blueBold = chalk.blue.bold;
const greenItalic = chalk.green.italic;
const underline = chalk.underline;
const bold = chalk.bold;
const log = console.log;


module.exports = {

    print: (data, country) => {
        if (!data.news || !data.news.length) {
            log(red(`${warning} No news available for ${country}`));
            return;
        }

        const items = data.news.slice(0,5);
        log(`${info} Source: Smartable AI - ${underline('https://smartable.ai')}`);
        for (let item of items) {
            log(blueBold('---------------------------------------------------------------------------------------------------------'));
            log(bold('Headline:'), greenItalic(item.title));
            log(bold('Source:'), greenItalic(item.provider.name));
            log(bold('Link:'), greenItalic(underline(item.webUrl)));
            log(bold('published:'), greenItalic(moment(item.publishedDateTime).format( "DD MMM YYYY")));
        }
        log(blueBold('---------------------------------------------------------------------------------------------------------'));
    }
};

