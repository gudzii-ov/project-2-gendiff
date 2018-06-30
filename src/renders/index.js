import recursiveRender from './recursive';

const formats = {
  recursive: recursiveRender,
};

export default (format) => {
  const parser = formats[format];
  if (!parser) {
    throw new Error(`unkown format: ${format}`);
  }
  return parser;
};
