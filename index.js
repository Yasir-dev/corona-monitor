#!/usr/bin/env node

const prog = require('caporal');
const packageJson = require('./package.json');
const globalStatsCommand = require('./commands/globalStatsCommand');
const countryStatsCommand = require('./commands/countryStatsCommand');

let program = prog.version(`${packageJson.version} by ${packageJson.author}`);
program = globalStatsCommand.init(program);
program = countryStatsCommand.init(program);

prog.parse(process.argv);
