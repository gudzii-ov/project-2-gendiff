import yaml from 'js-yaml';
import ini from 'ini';

const configActions = [
  {
    type: 'json',
    check: arg => arg === '.json',
    parse: arg => JSON.parse(arg),
  },
  {
    type: 'yaml',
    check: arg => arg === '.yml' || arg === '.yaml',
    parse: arg => yaml.safeLoad(arg),
  },
  {
    type: 'ini',
    check: arg => arg === '.ini',
    parse: arg => ini.parse(arg),
  },
];

export default (format) => {
  const parser = configActions.find(({ check }) => check(format)).parse;
  if (!parser) {
    throw new Error(`unkown format: ${format}`);
  }
  return parser;
};
