import * as fs from "node:fs";
import normalizePath from './normalazePath.cjs'

const parseFile = (filePath) => {
    const nomalizedPath = normalizePath(filePath);
    const contentFile = fs.readFileSync(nomalizedPath);
    const parseContentFile = JSON.parse(contentFile);
    return parseContentFile;
}
const filePathh = '../file1.json'
console.log(parseFile(filePathh));