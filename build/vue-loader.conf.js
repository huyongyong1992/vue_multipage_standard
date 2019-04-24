var utils = require('./utils')
var config = require('../config')
var isProduction = process.env.NODE_ENV === 'production'
var isDevelopment = process.env.NODE_ENV === 'development'
var isTest = process.env.NODE_ENV === 'test'
var isUat = process.env.NODE_ENV === 'uat'

module.exports = {
  loaders: utils.cssLoaders({
    sourceMap: isDevelopment
      ? config.dev.cssSourceMap
      : config.build.productionSourceMap,
    extract: (isProduction || isTest || isUat)
  }),
  postcss: [
    require('autoprefixer')({
      browsers: ['iOS >= 7', 'Android >= 4.1']
    })
  ]
}
