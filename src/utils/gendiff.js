import _ from 'lodash';
import parseFile from './parsers.js';

const gendiff = (filepath1, filepath2) => {
  const data1 = parseFile(filepath1);
  const data2 = parseFile(filepath2);
  const keys1 = Object.keys(data1);
  const keys2 = Object.keys(data2);
  const keys = _.sortBy(_.union(keys1, keys2));
  const lines = keys.map((key) => {
    if (!Object.hasOwn(data1, key)) {
      return `  + ${key}: ${data2[key]}`;
    } if (!Object.hasOwn(data2, key)) {
      return `  - ${key}: ${data1[key]}`;
    } if (data1[key] !== data2[key]) {
      return `  - ${key}: ${data1[key]}\n  + ${key}: ${data2[key]}`;
    }
    return `    ${key}: ${data1[key]}`;
  });
  return ['{', ...lines, '}'].join('\n');
};

export default gendiff;
