const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  mode: 'development',
  entry: {
    app: './src/index.js',
  },
  devtool: 'inline-source-map',
  devServer: {
    contentBase: './dist',
  },
  output: {
    filename: '[name].[hash].js',
    path: path.resolve(__dirname, 'dist'),
    library: "Nano",
    libraryTarget: "umd"
  },
  resolve: {
    extensions: ['.js', '.jsx']
  },
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        loader: "babel-loader"
      }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      title: 'index',
      template: path.resolve(__dirname, './public/index.html'),
      filename: 'index.html',
      inject: 'head'
    }),
    new HtmlWebpackPlugin({
      title: 'Button',
      template: path.resolve(__dirname, './public/button.html'),
      filename: 'button.html',
      inject: 'head'
    }),
    new HtmlWebpackPlugin({
      title: 'Modal',
      template: path.resolve(__dirname, './public/modal.html'),
      filename: 'modal.html',
      inject: 'head'
    }),
  ]
};