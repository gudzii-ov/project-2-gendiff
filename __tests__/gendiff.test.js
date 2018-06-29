import fs from 'fs';
import path from 'path';
import genDiff from '../src';

describe('Compares flat config files', () => {
  const pathToConfig = './__tests__/__fixtures__';

  test('compares 2 JSON configs', () => {
    const pathToJSON1 = `${pathToConfig}/json/before.json`;
    const pathToJSON2 = `${pathToConfig}/json/after.json`;
    const expected = fs.readFileSync(path.resolve(pathToConfig, 'json', 'expected-json'), 'utf-8');

    expect(genDiff(pathToJSON1, pathToJSON2)).toBe(expected);
  });

  test('compares 2 YAML configs', () => {
    const pathToYAML1 = `${pathToConfig}/yaml/before.yaml`;
    const pathToYAML2 = `${pathToConfig}/yaml/after.yaml`;
    const expected = fs.readFileSync(path.resolve(pathToConfig, 'yaml', 'expected-yaml'), 'utf-8');

    expect(genDiff(pathToYAML1, pathToYAML2)).toBe(expected);
  });

  test('compares 2 YML configs', () => {
    const pathToYML1 = `${pathToConfig}/yaml/before.yml`;
    const pathToYML2 = `${pathToConfig}/yaml/after.yml`;
    const expected = fs.readFileSync(path.resolve(pathToConfig, 'yaml', 'expected-yaml'), 'utf-8');

    expect(genDiff(pathToYML1, pathToYML2)).toBe(expected);
  });

  test('compares 2 INI configs', () => {
    const pathToINI1 = `${pathToConfig}/ini/before.ini`;
    const pathToINI2 = `${pathToConfig}/ini/after.ini`;
    const expected = fs.readFileSync(path.resolve(pathToConfig, 'ini', 'expected-ini'), 'utf-8');

    expect(genDiff(pathToINI1, pathToINI2)).toBe(expected);
  });
});

describe('Compares recursive config files', () => {
  const pathToConfig = './__tests__/__fixtures__';

  test('compares 2 JSON configs', () => {
    const pathToJSON1 = `${pathToConfig}/json/before-recursive.json`;
    const pathToJSON2 = `${pathToConfig}/json/after-recursive.json`;
    const expected = fs.readFileSync(path.resolve(pathToConfig, 'json', 'expected-recursive'), 'utf-8');

    expect(genDiff(pathToJSON1, pathToJSON2)).toBe(expected);
  });

  test('compares 2 YAML configs', () => {
    const pathToYAML1 = `${pathToConfig}/yaml/before-recursive.yaml`;
    const pathToYAML2 = `${pathToConfig}/yaml/after-recursive.yaml`;
    const expected = fs.readFileSync(path.resolve(pathToConfig, 'yaml', 'expected-recursive'), 'utf-8');

    expect(genDiff(pathToYAML1, pathToYAML2)).toBe(expected);
  });

  test('compares 2 YML configs', () => {
    const pathToYML1 = `${pathToConfig}/yaml/before-recursive.yml`;
    const pathToYML2 = `${pathToConfig}/yaml/after-recursive.yml`;
    const expected = fs.readFileSync(path.resolve(pathToConfig, 'yaml', 'expected-recursive'), 'utf-8');

    expect(genDiff(pathToYML1, pathToYML2)).toBe(expected);
  });

  test('compares 2 INI configs', () => {
    const pathToINI1 = `${pathToConfig}/ini/before-recursive.ini`;
    const pathToINI2 = `${pathToConfig}/ini/after-recursive.ini`;
    const expected = fs.readFileSync(path.resolve(pathToConfig, 'ini', 'expected-recursive'), 'utf-8');

    expect(genDiff(pathToINI1, pathToINI2)).toBe(expected);
  });
});
