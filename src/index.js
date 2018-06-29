import fs from 'fs';
import path from 'path';
import _ from 'lodash';
import getAction from './parser';

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

const getFormat = pathToFile => path.extname(pathToFile);

const genDiff = (pathToFile1, pathToFile2) => {
  const rawData1 = fs.readFileSync(path.resolve(pathToFile1), 'utf-8');
  const rawData2 = fs.readFileSync(path.resolve(pathToFile2), 'utf-8');

  const format1 = getFormat(pathToFile1).slice(1);
  const format2 = getFormat(pathToFile2).slice(1);

  const data1 = getAction(format1).parse(rawData1);
  const data2 = getAction(format2).parse(rawData2);

  const keys = _.union(Object.keys(data1), Object.keys(data2));

  return `${keys.reduce((acc, cKey) =>
    `${acc}  ${getKeyString(cKey, data1, data2)}\n`, '{\n')}}`;
};

export default genDiff;
