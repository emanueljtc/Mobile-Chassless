const path = require('path');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = {
  entry: ['./src/js/script.js', './src/sass/styles.scss'],

  output: {
    path: path.resolve('./public'),
    filename: 'bundle.js'
  },

  module: {
    rules: [{
      test: /\.js$/,
      use: 'babel-loader'
    },

    {
      test: /\.scss$/,
      use: ExtractTextPlugin.extract({
        fallback: 'style-loader',
        use: ['css-loader', 'sass-loader']
      })
    }
    ]
  },

  plugins: [
    new ExtractTextPlugin('./public/css/styles.css')
  ]
};