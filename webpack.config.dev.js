const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const webpack = require('webpack');

console.log('Loading the Webpack Dev Config');

module.exports = {
  devtool: 'cheap-module-inline-source-map',
  entry: [
    path.join(__dirname, 'client'),
    'webpack-hot-middleware/client?reload=true'
  ],
  output: {
    path: '/',
    publicPath: '/',
    filename: 'bundle.js'
  },
  module: {
    loaders: [
      {
        test: /\.scss$/,
        loader: 'style!css!sass'
      },
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        loader: 'babel'
      },
      {
        test: /\.(jpg|png)$/,
        loader: 'url?limit=25000',
        include: path.join(__dirname, 'assets')
      }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './client/index.html'
    }),
    // Assign the module and chunk ids by occurrence count.
    // Ids that are used often get lower (shorter) ids.
    // This make ids predictable, reduces to total file size and is recommended.
    new webpack.optimize.OccurrenceOrderPlugin(),
    new webpack.DefinePlugin({
      'process.env.NODE_ENV': JSON.stringify('development')
    }),
    // For HMR
    new webpack.HotModuleReplacementPlugin(),
    // Don't crash Webpack on errors
    new webpack.NoErrorsPlugin()
  ]
};