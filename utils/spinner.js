const cliSpinners = require('cli-spinners');
const logUpdate = require('log-update');
const spinner = cliSpinners['bouncingBall'];

let intervalId;

module.exports = {

    start: () => {
        let i = 0;
        intervalId = setInterval(() => {
           const { frames } = spinner;
           logUpdate(frames[i = ++i % frames.length] + ' Fetching data');
        }, spinner.interval);
    },

    stop: () => {
        clearInterval(intervalId);
    }
};