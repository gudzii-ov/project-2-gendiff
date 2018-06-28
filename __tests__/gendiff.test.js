import fs from 'fs';
import path from 'path';
import genDiff from '../src';

const pathToResults = path.resolve(__dirname, '__fixtures__', 'results.json');

describe('Compares flat config files', () => {
  test('compares 2 JSON configs', () => {
    const pathToJSON1 = './__tests__/__fixtures__/before.json';
    const pathToJSON2 = './__tests__/__fixtures__/after.json';

    const results = JSON.parse(fs.readFileSync(pathToResults));
    const expectedFlat = results['flat-diff'];

    expect(genDiff(pathToJSON1, pathToJSON2)).toBe(expectedFlat);
  });

  test('compares 2 YAML configs', () => {
    const pathToYAML1 = './__tests__/__fixtures__/before.yaml';
    const pathToYAML2 = './__tests__/__fixtures__/after.yaml';

    const results = JSON.parse(fs.readFileSync(pathToResults));
    const expectedFlat = results['flat-diff'];

    expect(genDiff(pathToYAML1, pathToYAML2)).toBe(expectedFlat);
  });

  test('compares 2 YML configs', () => {
    const pathToYML1 = './__tests__/__fixtures__/before.yml';
    const pathToYML2 = './__tests__/__fixtures__/after.yml';

    const results = JSON.parse(fs.readFileSync(pathToResults));
    const expectedFlat = results['flat-diff'];

    expect(genDiff(pathToYML1, pathToYML2)).toBe(expectedFlat);
  });

  test('compares 2 INI configs', () => {
    const pathToINI1 = './__tests__/__fixtures__/before.ini';
    const pathToINI2 = './__tests__/__fixtures__/after.ini';

    const results = JSON.parse(fs.readFileSync(pathToResults));
    const expectedFlat = results['flat-diff'];

    expect(genDiff(pathToINI1, pathToINI2)).toBe(expectedFlat);
  });
});
