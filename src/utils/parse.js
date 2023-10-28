import * as fs from "node:fs";
import normalizePath from './normalazePath.js'

const parseFile = (filePath) => {
    const nomalizedPath = normalizePath(filePath);
    const contentFile = fs.readFileSync(nomalizedPath);
    const parseContentFile = JSON.parse(contentFile);
    return parseContentFile;
}

export default parseFile;