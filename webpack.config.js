const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  mode: 'development',
  entry: './src/index.js',
  output: {
    filename: "main.[contenthash].js",
    path: path.resolve(__dirname, 'dist'),
  },
  plugins: [new HtmlWebpackPlugin({
    title: 'Webpack Test',
    template: './src/template.html'
  })],
  module : {
    rules: [{
      test: /\.css$/,
      use: ['style-loader','css-loader']
    }],
  }
};
