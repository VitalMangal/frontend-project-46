const { cwd } = require('node:process');
const path = require('node:path');

const normalizePath = (currentPath) => {
    return path.resolve(cwd(), currentPath);
};

export default normalizePath;