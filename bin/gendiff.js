#!/usr/bin/env node

import { program } from 'commander';
import gendiff from '../src/utils/gendiff.js';

program
  .name('gendiff')
  .description('Compares two configuration files and shows a difference')
  .version('1.0.0')
  .option('-f, --format <type>', 'output format', 'stylish')
  .arguments('<filepath1> <filepath2>')
  .action((filepath1, filepath2, options) => console.log(
    gendiff(filepath1, filepath2, options.format),
  ));

program.parse(process.argv);
