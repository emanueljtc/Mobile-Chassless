const webpack = require('webpack');
module.exports = {
  entry: {
    main: './src/js/script.js',
  },
  output: {
    path: './public/js/',
    filename: 'bundle.js',
  },
  module: {
    loaders: [
      {
        test: /\.jsx?$/,
        loaders: ['babel-loader', 'eslint-loader']
      },
    ]
  },
};