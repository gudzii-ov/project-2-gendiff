import fs from 'fs';
import path from 'path';
import _ from 'lodash';

const genDiff = (pathToFile1, pathToFile2) => {
  const absolutePath1 = path.resolve(pathToFile1);
  const absolutePath2 = path.resolve(pathToFile2);

  const data1 = JSON.parse(fs.readFileSync(absolutePath1));
  const data2 = JSON.parse(fs.readFileSync(absolutePath2));

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
