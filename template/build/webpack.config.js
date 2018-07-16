const path = require('path')
const webpack = require('webpack')

const VueLoaderPlugin = require('vue-loader/lib/plugin')
const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
  entry: path.resolve(__dirname, '../src/index.js'),
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, '../static')
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
      '@': path.resolve(__dirname, '../src/'),
      '~': path.resolve(__dirname, '../src/'),
    }
  },
  serve: {
    content: path.resolve(__dirname, '../static'),
    historyApiFallback: true,
    port: 8080,
    open: true
  },
  plugins: [
    new VueLoaderPlugin(),
    new webpack.EnvironmentPlugin([
      'NODE_ENV',
      'API_ROOT'
    ]),
    new HtmlWebpackPlugin({
      filename: 'index.html', template: path.resolve(__dirname, '../src/index.html'), inject: true
    })
  ]
}
