import _ from 'lodash';

const buildNode = (key, type, beforeValue, afterValue, children = []) =>
  ({
    key, type, beforeValue, afterValue, children,
  });

const buildAst = (data1, data2) => {
  const keys = _.union(Object.keys(data1), Object.keys(data2));

  return keys.map((key) => {
    if (!(_.has(data2, key))) {
      return buildNode(key, 'removed', data1[key]);
    }

    if (!(_.has(data1, key))) {
      return buildNode(key, 'added', undefined, data2[key]);
    }

    if (data1[key] instanceof Object && data2[key] instanceof Object) {
      if (_.isEqual(data1[key], data2[key])) {
        return buildNode(key, 'unchanged', data1[key]);
      }

      const subData1 = data1[key];
      const subData2 = data2[key];

      const child = buildAst(subData1, subData2);

      return buildNode(key, 'unchanged', undefined, undefined, child);
    }

    if (data1[key] === data2[key]) {
      return buildNode(key, 'unchanged', data1[key]);
    }

    return buildNode(key, 'changed', data1[key], data2[key]);
  });
};

export default buildAst;
