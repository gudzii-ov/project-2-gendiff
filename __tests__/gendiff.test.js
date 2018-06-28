import fs from 'fs';
import path from 'path';
import genDiff from '../src';

describe('Compares flat config files', () => {
  const pathToConfig = './__tests__/__fixtures__';

  const pathToResults = path.resolve(__dirname, '__fixtures__', 'results.json');
  const results = JSON.parse(fs.readFileSync(pathToResults));
  const expectedFlat = results['flat-diff'];

  test('compares 2 JSON configs', () => {
    const pathToJSON1 = `${pathToConfig}/before.json`;
    const pathToJSON2 = `${pathToConfig}/after.json`;

    expect(genDiff(pathToJSON1, pathToJSON2)).toBe(expectedFlat);
  });

  test('compares 2 YAML configs', () => {
    const pathToYAML1 = `${pathToConfig}/before.yaml`;
    const pathToYAML2 = `${pathToConfig}/after.yaml`;

    expect(genDiff(pathToYAML1, pathToYAML2)).toBe(expectedFlat);
  });

  test('compares 2 YML configs', () => {
    const pathToYML1 = `${pathToConfig}/before.yml`;
    const pathToYML2 = `${pathToConfig}/after.yml`;

    expect(genDiff(pathToYML1, pathToYML2)).toBe(expectedFlat);
  });

  test('compares 2 INI configs', () => {
    const pathToINI1 = `${pathToConfig}/before.ini`;
    const pathToINI2 = `${pathToConfig}/after.ini`;

    expect(genDiff(pathToINI1, pathToINI2)).toBe(expectedFlat);
  });
});
