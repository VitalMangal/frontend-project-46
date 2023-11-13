import path from 'node:path';
import { cwd } from 'node:process';

const normalizePath = (currentPath) => {
  const normalizedPath = path.normalize(currentPath);
  return path.resolve(cwd(), normalizedPath);
};

export default normalizePath;
