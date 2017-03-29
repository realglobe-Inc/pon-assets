
'use strict'

const { join, resolve } = require('path')
let image = (filename) => join(resolve(__dirname, '../assets/images'), filename)

/** Image paths */
exports.images = {
  ponBanner: image('pon-banner.png'),
  ponCliBanner: image('pon-cli-banner.png'),
  ponContextBanner: image('pon-context-banner.png'),
  ponFavicon: image('pon-favicon.png'),
  ponLoggerBanner: image('pon-logger-banner.png'),
  ponScaffoldBanner: image('pon-scaffold-banner.png'),
  ponTimerBanner: image('pon-timer-banner.png'),
  ponfileBanner: image('ponfile-banner.png')
}
