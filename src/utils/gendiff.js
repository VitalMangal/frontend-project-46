import _ from 'lodash';
import parseFile from './parsers.js';
import formatter from '../formatters/index.js';

const gendiff = (filepath1, filepath2, format = 'stylish') => {
  const data1 = parseFile(filepath1);
  const data2 = parseFile(filepath2);

  const getValue = (value) => {
    if (_.isObject(value)) {
      return newTree(value, value);
    }
    return value;
  };

  const newTree = (obj1, obj2) => {
    const keys1 = Object.keys(obj1);
    const keys2 = Object.keys(obj2);
    const keys = _.sortBy(_.union(keys1, keys2));
    const childrens = keys.map((key) => {
      if (!Object.hasOwn(obj1, key)) {
        return { key, value: getValue(obj2[key]), status: 'add' };
      }
      if (!Object.hasOwn(obj2, key)) {
        return { key, value: getValue(obj1[key]), status: 'remove' };
      }
      if (_.isEqual(obj1[key], obj2[key])) {
        return { key, value: getValue(obj1[key]), status: 'unchange' };
      }
      if (_.isObject(obj1[key]) && _.isObject(obj2[key])) {
        return { key, value: newTree(obj1[key], obj2[key]), status: 'changeObjs' };
      }
      return { key, value: { obj1Key: getValue(obj1[key]), obj2Key: getValue(obj2[key]) }, status: 'change' };
    });
    return childrens;
  };
  const diffTree = newTree(data1, data2);
  return formatter(diffTree, format);
};

export default gendiff;
