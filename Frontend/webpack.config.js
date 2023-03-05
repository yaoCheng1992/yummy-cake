const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const webpack = require('webpack'); 
module.exports = {
  mode: 'production',
  entry: {
    index: {
      import: './src/index.js',
    }
  }
  ,
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'js/[name].bundle.js',
    publicPath: '/',
  },
  module: {
    rules: [
      { test: /\.css$/i, include: path.resolve(__dirname, 'src'), use: ["style-loader", "css-loader", "postcss-loader"] },
      {
        test: /\.js$/i, exclude: /node_modules/, use: {
          loader: 'babel-loader', options: {
            presets: ['@babel/preset-env', '@babel/preset-react'],
          },
        }
      },
      { test: /\.(jpg|jpeg|png|gif|svg)$/i, type: 'asset/resource' },
      {
        test: /\.(woff|woff2|eot|ttf|otf)$/i,
        type: 'asset/resource',
      },
    ]
  },
  plugins: [new HtmlWebpackPlugin({ template: './src/index.html' }),
 
  ],
  devServer: {
    static: 'dist',
    historyApiFallback: true,
    port: 3000
  },
};