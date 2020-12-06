const path = require('path');

function resolve(dir) {
  return path.join(__dirname, dir);
}

module.exports = {
  chainWebpack: (config) => {
    config.resolve.alias
      .set('@', resolve('./src'))
      .set('@test', resolve('./src/tests'))
      .set('@common', resolve('./src/common'))
      .set('@components', resolve('./src/components'))
      .set('@views', resolve('./src/views'));
  },
  outputDir: 'docs',
  pages: {
    index: {
      entry: 'src/main.js',
      template: 'public/index.html',
      title: 'Portfolio | paper hsiao',
    },
  },
};
