import _ from 'lodash';

const givePath = (path, newPath) => (path === '' ? newPath : [path, newPath].join('.'));

const giveValue = (value) => {
  if (_.isObject(value)) {
    return '[complex value]';
  }
  if (_.isString(value)) {
    return `'${value}'`;
  }
  return `${value}`;
};

const formatterPlain = (diffTree) => {
  const iter = (tree, path) => {
    const lines = tree.flatMap(({ key, value, status }) => {
      const newPath = givePath(path, key);
      switch (status) {
        case 'changeObj': {
          return iter(value, newPath);
        }
        case 'add': {
          return `Property '${newPath}' was added with value: ${giveValue(value)}`;
        }
        case 'remove': {
          return `Property '${newPath}' was removed`;
        }
        case 'change': {
          return `Property '${newPath}' was updated. From ${giveValue(value.before)} to ${giveValue(value.after)}`;
        }
        default:
          return [];
      }
    });
    return lines.join('\n');
  };
  return iter(diffTree, '');
};

export default formatterPlain;
