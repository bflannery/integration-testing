let defaults = require('./wdio.conf.js').config
let _ = require('lodash')

let overrides = {
	baseUrl: 'https://portal-www.dev.union.union-pos.net/'
}

exports.config = _.defaultsDeep(overrides, defaults)