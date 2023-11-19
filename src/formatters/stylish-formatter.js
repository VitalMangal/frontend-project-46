import _ from 'lodash';

const specСhars = {
  unchange: '  ',
  add: '+ ',
  remove: '- ',
  changeObj: '  ',
};

const displayValue = (value, depth) => {
  const currentIndent = '  '.repeat(depth * 2);
  const bracketIndent = '  '.repeat(depth * 2 - 2);
  if (_.isObject(value)) {
    const keys = Object.keys(value);
    const lines = keys.map((key) => `${currentIndent}${key}: ${displayValue(value[key], depth + 1)}`);
    return [
      '{',
      ...lines,
      `${bracketIndent}}`,
    ].join('\n');
  }
  return value;
};

const formatterStylish = (diffTree) => {
  const iter = (tree, depth) => {
    const currentIndent = '  '.repeat(depth * 2 - 1);
    const bracketIndent = '  '.repeat(depth * 2 - 2);
    const lines = tree.map((obj) => {
      if (obj.status === 'changeObj') {
        return `${currentIndent}${specСhars[obj.status]}${obj.key}: ${iter(obj.value, depth + 1)}`;
      }
      if (obj.status === 'change') {
        return `${currentIndent}${specСhars.remove}${obj.key}: ${displayValue(obj.value.obj1Key, depth + 1)}\n${currentIndent}${specСhars.add}${obj.key}: ${displayValue(obj.value.obj2Key, depth)}`;
      }
      return `${currentIndent}${specСhars[obj.status]}${obj.key}: ${displayValue(obj.value, depth + 1)}`;
    });
    return [
      '{',
      ...lines,
      `${bracketIndent}}`,
    ].join('\n');
  };

  return iter(diffTree, 1);
};

export default formatterStylish;
