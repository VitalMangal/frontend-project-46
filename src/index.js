import diffTree from './utils/diffTree.js';
import formatter from './formatters/index.js';

const gendiff = (filepath1, filepath2, format = 'stylish') => {
  const diff = diffTree(filepath1, filepath2);
  return formatter(diff, format);
};

export default gendiff;
