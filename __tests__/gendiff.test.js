import { fileURLToPath } from 'node:url';
import path from 'node:path';
import * as fs from 'node:fs';
import gendiff from '../src/utils/gendiff.js';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const getFixturePath = (filename) => path.join(__dirname, '..', '__fixtures__', filename);

test('JSON flat file test', () => {
  const expFilePath1 = getFixturePath('expect_file1.json');
  const expFilePath2 = getFixturePath('expect_file2.json');
  const resFilePath = getFixturePath('receive_file1.txt');

  const getGenDiff = gendiff(expFilePath1, expFilePath2);
  const result = fs.readFileSync(resFilePath, 'utf-8');

  expect(getGenDiff).toEqual(result);
  console.log('JSON flat - тесты прошли успешно');
});

test('YAML flat file test', () => {
  const expFilePath1 = getFixturePath('expect_file1.yaml');
  const expFilePath2 = getFixturePath('expect_file2.yaml');
  const resFilePath = getFixturePath('receive_file1.txt');

  const getGenDiff = gendiff(expFilePath1, expFilePath2);
  const result = fs.readFileSync(resFilePath, 'utf-8');

  expect(getGenDiff).toEqual(result);
  console.log('YAML flat - тесты прошли успешно');
});

test('JSON complex file test', () => {
  const expFilePath1 = getFixturePath('expect_complex_file1.json');
  const expFilePath2 = getFixturePath('expect_complex_file2.json');
  const resFilePath = getFixturePath('receive_complex_file.txt');

  const getGenDiff = gendiff(expFilePath1, expFilePath2);
  const result = fs.readFileSync(resFilePath, 'utf-8');

  expect(getGenDiff).toEqual(result);
  console.log('JSON complex - тесты прошли успешно');
});

test('YAML complex file test', () => {
  const expFilePath1 = getFixturePath('expect_complex_file1.yaml');
  const expFilePath2 = getFixturePath('expect_complex_file2.yaml');
  const resFilePath = getFixturePath('receive_complex_file.txt');

  const getGenDiff = gendiff(expFilePath1, expFilePath2);
  const result = fs.readFileSync(resFilePath, 'utf-8');

  expect(getGenDiff).toEqual(result);
  console.log('YAML complex - тесты прошли успешно');
});
