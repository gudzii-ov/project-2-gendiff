import path from 'path';
import genDiff from '../src';

const pathToFile1 = path.join(__dirname, '__fixtures__', 'before.json');
const pathToFile2 = path.join(__dirname, '__fixtures__', 'after.json');

const expected = '{host: hexlet.io + timeout: 20 - timeout: 50 - proxy: 123.234.53.22 + verbose: true - follow: false}';

test('compares 2 json files', () => {
  expect(genDiff(pathToFile1, pathToFile2)).toBe(expected);
});
