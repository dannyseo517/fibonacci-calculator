const merge = require('webpack-merge');
const common = require('./webpack.config.js');

const TerserPlugin = require('terser-webpack-plugin');
const CompressionPlugin = require('compression-webpack-plugin');

module.exports = merge(common, {
  mode: 'production',
  optimization: {
    minimizer: [
      new TerserPlugin({
        test: /\.js(\?.*)?$/i,
        parallel: true,
        sourceMap: true,
      })
    ]
  },
  plugins: [
    new CompressionPlugin({
      test: /\.(html|css|js)(\?.*)?$/i
    }),
  ]
});