const path = require('path');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = {
  entry: './src/js/script.js',

  output: {
    path: path.resolve('public'),
    filename: 'bundle.js',
  },
  devServer: {
    host: '0.0.0.0',
    port: 3000,
    inline: true
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        use: 'babel-loader',
      },

      {
        test: /\.scss$/,
        use: ExtractTextPlugin.extract({
          fallback: 'style-loader',
          use: ['css-loader', 'sass-loader'],
        }),
      },
    ],
  },

  plugins: [new ExtractTextPlugin('css/styles.css')],
};
