const indent = ' '.repeat(2);

const stringify = (node, depth) => {
  if (!(node instanceof Object)) {
    return node;
  }

  const nodeKeys = Object.keys(node);
  const string = nodeKeys.map(cKey =>
    `${indent.repeat(depth + 1)}${cKey}: ${stringify(node[cKey], depth + 1)}`).join('\n');

  const result = ['{', string, `${indent.repeat(depth)}}`].join('\n');

  return result;
};

const keyStatus = {
  unchanged: '  ',
  added: '+ ',
  removed: '- ',
};

const keyString = {
  unchanged: (key, depth) =>
    `${indent.repeat(depth)}${keyStatus.unchanged}${key.key}: ${key.beforeValue}`,
  changed: (key, depth) =>
    `${indent.repeat(depth)}${keyStatus.added}${key.key}: ${key.afterValue}\n${indent.repeat(depth)}${keyStatus.removed}${key.key}: ${key.beforeValue}`,
  added: (key, depth) =>
    `${indent.repeat(depth)}${keyStatus.added}${key.key}: ${key.afterValue}`,
  removed: (key, depth) =>
    `${indent.repeat(depth)}${keyStatus.removed}${key.key}: ${key.beforeValue}`,
};

const getKeyString = type => keyString[type];

const renderNode = (node, depth) => {
  const renderedKeys = node.map(key => getKeyString(key.type)(key, depth + 1));
  const result = [`${indent.repeat(depth)}{`, ...renderedKeys, `${indent.repeat(depth)}}`];

  return result.join('\n');
};

export default (ast) => {
  return renderNode(ast, 0);
};
