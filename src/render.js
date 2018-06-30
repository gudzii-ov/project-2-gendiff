const keyStatus = {
  unchanged: '  ',
  added: '+ ',
  removed: '- ',
};

const keyString = {
  unchanged: (key, depth) =>
    `${' '.repeat(2 * depth)}${keyStatus.unchanged}${key.key}: ${key.beforeValue}`,
  changed: (key, depth) =>
    `${' '.repeat(2 * depth)}${keyStatus.added}${key.key}: ${key.afterValue}\n${' '.repeat(2 * depth)}${keyStatus.removed}${key.key}: ${key.beforeValue}`,
  added: (key, depth) =>
    `${' '.repeat(2 * depth)}${keyStatus.added}${key.key}: ${key.afterValue}`,
  removed: (key, depth) =>
    `${' '.repeat(2 * depth)}${keyStatus.removed}${key.key}: ${key.beforeValue}`,
};

const getKeyString = type => keyString[type];

const renderNode = (node, depth) => {
  const renderedKeys = node.map(key => getKeyString(key.type)(key, depth + 1));
  const result = [`${' '.repeat(2 * depth)}{`, ...renderedKeys, `${' '.repeat(2 * depth)}}`];

  return result.join('\n');
};

export default ast => renderNode(ast, 0);
