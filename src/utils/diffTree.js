import _ from 'lodash';
import parseFile from './parsers.js';

const diffTree = (filepath1, filepath2) => {
  const data1 = parseFile(filepath1);
  const data2 = parseFile(filepath2);

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
      return { key, value: { obj1Key: obj1[key], obj2Key: obj2[key] }, status: 'change' };
    });
    return childrens;
  };

  return newTree(data1, data2);
};

export default diffTree;
