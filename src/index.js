import fs from 'fs';
import path from 'path';
import _ from 'lodash';
import getParser from './parser';

const buildAst = (data1, data2) => {
  const buildNode = (key, type, beforeValue, afterValue, children = []) =>
    ({
      key, type, beforeValue, afterValue, children,
    });

  const keys = _.union(Object.keys(data1), Object.keys(data2));

  return keys.map((key) => {
    if (!(_.has(data2, key))) {
      return buildNode(key, 'removed', data1[key]);
    }

    if (!(_.has(data1, key))) {
      return buildNode(key, 'added', undefined, data2[key]);
    }

    if (data1[key] === data2[key]) {
      return buildNode(key, 'unchanged', data1[key]);
    }

    return buildNode(key, 'changed', data1[key], data2[key]);
  });
};

// const getKeyString = (key, data1, data2) => {
//   if (!(_.has(data2, key))) {
//     return `- ${key}: ${data1[key]}`;
//   }
//
//   if (!(_.has(data1, key))) {
//     return `+ ${key}: ${data2[key]}`;
//   }
//
//   if (data1[key] === data2[key]) {
//     return `  ${key}: ${data1[key]}`;
//   }
//
//   return `+ ${key}: ${data2[key]}\n  - ${key}: ${data1[key]}`;
// };

const getFormat = pathToFile => path.extname(pathToFile);

const genDiff = (pathToFile1, pathToFile2) => {
  const rawData1 = fs.readFileSync(path.resolve(pathToFile1), 'utf-8');
  const rawData2 = fs.readFileSync(path.resolve(pathToFile2), 'utf-8');

  const format1 = getFormat(pathToFile1).slice(1);
  const format2 = getFormat(pathToFile2).slice(1);

  const data1 = getParser(format1).parse(rawData1);
  const data2 = getParser(format2).parse(rawData2);

  const ast = buildAst(data1, data2);

  console.log(ast);
  return ast;

  // const keys = _.union(Object.keys(data1), Object.keys(data2));
  //
  // return `${keys.reduce((acc, cKey) =>
  //   `${acc}  ${getKeyString(cKey, data1, data2)}\n`, '{\n')}}`;
};

export default genDiff;
