import _ from 'lodash';

const specСhars = {
  unchange: '    ',
  add: '  + ',
  remove: '  - ',
  changeObj: '    ',
  indent: '    ',
};

const displayValue = (value, depth) => {
  const indent = specСhars.indent.repeat(depth);
  if (_.isObject(value)) {
    const keys = Object.keys(value);
    const lines = keys.map((key) => `${indent}${specСhars.unchange}${key}: ${displayValue(value[key], depth + 1)}`);
    return [
      '{',
      ...lines,
      `${indent}}`,
    ].join('\n');
  }
  return value;
};

const formatterStylish = (diffTree) => {
  const iter = (tree, depth) => {
    const indent = specСhars.indent.repeat(depth);
    const lines = tree.map((obj) => {
      if (obj.status === 'changeObj') {
        return `${indent}${specСhars[obj.status]}${obj.key}: ${iter(obj.value, depth + 1)}`;
      }
      if (obj.status === 'change') {
        const before = `${indent}${specСhars.remove}${obj.key}: ${displayValue(obj.value.obj1Value, depth + 1)}`;
        const after = `${indent}${specСhars.add}${obj.key}: ${displayValue(obj.value.obj2Value, depth + 1)}`;
        return `${before}\n${after}`;
      }
      return `${indent}${specСhars[obj.status]}${obj.key}: ${displayValue(obj.value, depth + 1)}`;
    });
    return [
      '{',
      ...lines,
      `${indent}}`,
    ].join('\n');
  };

  return iter(diffTree, 0);
};

export default formatterStylish;
