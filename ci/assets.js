#!/usr/bin/env node

/**
 * Generate asset files
 */
'use strict'

process.chdir(`${__dirname}/..`)

const apeTasking = require('ape-tasking')
const co = require('co')
const { banner, favicon } = require('../lib')

const assetDir = `${__dirname}/../assets`

apeTasking.runTasks('asset', [
  () => co(function * () {
    let banners = {
      'images/pon-banner.png': [ 'pon', {} ],
      'images/pon-logger-banner.png': [ 'core', { name: 'Pon-Logger' } ],
      'images/pon-cli-banner.png': [ 'core', { name: 'Pon-CLI' } ],
      'images/ponfile-banner.png': [ 'core', { name: 'Ponfile' } ],
      'images/pon-timer-banner.png': [ 'core', { name: 'Pon-Timer' } ],
      'images/pon-scaffold-banner.png': [ 'core', { name: 'Pon-Scaffold' } ],
      'images/pon-context-banner.png': [ 'core', { name: 'Pon-Context' } ],
      'images/pon-reader-banner.png': [ 'core', { name: 'Pon-Reader' } ],
      'images/pon-writer-banner.png': [ 'core', { name: 'Pon-Writer' } ],
      'images/pon-watcher-banner.png': [ 'core', { name: 'Pon-Watcher' } ]
    }
    for (let filename of Object.keys(banners)) {
      let [ type, config ] = banners[ filename ]
      yield banner(type, `${assetDir}/${filename}`, config)
    }
  }),
  () => co(function * () {
    let favicons = {
      'images/pon-favicon.png': [ 'pon', {} ]
    }
    for (let filename of Object.keys(favicons)) {
      let [ type, config ] = favicons[ filename ]
      yield favicon(type, `${assetDir}/${filename}`, config)
    }
  })
], true)
