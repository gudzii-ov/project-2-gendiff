import fs from 'fs';
import path from 'path';
import genDiff from '../src/bin/gendiff';

const pathToFile1 = path.join(__dirname, '__fixtures__', 'before.json');
const pathToFile2 = path.join(__dirname, '__fixtures__', 'after.json');

const dataBefore = JSON.parse(fs.readFileSync(pathToFile1));
const dataAfter = JSON.parse(fs.readFileSync(pathToFile2));

const expected = '{host: hexlet.io + timeout: 20 - timeout: 50 - proxy: 123.234.53.22 + verbose: true - follow: false}';

test('compares 2 json files', () => {
  expect(genDiff(dataBefore, dataAfter)).toBe(expected);
});
