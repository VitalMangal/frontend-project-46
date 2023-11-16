/*const makeDisplay = (obj) => {
  switch (obj.status) {
    case 'unchange': {
      return `${currentIndent}  ${obj.key}: ${obj.value}`;
    }
    case 'add': {
      return `${currentIndent}+ ${obj.key}: ${obj.value}`;
    }
    case 'remove': {
      return `${currentIndent}- ${obj.key}: ${obj.value}`;
    }
    case 'change': {
      return `${currentIndent}- ${obj.key}: ${obj.obj1Key}\n${currentIndent}+ ${obj.key}: ${obj.obj2Key}`;
    }
  }
*/

import _ from 'lodash';

const formatter = (diffTree) => {
    const iter = (tree, depth) => {
      const currentIndent = '  '.repeat(depth * 2 - 1);
      const bracketIndent = '  '.repeat(depth * 2 - 2);
        const lines = tree.map((objs) => {
          if (_.isObject(objs.value)) {
            const arr = (objs.value).map((obj) => {
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
                return `${currentIndent}- ${obj.key}: ${(_.isObject(obj.obj1Key) ? iter(obj.obj1Key, depth + 1) : obj.obj1Key)}\n${currentIndent}+ ${obj.key}: ${(_.isObject(obj.obj2Key) ? iter(obj.obj2Key, depth + 1) : obj.obj2Key)}`;
              }
            }
          })}
          switch (objs.status) {
            case 'unchange' || undefined: {
              return `${currentIndent}  ${objs.key}: ${objs.value}`;
            }
            case 'add': {
              return `${currentIndent}+ ${objs.key}: ${objs.value}`;
            }
            case 'remove': {
              return `${currentIndent}- ${objs.key}: ${objs.value}`;
            }
            case 'change': {
              return `${currentIndent}- ${objs.key}: ${objs.obj1Key}\n${currentIndent}+ ${objs.key}: ${objs.obj2Key}`;
            }
          }
        })
        return [
          '{',
          ...lines,
          `${bracketIndent}}`,
        ].join('\n');
      };
    
      return iter(diffTree, 1);
    };
    

    export default formatter;


