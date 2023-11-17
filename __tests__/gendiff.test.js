import { fileURLToPath } from 'node:url';
import path from 'node:path';
import * as fs from 'node:fs';
import gendiff from '../src/utils/gendiff.js';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const getFixturePath = (filename) => path.join(__dirname, '..', '__fixtures__', filename);

test('JSON stylish test', () => {
  const expFilePath1 = getFixturePath('expect_file1.json');
  const expFilePath2 = getFixturePath('expect_file2.json');
  const resFilePath = getFixturePath('receive_stylish_file.txt');

  const getGenDiff = gendiff(expFilePath1, expFilePath2, 'stylish');
  const result = fs.readFileSync(resFilePath, 'utf-8');

  expect(getGenDiff).toEqual(result);
  console.log('JSON stylish - тесты прошли успешно');
});

test('YAML stylish test', () => {
  const expFilePath1 = getFixturePath('expect_file1.yaml');
  const expFilePath2 = getFixturePath('expect_file2.yaml');
  const resFilePath = getFixturePath('receive_stylish_file.txt');

  const getGenDiff = gendiff(expFilePath1, expFilePath2, 'stylish');
  const result = fs.readFileSync(resFilePath, 'utf-8');

  expect(getGenDiff).toEqual(result);
  console.log('YAML stylish - тесты прошли успешно');
});

test('JSON plain test', () => {
  const expFilePath1 = getFixturePath('expect_file1.json');
  const expFilePath2 = getFixturePath('expect_file2.json');
  const resFilePath = getFixturePath('receive_plain_file.txt');

  const getGenDiff = gendiff(expFilePath1, expFilePath2, 'plain');
  const result = fs.readFileSync(resFilePath, 'utf-8');

  expect(getGenDiff).toEqual(result);
  console.log('JSON Plain - тесты прошли успешно');
});

test('YAML plain test', () => {
  const expFilePath1 = getFixturePath('expect_file1.yaml');
  const expFilePath2 = getFixturePath('expect_file2.yaml');
  const resFilePath = getFixturePath('receive_plain_file.txt');

  const getGenDiff = gendiff(expFilePath1, expFilePath2, 'plain');
  const result = fs.readFileSync(resFilePath, 'utf-8');

  expect(getGenDiff).toEqual(result);
  console.log('YAML plain - тесты прошли успешно');
});

test('JSON json test', () => {
  const expFilePath1 = getFixturePath('expect_file1.json');
  const expFilePath2 = getFixturePath('expect_file2.json');
  const resFilePath = getFixturePath('receive_json_file.txt');

  const getGenDiff = gendiff(expFilePath1, expFilePath2, 'json');
  const result = fs.readFileSync(resFilePath, 'utf-8');

  expect(getGenDiff).toEqual(result);
  console.log('JSON json - тесты прошли успешно');
});

test('YAML json test', () => {
  const expFilePath1 = getFixturePath('expect_file1.yaml');
  const expFilePath2 = getFixturePath('expect_file2.yaml');
  const resFilePath = getFixturePath('receive_json_file.txt');

  const getGenDiff = gendiff(expFilePath1, expFilePath2, 'json');
  const result = fs.readFileSync(resFilePath, 'utf-8');

  expect(getGenDiff).toEqual(result);
  console.log('YAML json - тесты прошли успешно');
});
