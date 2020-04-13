#!/usr/bin/env node

const prog = require('caporal');
const packageJson = require('./package.json');
const globalStatsCommand = require('./commands/globalStatsCommand');

let program = prog.version(`${packageJson.version} by ${packageJson.author}`);
program = globalStatsCommand.init(program);

prog.parse(process.argv);
