// @flow
'use strict'

const path = require('path')

const webpack = require('webpack')
const CleanWebpackPlugin = require('clean-webpack-plugin')

const pkg = require('./package.json')
const banner = `/*
* ${pkg.name}: v${pkg.version} | ${pkg.homepage}
* (c) ${new Date(Date.now()).getFullYear()} BlinkMobile | Released under the ${pkg.license} license
*/
`

let distPath = path.resolve(__dirname, 'dist')

module.exports = {
  entry: {
    'angular-bm-uploader': './src/angular-bm-uploader.js',
    'angular-bm-uploader.min': './src/angular-bm-uploader.js'
  },
  output: {
    filename: '[name].js',
    path: distPath,
    library: 'bmUploader',
    libraryTarget: 'umd'
  },
  devtool: 'inline-source-map',
  plugins: [
    new CleanWebpackPlugin([distPath]),
    new webpack.optimize.UglifyJsPlugin({
      include: /\.min\.js$/,
      minimize: true
    }),
    new webpack.BannerPlugin({
      banner: banner,
      raw: true
    })
  ],
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /(node_modules|bower_components)/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['es2015', 'env'],
            plugins: [['angularjs-annotate', { 'explicitOnly': true }]]
          }
        }
      },
      {
        test: /\.html$/,
        use: {
          loader: 'html-loader'
        }
      }
    ]
  }
}
