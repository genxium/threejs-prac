const baseAbsPath = __dirname + '/';

const webModuleAbsPath = baseAbsPath + '../node_modules';

const commonConfig = {
  resolve: {
    root: [
      webModuleAbsPath
    ]
  },
  resolveLoader: {
    root: webModuleAbsPath // This helps to resolve loader names, e.g. 'babel-loader'
  },
  entry: {
    demo: baseAbsPath + '../libs/index.js',
    vendor: ['three']
  },
  module: {
    loaders: [
      {
        test: /\.css$/,
        exclude: /\.useable\.css$/,
        loader: 'style-loader!css-loader'
      },
      {
        test: /\.useable\.css$/,
        loader: 'style-loader/useable!css-loader'
      },
      {
        test: /\.scss$/,
        loader: 'style!css!sass'
      },
      {
        test: /\.less$/,
        loader: 'style-loader!css-loader!less-loader',
      },
      {
        test: /\.png$/,
        loader: "url-loader?limit=100000"
      },
      {
        test: /\.jpg$/,
        loader: "file-loader"
      },
      {
        test: /\.(woff|woff2)(\?v=\d+\.\d+\.\d+)?$/,
        loader: 'url?limit=10000&mimetype=application/font-woff'
      },
      {
        test: /\.ttf(\?v=\d+\.\d+\.\d+)?$/,
        loader: 'url?limit=10000&mimetype=application/octet-stream'
      },
      {
        test: /\.eot(\?v=\d+\.\d+\.\d+)?$/,
        loader: 'file'
      },
      {
        test: /\.svg(\?v=\d+\.\d+\.\d+)?$/,
        loader: 'url?limit=10000&mimetype=image/svg+xml'
      },
      {
        test: /\.json$/,
        loader: 'json-loader'
      }
    ]
  },
  output: {
    path: baseAbsPath + '../dist',
    filename: '[name].bundle.js',
    chunkFilename: '[name].bundle.js',
    sourceMapFilename: '[file].map'
  }
};

exports.default = commonConfig;
