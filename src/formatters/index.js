import formatterStylish from './stylish-formatter.js';
import formatterPlain from './plain-formatter.js';
import jsonFormatter from './json-formatter.js';

const formatter = (diffTree, format) => {
  switch (format) {
    case 'stylish':
      return formatterStylish(diffTree);
    case 'plain':
      return formatterPlain(diffTree);
    case 'json':
      return jsonFormatter(diffTree);
    default:
      throw new Error(`Неизвестный формат - ${format}`);
  }
};

export default formatter;
