import recursiveRender from './recursive';
import plainRender from './plain';

const formats = {
  recursive: recursiveRender,
  plain: plainRender,
};

export default (format) => {
  const parser = formats[format];
  if (!parser) {
    throw new Error(`unkown format: ${format}`);
  }
  return parser;
};
