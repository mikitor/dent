const merge = require('webpack-merge');
const path = require('path');
const common = require('./webpack.common');

module.exports = merge(common, {
  mode: 'development',
  devtool: 'inline-source-map',
  devServer: {
    contentBase: path.join(__dirname, 'public'),
    compress: true,
    port: 8000,
    historyApiFallback: true
  },
  module: {
    rules: [
      {
        test: /\.s?css$/,
        use: [
          'style-loader', // creates style nodes from JS strings
          {
            loader: 'css-loader',
            options: {
              sourceMap: true
            }
          }, // translates CSS into CommonJS
          {
            loader: 'sass-loader',
            options: {
              sourceMap: true
            }
          } // compiles Sass to CSS, using Node Sass by default
        ]
      }
    ]
  }
});
