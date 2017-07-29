const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
module.exports = {
  entry: { index: ['./src/component/index.jsx']},
  output: {
    path: path.resolve(__dirname, 'dist'),
    publicPath: './',
    filename: '[name]-[hash].js'
  },
  devtool: 'source-map',
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: [ {
          loader: 'react-hot-loader/webpack'
        },{
          loader: 'babel-loader'
        } ]
        // the loader which should be applied, it'll be resolved relative to the context
        // -loader suffix is no longer optional in webpack2 for clarity reasons
        // see webpack 1 upgrade guide

      }
    ]
  },
 resolve:{
    extensions: [".js", ".json", ".jsx", ".css", ".gif"],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './src/template/index.html'
    }),
    new webpack.HotModuleReplacementPlugin()
  ]
}
