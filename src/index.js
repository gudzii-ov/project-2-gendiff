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

const genDiff = (pathToFile1, pathToFile2) => {
  const rawData1 = fs.readFileSync(path.resolve(pathToFile1), 'utf-8');
  const rawData2 = fs.readFileSync(path.resolve(pathToFile2), 'utf-8');

  const data1 = getConfigParser(pathToFile1)(rawData1);
  const data2 = getConfigParser(pathToFile2)(rawData2);

  const keysSet = new Set([...Object.keys(data1), ...Object.keys(data2)]);
  const keys = Array.from(keysSet);

  const keysObjArray = keys.map((cKey) => {
    const keyObject = {};
    keyObject.name = cKey;

    if (_.has(data1, cKey) && _.has(data2, cKey)) {
      keyObject.value = data1[cKey];
      keyObject.newValue = data2[cKey];
      keyObject.status = 'changed';

      if (data1[cKey] === data2[cKey]) {
        keyObject.status = 'unchanged';
      }
    }

    if (_.has(data1, cKey) && !(_.has(data2, cKey))) {
      keyObject.value = data1[cKey];
      keyObject.status = 'removed';
    }

    if (!(_.has(data1, cKey)) && _.has(data2, cKey)) {
      keyObject.newValue = data2[cKey];
      keyObject.status = 'added';
    }

    return keyObject;
  });

  const diffPropertiesArray = keysObjArray.map((cKeyObj) => {
    switch (cKeyObj.status) {
      case 'unchanged':
        return `  ${cKeyObj.name}: ${cKeyObj.value}`;
      case 'changed':
        return `+ ${cKeyObj.name}: ${cKeyObj.newValue}\n  - ${cKeyObj.name}: ${cKeyObj.value}`;
      case 'added':
        return `+ ${cKeyObj.name}: ${cKeyObj.newValue}`;
      case 'removed':
        return `- ${cKeyObj.name}: ${cKeyObj.value}`;
      default:
        return 'unexpected status';
    }
  });

  const diffPropertiesString = `  ${diffPropertiesArray.join('\n  ')}`;
  const diff = `{\n${diffPropertiesString}\n}`;

  return diff;
};

export default genDiff;
