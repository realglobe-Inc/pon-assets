'use strict'

const claydbAssets = require('claydb-assets')
const co = require('co')

co(function * () {
  // Generate favicon for an example project
  {
    const type = 'core'
    const filename = 'doc/images/my-core-01-favicon.svg'
    yield claydbAssets.favicon(type, filename, {
      // Render config
      name: 'my-core-01',
      color: '#38A'
    })
  }
}).catch((err) => console.error(err))
