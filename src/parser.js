import yaml from 'js-yaml';
import ini from 'ini';

const yamlParser = {
  parse: yaml.safeLoad,
};

const configActions = {
  json: {
    parse: JSON.parse,
  },
  yaml: yamlParser,
  yml: yamlParser,
  ini: {
    parse: ini.parse,
  },
};

export default (format) => {
  const parser = configActions[format];
  if (!parser) {
    throw new Error(`unkown format: ${format}`);
  }
  return parser;
};
