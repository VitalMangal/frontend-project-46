import _ from 'lodash';

const specСhars = {
  unchange: '  ',
  add: '+ ',
  remove: '- '
};

const formatterStylish = (diffTree) => {
  
  const iter = (tree, depth) => {
    const currentIndent = '  '.repeat(depth * 2 - 1);
    const bracketIndent = '  '.repeat(depth * 2 - 2);
    const lines = tree.map((obj) => {
    if (_.isObject(obj.value)) {
      if (obj.status === 'change') {
        return `${currentIndent}- ${obj.key}: ${(_.isObject(obj.value.obj1Key) ? iter(obj.value.obj1Key, depth + 1) : obj.value.obj1Key)}\n${currentIndent}+ ${obj.key}: ${(_.isObject(obj.value.obj2Key) ? iter(obj.value.obj2Key, depth + 1) : obj.value.obj2Key)}`;
      }
      return `${currentIndent}${specChars[obj.status]}${obj.key}: ${iter(obj.value, depth + 1)}`;
    }
    if (obj.status === 'change') {
      return `${currentIndent}${specChars['remove']}${obj.key}: ${obj.value.obj1Key}\n${currentIndent}${specChars['add']}${obj.key}: ${obj.value.obj2Key}`;
    }
    return `${currentIndent}${specChars[obj.status]}${obj.key}: ${obj.value}`;
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
