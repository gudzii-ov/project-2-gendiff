import fs from 'fs';
import path from 'path';
import genDiff from '../src';

describe('Test recursive output', () => {
  describe('Compares flat config files', () => {
    const pathToConfig = './__tests__/__fixtures__';

    test('compares 2 JSON configs', () => {
      const pathToJSON1 = `${pathToConfig}/json/input/before.json`;
      const pathToJSON2 = `${pathToConfig}/json/input/after.json`;
      const expected = fs.readFileSync(path.resolve(pathToConfig, 'json', 'expected', 'plain-in-recursive-out'), 'utf-8');

      expect(genDiff(pathToJSON1, pathToJSON2, 'recursive')).toBe(expected);
    });

    test('compares 2 YAML configs', () => {
      const pathToYAML1 = `${pathToConfig}/yaml/input/before.yaml`;
      const pathToYAML2 = `${pathToConfig}/yaml/input/after.yaml`;
      const expected = fs.readFileSync(path.resolve(pathToConfig, 'yaml', 'expected', 'plain-in-recursive-out'), 'utf-8');

      expect(genDiff(pathToYAML1, pathToYAML2, 'recursive')).toBe(expected);
    });

    test('compares 2 YML configs', () => {
      const pathToYML1 = `${pathToConfig}/yaml/input/before.yml`;
      const pathToYML2 = `${pathToConfig}/yaml/input/after.yml`;
      const expected = fs.readFileSync(path.resolve(pathToConfig, 'yaml', 'expected', 'plain-in-recursive-out'), 'utf-8');

      expect(genDiff(pathToYML1, pathToYML2, 'recursive')).toBe(expected);
    });

    test('compares 2 INI configs', () => {
      const pathToINI1 = `${pathToConfig}/ini/input/before.ini`;
      const pathToINI2 = `${pathToConfig}/ini/input/after.ini`;
      const expected = fs.readFileSync(path.resolve(pathToConfig, 'ini', 'expected', 'plain-in-recursive-out'), 'utf-8');

      expect(genDiff(pathToINI1, pathToINI2, 'recursive')).toBe(expected);
    });
  });

  describe('Compares recursive config files', () => {
    const pathToConfig = './__tests__/__fixtures__';

    test('compares 2 JSON configs', () => {
      const pathToJSON1 = `${pathToConfig}/json/input/before-recursive.json`;
      const pathToJSON2 = `${pathToConfig}/json/input/after-recursive.json`;
      const expected = fs.readFileSync(path.resolve(pathToConfig, 'json', 'expected', 'recursive-in-recursive-out'), 'utf-8');

      expect(genDiff(pathToJSON1, pathToJSON2, 'recursive')).toBe(expected);
    });

    test('compares 2 YAML configs', () => {
      const pathToYAML1 = `${pathToConfig}/yaml/input/before-recursive.yaml`;
      const pathToYAML2 = `${pathToConfig}/yaml/input/after-recursive.yaml`;
      const expected = fs.readFileSync(path.resolve(pathToConfig, 'yaml', 'expected', 'recursive-in-recursive-out'), 'utf-8');

      expect(genDiff(pathToYAML1, pathToYAML2, 'recursive')).toBe(expected);
    });

    test('compares 2 YML configs', () => {
      const pathToYML1 = `${pathToConfig}/yaml/input/before-recursive.yml`;
      const pathToYML2 = `${pathToConfig}/yaml/input/after-recursive.yml`;
      const expected = fs.readFileSync(path.resolve(pathToConfig, 'yaml', 'expected', 'recursive-in-recursive-out'), 'utf-8');

      expect(genDiff(pathToYML1, pathToYML2, 'recursive')).toBe(expected);
    });

    test('compares 2 INI configs', () => {
      const pathToINI1 = `${pathToConfig}/ini/input/before-recursive.ini`;
      const pathToINI2 = `${pathToConfig}/ini/input/after-recursive.ini`;
      const expected = fs.readFileSync(path.resolve(pathToConfig, 'ini', 'expected', 'recursive-in-recursive-out'), 'utf-8');

      expect(genDiff(pathToINI1, pathToINI2, 'recursive')).toBe(expected);
    });
  });
});

describe('Test plain output', () => {
  describe('Compares flat config files', () => {
    const pathToConfig = './__tests__/__fixtures__';

    test('compares 2 JSON configs', () => {
      const pathToJSON1 = `${pathToConfig}/json/input/before.json`;
      const pathToJSON2 = `${pathToConfig}/json/input/after.json`;
      const expected = fs.readFileSync(path.resolve(pathToConfig, 'json', 'expected', 'plain-in-plain-out'), 'utf-8');

      expect(genDiff(pathToJSON1, pathToJSON2, 'plain')).toBe(expected);
    });

    test('compares 2 YAML configs', () => {
      const pathToYAML1 = `${pathToConfig}/yaml/input/before.yaml`;
      const pathToYAML2 = `${pathToConfig}/yaml/input/after.yaml`;
      const expected = fs.readFileSync(path.resolve(pathToConfig, 'yaml', 'expected', 'plain-in-plain-out'), 'utf-8');

      expect(genDiff(pathToYAML1, pathToYAML2, 'plain')).toBe(expected);
    });

    test('compares 2 YML configs', () => {
      const pathToYML1 = `${pathToConfig}/yaml/input/before.yml`;
      const pathToYML2 = `${pathToConfig}/yaml/input/after.yml`;
      const expected = fs.readFileSync(path.resolve(pathToConfig, 'yaml', 'expected', 'plain-in-plain-out'), 'utf-8');

      expect(genDiff(pathToYML1, pathToYML2, 'plain')).toBe(expected);
    });

    test('compares 2 INI configs', () => {
      const pathToINI1 = `${pathToConfig}/ini/input/before.ini`;
      const pathToINI2 = `${pathToConfig}/ini/input/after.ini`;
      const expected = fs.readFileSync(path.resolve(pathToConfig, 'ini', 'expected', 'plain-in-plain-out'), 'utf-8');

      expect(genDiff(pathToINI1, pathToINI2, 'plain')).toBe(expected);
    });
  });

  describe('Compares recursive config files', () => {
    const pathToConfig = './__tests__/__fixtures__';

    test('compares 2 JSON configs', () => {
      const pathToJSON1 = `${pathToConfig}/json/input/before-recursive.json`;
      const pathToJSON2 = `${pathToConfig}/json/input/after-recursive.json`;
      const expected = fs.readFileSync(path.resolve(pathToConfig, 'json', 'expected', 'recursive-in-plain-out'), 'utf-8');

      expect(genDiff(pathToJSON1, pathToJSON2, 'plain')).toBe(expected);
    });

    test('compares 2 YAML configs', () => {
      const pathToYAML1 = `${pathToConfig}/yaml/input/before-recursive.yaml`;
      const pathToYAML2 = `${pathToConfig}/yaml/input/after-recursive.yaml`;
      const expected = fs.readFileSync(path.resolve(pathToConfig, 'yaml', 'expected', 'recursive-in-plain-out'), 'utf-8');

      expect(genDiff(pathToYAML1, pathToYAML2, 'plain')).toBe(expected);
    });

    test('compares 2 YML configs', () => {
      const pathToYML1 = `${pathToConfig}/yaml/input/before-recursive.yml`;
      const pathToYML2 = `${pathToConfig}/yaml/input/after-recursive.yml`;
      const expected = fs.readFileSync(path.resolve(pathToConfig, 'yaml', 'expected', 'recursive-in-plain-out'), 'utf-8');

      expect(genDiff(pathToYML1, pathToYML2, 'plain')).toBe(expected);
    });

    test('compares 2 INI configs', () => {
      const pathToINI1 = `${pathToConfig}/ini/input/before-recursive.ini`;
      const pathToINI2 = `${pathToConfig}/ini/input/after-recursive.ini`;
      const expected = fs.readFileSync(path.resolve(pathToConfig, 'ini', 'expected', 'recursive-in-plain-out'), 'utf-8');

      expect(genDiff(pathToINI1, pathToINI2, 'plain')).toBe(expected);
    });
  });
});
