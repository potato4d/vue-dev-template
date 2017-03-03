const webpack = require("webpack");
const path = require("path");
const Dotenv = require('dotenv-webpack');

module.exports = {
  entry: "./src/index.js",
  output: {
    filename: "bundle.js",
    path: path.resolve(__dirname, "public_html")
  },
  devServer: {
    contentBase: path.resolve(__dirname, "public_html"),
    publicPath: '/',
    historyApiFallback: true,
    open: true
  },
  module: {
    rules: [
      {
        test: /\.vue$/,
        loader: "vue-loader",
        options: {
          loaders: {}
        }
      },
      {
        test: /\.js$/,
        loader: "babel-loader",
        exclude: /node_modules/
      }
    ]
  },
  resolve: {
    alias: {
      "vue$": "vue/dist/vue.js"
    }
  },
  plugins: [
    new Dotenv({
      path: "./.env",
      safe: true
    })
  ]
}
