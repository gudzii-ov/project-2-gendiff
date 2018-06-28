import fs from 'fs';
import yaml from 'js-yaml';
import ini from 'ini';
import path from 'path';
import _ from 'lodash';

const getConfigParser = (pathToFile) => {
  const configActions = [
    {
      type: 'json',
      check: arg => path.extname(arg) === '.json',
      parser: arg => JSON.parse(arg),
    },
    {
      type: 'yaml',
      check: arg => path.extname(arg) === '.yml' || path.extname(arg) === '.yaml',
      parser: arg => yaml.safeLoad(arg),
    },
    {
      type: 'ini',
      check: arg => path.extname(arg) === '.ini',
      parser: arg => ini.parse(arg),
    },
  ];

  return configActions.find(({ check }) => check(pathToFile)).parser;
};

const getKeyString = (key, data1, data2) => {
  if (!(_.has(data2, key))) {
    return `- ${key}: ${data1[key]}`;
  }

  if (!(_.has(data1, key))) {
    return `+ ${key}: ${data2[key]}`;
  }

  if (data1[key] === data2[key]) {
    return `  ${key}: ${data1[key]}`;
  }

  return `+ ${key}: ${data2[key]}\n  - ${key}: ${data1[key]}`;
};

const genDiff = (pathToFile1, pathToFile2) => {
  const rawData1 = fs.readFileSync(path.resolve(pathToFile1), 'utf-8');
  const rawData2 = fs.readFileSync(path.resolve(pathToFile2), 'utf-8');

  const data1 = getConfigParser(pathToFile1)(rawData1);
  const data2 = getConfigParser(pathToFile2)(rawData2);

  const keys = _.union(Object.keys(data1), Object.keys(data2));

  return `${keys.reduce((acc, cKey) =>
    `${acc}  ${getKeyString(cKey, data1, data2)}\n`, '{\n')}}`;
};

export default genDiff;
