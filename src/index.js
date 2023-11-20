import * as fs from 'node:fs';
import path from 'node:path';
import parse from './utils/parsers.js';
import normalizePath from './utils/normalizePath.js';
import diffTree from './utils/diffTree.js';
import formatter from './formatters/index.js';

const gendiff = (filepath1, filepath2, format = 'stylish') => {
  const content1 = fs.readFileSync(normalizePath(filepath1), 'utf-8');
  const extension1 = path.extname(filepath1).toLowerCase().slice(1);

  const content2 = fs.readFileSync(normalizePath(filepath2), 'utf-8');
  const extension2 = path.extname(filepath2).toLowerCase().slice(1);

  const data1 = parse(content1, extension1);
  const data2 = parse(content2, extension2);

  const diff = diffTree(data1, data2);
  return formatter(diff, format);
};

export default gendiff;
