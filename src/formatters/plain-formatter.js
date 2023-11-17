import _ from 'lodash';

const givePath = (path, newPath) => { // надо доработать
  if (path === '') {
    return newPath;
  }
  return [path, newPath].join('.');
};

const giveValue = (value) => {
  if (_.isObject(value)) {
    return '[complex value]';
  }
  if (_.isString(value)) {
    return `'${value}'`;
  }
  return value;
};

const formatterPlain = (diffTree) => {
  const iter = (tree, path) => {
    const lines = tree.flatMap((obj) => {
      const newPath = givePath(path, obj.key);
      switch (obj.status) {
        case 'unchange': {
          return [];
        }
        case 'change objs': {
          return iter(obj.value, newPath);
        }
        case 'add': {
          return `Property '${newPath}' was added with value: ${giveValue(obj.value)}`;
        }
        case 'remove': {
          return `Property '${newPath}' was removed`;
        }
        case 'change': {
          return `Property '${newPath}' was updated. From ${giveValue(obj.value.obj1Key)} to ${giveValue(obj.value.obj2Key)}`;
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
