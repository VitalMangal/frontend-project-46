import _ from 'lodash';
import parseFile from './parsers.js';
import formatter from './test-formatter.js';



/* const gendiff = (filepath1, filepath2) => {
  const data1 = parseFile(filepath1);
  const data2 = parseFile(filepath2);
*/
const newTree = (obj1, obj2) => {
    const keys1 = Object.keys(obj1);
    const keys2 = Object.keys(obj2);
    const keys = _.sortBy(_.union(keys1, keys2));
    const childrens = keys.map((key) => {
      if (!Object.hasOwn(obj1, key)) {
        return { [key]: obj2[key], status: 'add'};
      }
      if (!Object.hasOwn(obj2, key)) {
        return { [key]: obj1[key], status: 'remove'};
      }
      if (_.isEqual(obj1[key], obj2[key])) {
        return { [key]: obj1[key], status: 'unchange'};
      }
      if (_.isObject(obj1[key]) && _.isObject(obj2[key])) {
        return { [key]: newTree(obj1[key], obj2[key])}; // рекурсия
      }
      return { key, obj1Key: obj1[key], obj2Key: obj2[key], status: 'change'};
    });
    return childrens.flat(Infinity);
  };

  const data1 = {
    "common": {
      "setting1": "Value 1",
      "setting2": 200,
      "setting3": true,
      "setting6": {
        "key": "value",
        "doge": {
          "wow": ""
        }
      }
    }};

  const data2 = {
    "common": {
      "follow": false,
      "setting1": "Value 1",
      "setting7": null,
      "setting4": "blah blah",
      "setting5": {
        "key5": "value5"
      }
    }};

console.log(JSON.stringify(newTree(data1, data2)));
/* };


/*
console.log(gendiff('__fixtures__/expect_complex_file1.json', '__fixtures__/expect_complex_file2.json'))
/*
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

export default gendiff; */

/*

const makeDisplay = (value, depth) => {
  if (!_.isObject(value)) {
    return `${value}`;
  }
  const currentIndent = '    '.repeat(depth);
  const bracketIndent = '    '.repeat(depth - 1);
  const lines = Object
    .entries(value)
    .map(([key, val]) => `${currentIndent}${key}: ${makeDisplay(val, depth + 1)}`);
  return [
    '{',
    ...lines,
    `${bracketIndent}}`,
  ].join('\n');
};
const data = {
  "setting1": "Value 1",
  "setting2": 200,
  "setting3": true,
  "setting6": {
    "key": "value",
    "doge": {
      "wow": ""
    }
  }
};

console.log(makeDisplay(data, 2)); */
