import _ from 'lodash';
import * as fs from 'node:fs';
import path from 'node:path';
import parse from './parsers.js';
import normalizePath from './normalizePath.js';

const diffTree = (filepath1, filepath2) => {
  const content1 = fs.readFileSync(normalizePath(filepath1), 'utf-8');
  const extension1 = path.extname(filepath1).toLowerCase();

  const content2 = fs.readFileSync(normalizePath(filepath2), 'utf-8');
  const extension2 = path.extname(filepath2).toLowerCase();

  const data1 = parse(content1, extension1);
  const data2 = parse(content2, extension2);

  const newTree = (obj1, obj2) => {
    const keys1 = Object.keys(obj1);
    const keys2 = Object.keys(obj2);
    const keys = _.sortBy(_.union(keys1, keys2));
    const childrens = keys.map((key) => {
      if (!Object.hasOwn(obj1, key)) {
        return { key, value: obj2[key], status: 'add' };
      }
      if (!Object.hasOwn(obj2, key)) {
        return { key, value: obj1[key], status: 'remove' };
      }
      if (_.isObject(obj1[key]) && _.isObject(obj2[key])) {
        return { key, value: newTree(obj1[key], obj2[key]), status: 'changeObj' };
      }
      if (obj1[key] === obj2[key]) {
        return { key, value: obj1[key], status: 'unchange' };
      }
      return { key, value: { obj1Value: obj1[key], obj2Value: obj2[key] }, status: 'change' };
    });
    return childrens;
  };

  return newTree(data1, data2);
};

export default diffTree;
