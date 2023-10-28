#!/usr/bin/env node

const { Command } = require('commander');
const program = new Command();

program
  .name('gendiff')
  .description('Compares two configuration files and shows a difference')
  .version('1.0.0')
  .option('-f, --format <type>', 'output format')
  .argument('<filepath1>', 'first file path')
  .argument('<filepath2>', 'second file path')
  .action((filepath1, filepath2) => {
    return getFilesDiff(filepath1, filepath2)
  });

program.parse();