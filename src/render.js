const keyStatus = {
  unchanged: '  ',
  added: '+ ',
  removed: '- ',
};

const keyString = {
  unchanged: (key, tab) => `${tab}${keyStatus.unchanged}${key.key}: ${key.beforeValue}`,
  changed: (key, tab) =>
    `${tab}${keyStatus.added}${key.key}: ${key.afterValue}\n${tab}${keyStatus.removed}${key.key}: ${key.beforeValue}`,
  added: (key, tab) => `${tab}${keyStatus.added}${key.key}: ${key.afterValue}`,
  removed: (key, tab) => `${tab}${keyStatus.removed}${key.key}: ${key.beforeValue}`,
};

const getKeyString = type => keyString[type];

const renderNode = (node, depth) => {
  const tab = ' '.repeat(2 * depth);

  return getKeyString(node.type)(node, tab);
};

export default (ast) => {
  const renderedKeys = ast.map(node => renderNode(node, 1));

  const result = ['{', ...renderedKeys, '}'];

  return result.join('\n');
};
