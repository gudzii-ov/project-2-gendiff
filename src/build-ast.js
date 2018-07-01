import _ from 'lodash';

const buildAst = (data1, data2) => {
  const keys = _.union(Object.keys(data1), Object.keys(data2));

  return keys.map((key) => {
    if (!(_.has(data2, key))) {
      return { name: key, type: 'removed', valueBefore: data1[key] };
    }

    if (!(_.has(data1, key))) {
      return { name: key, type: 'added', valueAfter: data2[key] };
    }

    if (data1[key] instanceof Object && data2[key] instanceof Object) {
      const subData1 = data1[key];
      const subData2 = data2[key];

      const children = buildAst(subData1, subData2);

      return { name: key, type: 'nested', children };
    }

    if (data1[key] === data2[key]) {
      return { name: key, type: 'unchanged', valueBefore: data1[key] };
    }

    return {
      name: key, type: 'changed', valueBefore: data1[key], valueAfter: data2[key],
    };
  });
};

export default buildAst;
