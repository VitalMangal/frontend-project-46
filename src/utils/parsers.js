import * as fs from 'node:fs';
import path from 'node:path';
import yaml from 'js-yaml';
import normalizePath from './normalazePath.js';

const parseFile = (filePath) => {
  const normalizedPath = normalizePath(filePath);
  const contentFile = fs.readFileSync(normalizedPath, 'utf-8');

  let parseContentFile;
  const extension = path.extname(normalizedPath).toLowerCase();

  switch (extension) {
    case '.json':
      parseContentFile = JSON.parse(contentFile);
      break;
    case '.yaml':
      parseContentFile = yaml.load(contentFile);
      break;
    case '.yml':
      parseContentFile = yaml.load(contentFile);
      break;
    default:
      throw new Error(`Unknown file extension: ${extension}`);
  }

  return parseContentFile;
};

export default parseFile;
