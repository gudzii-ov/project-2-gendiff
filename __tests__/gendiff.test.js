import fs from 'fs';
import path from 'path';
import genDiff from '../src';

// const pathToFile1 = path.resolve(__dirname, '__fixtures__', 'before.json');
// const pathToFile2 = path.resolve(__dirname, '__fixtures__', 'after.json');
const pathToFile1 = './__tests__/__fixtures__/before.json';
const pathToFile2 = './__tests__/__fixtures__/after.json';
const pathToResults = path.resolve(__dirname, '__fixtures__', 'results.json');

const results = JSON.parse(fs.readFileSync(pathToResults));

const expectedJSON = results['json-diff'];

test('compares 2 json files', () => {
  expect(genDiff(pathToFile1, pathToFile2)).toBe(expectedJSON);
});
