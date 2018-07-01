import recursiveRender from './recursive';
import plainRender from './plain';

const formats = {
  recursive: recursiveRender,
  plain: plainRender,
};

export default (format) => {
  const render = formats[format];
  if (!render) {
    throw new Error(`unkown format: ${format}`);
  }
  return render;
};
