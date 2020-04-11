const {
  override,
  fixBabelImports,
  addLessLoader,
  addWebpackResolve,
} = require('customize-cra');
const path = require('path');

module.exports = override(
  addLessLoader({
    javascriptEnabled: true,
    modifyVars: { 'primary-color': '#188038' },
  }),
  fixBabelImports('import', {
    libraryName: 'antd',
    libraryDirectory: 'es',
    style: true,
  }),
  addWebpackResolve({
    modules: [path.resolve(__dirname, 'src'), 'node_modules'],
  })
);
