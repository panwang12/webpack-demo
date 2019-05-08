const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');
var ManifestPlugin = require('webpack-manifest-plugin');
const webpack = require('webpack');
module.exports = {
  entry: {main:'./src/index.js'},
  output: {
    filename: '[name].[hash].index.js',
    path: path.resolve(__dirname, 'dist')
  },
//   devtool: 'inline-source-map',
  devServer: {
    contentBase: './dist',
    publicPath: '',
    hot: true
  },
  mode: 'production',
  // optimization: {
  //   usedExports: true
  // },
  module:{
    rules:[
        {
            test: /\.css$/,
            use: [
              'style-loader',
              'css-loader'
            ]
        },  
        {
            test: /\.html$/,
            use: [
                'html-loader'
            ]
        }, 
        {
            test: /\.(png|svg|jpg|gif)$/,
            use: [
                'file-loader'
            ]
        },
        {
            test: /\.(woff|woff2|eot|ttf|otf)$/,
            use: [
              'file-loader'
            ]
        },
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      title: 'test',
      filename: 'index.html',
      template: './src/index.html'
    }
    ),
    new CleanWebpackPlugin(),
    new ManifestPlugin(),
    new webpack.HotModuleReplacementPlugin(),
  ]

};