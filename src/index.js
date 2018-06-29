import fs from 'fs';
import path from 'path';
import getParser from './parser';
import buildAst from './build-ast';
import render from './render';

const getFormat = pathToFile => path.extname(pathToFile);

const genDiff = (pathToFile1, pathToFile2) => {
  const rawData1 = fs.readFileSync(path.resolve(pathToFile1), 'utf-8');
  const rawData2 = fs.readFileSync(path.resolve(pathToFile2), 'utf-8');

  const format1 = getFormat(pathToFile1).slice(1);
  const format2 = getFormat(pathToFile2).slice(1);

  const data1 = getParser(format1).parse(rawData1);
  const data2 = getParser(format2).parse(rawData2);

  const ast = buildAst(data1, data2);

  const diff = render(ast);

  return diff;
};

export default genDiff;
