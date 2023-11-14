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
    case '.yaml' || '.yml':
      parseContentFile = yaml.load(contentFile);
      break;
    default:
      return Error('Неизвестный тип файла');
  }

  return parseContentFile;
};

export default parseFile;
