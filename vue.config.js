module.exports = {
  publicPath: process.env.NODE_ENV === 'production' ? './' : '/',
  outputDir: 'docs',
  pages: {
    index: {
      entry: 'src/main.js',
      template: 'public/index.html',
      title: 'Portfolio | paper hsiao',
    },
  },
};
