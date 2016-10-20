module.exports = {
  entry: [
	  'whatwg-fetch',
	  './src/index.js',
  ],

  output: {
    path: './public_html',
    publicPath: 'public_html/',
    filename: 'bundle.js'
  },

  devServer: {
	contentBase: "public_html"
  },

  resolve: {
    alias: {
      'vue$': 'vue/dist/vue.js'
    }
  },

  module: {
    loaders: [
      {
        test: /\.vue$/,
        loader: 'vue'
      },
      {
        test: /\.js$/,
        loader: 'babel',
        // make sure to exclude 3rd party code in node_modules
        exclude: /node_modules/
      },
      {
        // edit this for additional asset file types
        test: /\.(png|jpg|gif)$/,
        loader: 'url',
        query: {
          // inline files smaller then 10kb as base64 dataURL
          limit: 10000,
          // fallback to file-loader with this naming scheme
          name: '[name].[ext]?[hash]'
        }
	  },
      {
        test: /\.svg/,
        loader: 'svg-url-loader'
      }
    ]
  },
  // vue-loader config:
  // lint all JavaScript inside *.vue files with ESLint
  // make sure to adjust your .eslintrc
  vue: {
    loaders: {
      js: 'babel'
    }
  }
}
