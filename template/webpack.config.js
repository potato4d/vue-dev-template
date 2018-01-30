const path = require('path')
const webpack = require('webpack')
const Dotenv = require('dotenv-webpack')
const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
  entry: './src/index.js',
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'static')
  },
  module: {
    rules: [
      {
        test: /\.vue$/,
        loader: 'vue-loader',
        options: {
          loaders: {
            js: 'babel-loader',
            css: ['vue-style-loader', 'css-loader'],
          },
        }
      },
      {
        test: /\.css$/,
        loader: 'style-loader!css-loader'
      },
      {
        test: /\.js$/,
        loader: 'babel-loader',
        exclude: /node_modules/
      }
    ]
  },
  resolve: {
    alias: {
      vue: 'vue/dist/vue.esm.js',
      '@': path.resolve(__dirname, 'src/'),
    }
  },
  devServer: {
    contentBase: path.resolve(__dirname, 'static'),
    publicPath: '/',
    historyApiFallback: true,
    open: true
  },
  plugins: [
    new Dotenv({ path: './.env', safe: true }),
    new HtmlWebpackPlugin({
      filename: 'index.html', template: 'index.html', inject: true
    })
  ]
}
