import yaml from 'js-yaml';

const parse = (content, extension) => {
  switch (extension) {
    case '.json':
      return JSON.parse(content);
    case '.yaml':
    case '.yml':
      return yaml.load(content);
    default:
      throw new Error(`Unknown file extension: ${extension}`);
  }
};

export default parse;
