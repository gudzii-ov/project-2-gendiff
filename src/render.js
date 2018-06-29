const spacer = ' '.repeat(2);

const keyString = {
  unchanged: key => `${spacer}  ${key.key}: ${key.beforeValue}`,
  changed: key =>
    `${spacer}+ ${key.key}: ${key.afterValue}\n${spacer}- ${key.key}: ${key.beforeValue}`,
  added: key => `${spacer}+ ${key.key}: ${key.afterValue}`,
  removed: key => `${spacer}- ${key.key}: ${key.beforeValue}`,
};

const getKeyString = type => keyString[type];

export default (ast) => {
  const renderedKeys = ast.map(key => getKeyString(key.type)(key));

  const result = ['{', ...renderedKeys, '}'];

  return result.join('\n');
};
