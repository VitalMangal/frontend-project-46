import { fileURLToPath } from 'node:url';
import path from 'node:path';
import * as fs from 'node:fs';
import gendiff from '../src/index.js';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const getFixturePath = (filename) => path.join(__dirname, '__fixtures__', filename);

test.each([
  {
    expectFile1: 'expect_file1.json', expectFile2: 'expect_file2.json', receiveFile: 'receive_stylish_file.txt', style: 'stylish', extention: 'JSON',
  },
  {
    expectFile1: 'expect_file1.yml', expectFile2: 'expect_file2.yml', receiveFile: 'receive_stylish_file.txt', style: 'stylish', extention: 'YML',
  },
  {
    expectFile1: 'expect_file1.json', expectFile2: 'expect_file2.json', receiveFile: 'receive_plain_file.txt', style: 'plain', extention: 'JSON',
  },
  {
    expectFile1: 'expect_file1.yml', expectFile2: 'expect_file2.yml', receiveFile: 'receive_plain_file.txt', style: 'plain', extention: 'YML',
  },
  {
    expectFile1: 'expect_file1.json', expectFile2: 'expect_file2.json', receiveFile: 'receive_json_file.txt', style: 'json', extention: 'JSON',
  },
  {
    expectFile1: 'expect_file1.yml', expectFile2: 'expect_file2.yml', receiveFile: 'receive_json_file.txt', style: 'json', extention: 'YML',
  },
])('$extention files, receive $style format)', ({
  expectFile1, expectFile2, receiveFile, style,
}) => {
  const expFilePath1 = getFixturePath(expectFile1);
  const expFilePath2 = getFixturePath(expectFile2);
  const resFilePath = getFixturePath(receiveFile);

  const getGenDiff = gendiff(expFilePath1, expFilePath2, style);
  const result = fs.readFileSync(resFilePath, 'utf-8');

  expect(getGenDiff).toEqual(result);
});
