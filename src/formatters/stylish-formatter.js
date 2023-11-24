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
    const lines = tree.map(({ key, value, status }) => {
      if (status === 'changeObj') {
        return `${indent}${specСhars[status]}${key}: ${iter(value, depth + 1)}`;
      }
      if (status === 'change') {
        const before = `${indent}${specСhars.remove}${key}: ${displayValue(value.before, depth + 1)}`;
        const after = `${indent}${specСhars.add}${key}: ${displayValue(value.after, depth + 1)}`;
        return `${before}\n${after}`;
      }
      return `${indent}${specСhars[status]}${key}: ${displayValue(value, depth + 1)}`;
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
