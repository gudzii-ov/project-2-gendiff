const stringify = (value, prefix) => {
  if (value instanceof Object) {
    return 'complex value';
  }

  if (typeof value === 'boolean') {
    return `${prefix}${value}`;
  }

  return `${prefix}'${value}'`;
};

const plainStrings = {
  changed: prop => `Property '${prop.name}' was updated. From ${stringify(prop.valueBefore, '')} to ${stringify(prop.valueAfter, '')}`,
  added: prop => `Property '${prop.name}' was added with ${stringify(prop.valueAfter, 'value: ')}`,
  removed: prop => `Property '${prop.name}' was removed`,
};

const getString = type => plainStrings[type];

const render = (ast) => {
  const string = ast
    .filter(cProp => (cProp.type !== 'nested') && (cProp.type !== 'unchanged'))
    .map(cProp => getString(cProp.type)(cProp))
    .join('\n');

  const result = `\n${string}`;

  return result;
};

export default render;
