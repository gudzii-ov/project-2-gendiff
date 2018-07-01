import _ from 'lodash';

const indent = ' '.repeat(2);
const getTab = depth => indent.repeat(depth);

const stringify = (value, depth) => {
  if (!(value instanceof Object)) {
    return value;
  }

  const valueKeys = Object.keys(value);
  const valueString = valueKeys
    .map(key =>
      `${getTab(depth + 2)}${key}: ${stringify(value[key], depth + 1)}`).join('\n');

  const string = `{\n${valueString}\n${getTab(depth)}}`;

  return string;
};

const keyType = {
  unchanged: '  ',
  added: '+ ',
  removed: '- ',
};

const keyString = {
  unchanged: (key, depth) =>
    `${getTab(depth)}${keyType.unchanged}${key.name}: ${stringify(key.valueBefore, depth + 1)}`,
  changed: (key, depth) =>
    [`${getTab(depth)}${keyType.added}${key.name}: ${stringify(key.valueAfter, depth + 1)}`,
      `${getTab(depth)}${keyType.removed}${key.name}: ${stringify(key.valueBefore, depth + 1)}`],
  added: (key, depth) =>
    `${getTab(depth)}${keyType.added}${key.name}: ${stringify(key.valueAfter, depth + 1)}`,
  removed: (key, depth) =>
    `${getTab(depth)}${keyType.removed}${key.name}: ${stringify(key.valueBefore, depth + 1)}`,
  nested: (key, depth, render) =>
    `${getTab(depth)}${keyType.unchanged}${key.name}: ${render(key.children, depth + 1)}`,
};

const getKeyString = type => keyString[type];

const renderNode = (data, depth) => {
  const nodeString = _.flatten(data.map(node => getKeyString(node.type)(node, depth + 1, renderNode))).join('\n');

  return `{\n${nodeString}\n${getTab(depth)}}`;
};

export default ast => renderNode(ast, 0);
