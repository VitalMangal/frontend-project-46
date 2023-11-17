import * as fs from 'node:fs';
import path from 'node:path';
import yaml from 'js-yaml';
import normalizePath from './normalazePath.js';

const parseFile = (filePath) => {
  const normalizedPath = normalizePath(filePath);
  const contentFile = fs.readFileSync(normalizedPath, 'utf-8');

  const extension = path.extname(normalizedPath).toLowerCase();

  switch (extension) {
    case '.json':
      return JSON.parse(contentFile);
    case '.yaml':
      return yaml.load(contentFile);
    case '.yml':
      return yaml.load(contentFile);
    default:
      throw new Error(`Unknown file extension: ${extension}`);
  }
};

export default parseFile;
