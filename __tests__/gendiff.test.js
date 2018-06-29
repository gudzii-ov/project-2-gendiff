import fs from 'fs';
import path from 'path';
import genDiff from '../src';

describe('Compares flat config files', () => {
  const pathToConfig = './__tests__/__fixtures__';

  test('compares 2 JSON configs', () => {
    const pathToJSON1 = `${pathToConfig}/before.json`;
    const pathToJSON2 = `${pathToConfig}/after.json`;
    const expected = fs.readFileSync(path.resolve(pathToConfig, 'expected-json'), 'utf-8');

    expect(genDiff(pathToJSON1, pathToJSON2)).toBe(expected);
  });

  test('compares 2 YAML configs', () => {
    const pathToYAML1 = `${pathToConfig}/before.yaml`;
    const pathToYAML2 = `${pathToConfig}/after.yaml`;
    const expected = fs.readFileSync(path.resolve(pathToConfig, 'expected-yaml'), 'utf-8');

    expect(genDiff(pathToYAML1, pathToYAML2)).toBe(expected);
  });

  test('compares 2 YML configs', () => {
    const pathToYML1 = `${pathToConfig}/before.yml`;
    const pathToYML2 = `${pathToConfig}/after.yml`;
    const expected = fs.readFileSync(path.resolve(pathToConfig, 'expected-yaml'), 'utf-8');

    expect(genDiff(pathToYML1, pathToYML2)).toBe(expected);
  });

  test('compares 2 INI configs', () => {
    const pathToINI1 = `${pathToConfig}/before.ini`;
    const pathToINI2 = `${pathToConfig}/after.ini`;
    const expected = fs.readFileSync(path.resolve(pathToConfig, 'expected-ini'), 'utf-8');

    expect(genDiff(pathToINI1, pathToINI2)).toBe(expected);
  });
});
