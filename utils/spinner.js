const logUpdate = require('log-update');
const chalk = require('chalk');
const green = chalk.green.bold;
let intervalId;

module.exports = {

    start: () => {
        let i = 0;
        const spinner = {
            "interval": 125,
            "frames": [
                "∙∙∙",
                "●∙∙",
                "∙●∙",
                "∙∙●",
                "∙∙∙"
            ]
        };

        intervalId = setInterval(() => {
           const { frames } = spinner;
           logUpdate(`${green(frames[i = ++i % frames.length])} Fetching data`);
        }, spinner.interval);
    },

    stop: () => {
        clearInterval(intervalId);
    }
};