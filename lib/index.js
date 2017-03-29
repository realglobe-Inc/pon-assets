/**
 * Assets for pon
 * @module pon-assets
 */

'use strict'

let d = (module) => module && module.default || module

module.exports = {
  get banner () { return d(require('./banner')) },
  get favicon () { return d(require('./favicon')) },
  get install () { return d(require('./install')) },
  get paths () { return d(require('./paths')) }
}
