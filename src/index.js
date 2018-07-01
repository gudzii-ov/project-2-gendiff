import fs from 'fs';
import path from 'path';
import buildAst from './build-ast';
import getParser from './parser';
import getRender from './renders';

const getFormat = pathToFile => path.extname(pathToFile);

const genDiff = (pathToFile1, pathToFile2, outputFormat) => {
  const rawData1 = fs.readFileSync(path.resolve(pathToFile1), 'utf-8');
  const rawData2 = fs.readFileSync(path.resolve(pathToFile2), 'utf-8');

  const configFormat1 = getFormat(pathToFile1).slice(1);
  const configFormat2 = getFormat(pathToFile2).slice(1);

  const data1 = getParser(configFormat1).parse(rawData1);
  const data2 = getParser(configFormat2).parse(rawData2);

  const ast = buildAst(data1, data2);

  const diff = getRender(outputFormat)(ast);

  return diff;
};

export default genDiff;
