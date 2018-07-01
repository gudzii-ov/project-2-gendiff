import recursiveRender from './recursive';
import plainRender from './plain';
import jsonRender from './json';

const formats = {
  recursive: recursiveRender,
  plain: plainRender,
  json: jsonRender,
};

export default (format) => {
  const render = formats[format];
  if (!render) {
    throw new Error(`unkown format: ${format}`);
  }
  return render;
};
