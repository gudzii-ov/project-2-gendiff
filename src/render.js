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

const renderNode = (node, depth) => getKeyString(node.type)(node, depth);

export default (ast) => {
  const renderedKeys = ast.map(node => renderNode(node, 1));

  const result = ['{', ...renderedKeys, '}'];

  return result.join('\n');
};
