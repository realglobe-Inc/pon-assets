/**
 * Generate favicon
 * @function favicon
 * @param {string} type - Favicon type
 * @param {string} filename - File name to generate
 * @returns {Promise}
 */
'use strict'

const co = require('co')
const path = require('path')
const { mkdirpAsync } = require('asfs')
const furHelper = require('./helpers/fur_helper')

const { PON_COLOR } = require('./constants/color_constants')
const { PON_FONT } = require('./constants/font_constants')

/** @lends favicon */
function favicon (type, filename, config = {}) {
  let preset = favicon[ type ]
  if (!preset) {
    throw new Error(`Unknown type: ${type}`)
  }
  return co(function * () {
    yield mkdirpAsync(path.dirname(filename))
    yield furHelper.favicon(filename, preset(config))
  })
}

Object.assign(favicon, {
  /**
   * Favicon settings for pon
   */
  pon () {
    return {
      text: 'P',
      shape: 'b',
      font: PON_FONT,
      color: PON_COLOR,
      size: 128,
      fontSize: 64
    }
  }

})

module.exports = favicon
