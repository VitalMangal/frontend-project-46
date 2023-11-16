import _ from 'lodash';

const formatterStylish = (diffTree) => {
  const iter = (tree, depth) => {
    const currentIndent = '  '.repeat(depth * 2 - 1);
    const bracketIndent = '  '.repeat(depth * 2 - 2);
    const lines = tree.map((obj) => {
      if (_.isObject(obj.value)) {
        switch (obj.status) {
          case 'unchange' || undefined: {
            return `${currentIndent}  ${obj.key}: ${iter(obj.value, depth + 1)}`;
          }
          case 'add': {
            return `${currentIndent}+ ${obj.key}: ${iter(obj.value, depth + 1)}`;
          }
          case 'remove': {
            return `${currentIndent}- ${obj.key}: ${iter(obj.value, depth + 1)}`;
          }
          case 'change': {
            return `${currentIndent}- ${obj.key}: ${(_.isObject(obj.value.obj1Key) ? iter(obj.value.obj1Key, depth + 1) : obj.value.obj1Key)}\n${currentIndent}+ ${obj.key}: ${(_.isObject(obj.value.obj2Key) ? iter(obj.value.obj2Key, depth + 1) : obj.value.obj2Key)}`;
          }
          default:
            return `${currentIndent}  ${obj.key}: ${iter(obj.value, depth + 1)}`;
        }
      }
      switch (obj.status) {
        case 'unchange' || undefined: {
          return `${currentIndent}  ${obj.key}: ${obj.value}`;
        }
        case 'add': {
          return `${currentIndent}+ ${obj.key}: ${obj.value}`;
        }
        case 'remove': {
          return `${currentIndent}- ${obj.key}: ${obj.value}`;
        }
        case 'change': {
          return `${currentIndent}- ${obj.key}: ${obj.value.obj1Key}\n${currentIndent}+ ${obj.key}: ${obj.value.obj2Key}`;
        }
        default:
          return `${currentIndent}  ${obj.key}: ${obj.value}`;
      }
    });
    return [
      '{',
      ...lines,
      `${bracketIndent}}`,
    ].join('\n');
  };

  return iter(diffTree, 1);
};

const formatter = (diffTree, format) => {
  switch (format) {
    case 'stylish': {
      return formatterStylish(diffTree);
    }
    default:
      return Error('Неизвестный формат');
  }
};

export default formatter;
