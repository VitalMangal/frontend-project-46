import formatterStylish from './stylish-formatter.js';
import formatterPlain from './plain-formatter.js';

const formatter = (diffTree, format) => {
  switch (format) {
    case 'stylish': {
      return formatterStylish(diffTree);
    }
    case 'plain': {
      return formatterPlain(diffTree);
    }
    default:
      return Error('Неизвестный формат');
  }
};

export default formatter;
