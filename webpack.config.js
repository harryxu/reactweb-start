const path = require('path')
const webpack = require('webpack')

const __ENV__ = process.env.NODE_ENV || 'development'
const __DEV__ = __ENV__ === 'development'
const __TEST__ = __ENV__ === 'test'
const __PROD__ = __ENV__ === 'production'

// config
const publicPath = path.resolve(__dirname, 'public')

const config = {
  entry: {
    index: './src/index.js'
  },
  devtool: __DEV__ ? 'source-map' : false,
  output: {
    filename: 'js/[name].bundle.js',
    path: publicPath
  },
  module: {
    rules: []
  },
  plugins: [
    new webpack.DefinePlugin({
      'process.env.NODE_ENV': JSON.stringify(__ENV__)
    })
  ]
}

config.module.rules.push({
  test: /\.jsx?$/,
  use: 'babel-loader',
  exclude: [/node_modules/]
})

if (__PROD__) {
  config.plugins.push(new webpack.optimize.UglifyJsPlugin({
    compress: {
      warnings: false,
      drop_console: true
    }
  }))
}

if (__DEV__) {
  config.devServer = {
    contentBase: './public',
    port: 9008,
    historyApiFallback: true
  }
}

module.exports = config
