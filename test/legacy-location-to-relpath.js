const legLocRelPath = require('../lib/legacy-location-to-relpath.js')
const t = require('tap')
t.equal(legLocRelPath('/'), '')
t.equal(legLocRelPath('/foo'), 'node_modules/foo')
t.equal(legLocRelPath('/@foo/bar/baz'), 'node_modules/@foo/bar/node_modules/baz')
