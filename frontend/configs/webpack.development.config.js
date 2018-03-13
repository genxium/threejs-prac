const baseAbsPath = __dirname + '/';
const webModuleAbsPath = baseAbsPath + '../node_modules';

const commonConfig = require(baseAbsPath + './webpack_common_config').default;
const webpack = require(webModuleAbsPath + '/webpack');

const toExport = {
  devtool: 'eval',
  plugins: [
    new webpack.DefinePlugin({
      'process.env': {
        'FSERVER': JSON.stringify('true'),
        'NODE_ENV': JSON.stringify('development')
      }
    }),
    new webpack.optimize.CommonsChunkPlugin( /* chunkName= */ "vendor", /* filename= */ "vendor.bundle.js", Infinity)
  ]
};

Object.assign(toExport, commonConfig);

module.exports = toExport;
