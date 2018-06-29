import _ from 'lodash';

export default (data1, data2) => {
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
