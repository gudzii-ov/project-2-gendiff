import fs from 'fs';
import path from 'path';
import genDiff from '../src';

const pathToResults = path.resolve(__dirname, '__fixtures__', 'results.json');
const results = JSON.parse(fs.readFileSync(pathToResults));

const pathToJSON1 = './__tests__/__fixtures__/before.json';
const pathToJSON2 = './__tests__/__fixtures__/after.json';

const pathToYAML1 = './__tests__/__fixtures__/before.yaml';
const pathToYAML2 = './__tests__/__fixtures__/after.yaml';
const pathToYML1 = './__tests__/__fixtures__/before.yml';
const pathToYML2 = './__tests__/__fixtures__/after.yml';

const pathToINI1 = './__tests__/__fixtures__/before.ini';
const pathToINI2 = './__tests__/__fixtures__/after.ini';

const expectedFlat = results['flat-diff'];

test('compares 2 JSON configs', () => {
  expect(genDiff(pathToJSON1, pathToJSON2)).toBe(expectedFlat);
});

test('compares 2 YAML configs', () => {
  expect(genDiff(pathToYAML1, pathToYAML2)).toBe(expectedFlat);
});

test('compares 2 YML configs', () => {
  expect(genDiff(pathToYML1, pathToYML2)).toBe(expectedFlat);
});

test('compares 2 INI configs', () => {
  expect(genDiff(pathToINI1, pathToINI2)).toBe(expectedFlat);
});
