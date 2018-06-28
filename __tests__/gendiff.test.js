import fs from 'fs';
import path from 'path';
import genDiff from '../src';

const pathToFile1 = path.join(__dirname, '__fixtures__', 'before.json');
const pathToFile2 = path.join(__dirname, '__fixtures__', 'after.json');

const expected = '{\n    host: hexlet.io\n  + timeout: 20\n  - timeout: 50\n  - proxy: 123.234.53.22\n  - follow: false\n  + verbose: true\n}';

test('compares 2 json files', () => {
  expect(genDiff(pathToFile1, pathToFile2)).toBe(expected);
});
