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
  changed: (name, prop) => `Property '${name.join('.')}' was updated. From ${stringify(prop.valueBefore, '')} to ${stringify(prop.valueAfter, '')}`,
  added: (name, prop) => `Property '${name.join('.')}' was added with ${stringify(prop.valueAfter, 'value: ')}`,
  removed: name => `Property '${name.join('.')}' was removed`,
  nested: (name, prop, fn) => fn(prop.children, name),
};

const getString = type => plainStrings[type];

const getResultString = (ast, fullName) => ast
  .filter(node => node.type !== 'unchanged')
  .map((node) => {
    const name = [...fullName, node.name];
    return getString(node.type)(name, node, getResultString);
  })
  .join('\n');

export default ast => `\n${getResultString(ast, [])}`;
