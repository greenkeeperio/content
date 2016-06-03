var fs = require('fs')
var path = require('path')

var _ = require('lodash')

module.exports = _(fs.readdirSync(path.join(__dirname, 'src')))

.filter(function (file) {
  return file.slice(-3) === '.md'
})

.mapKeys(function (file) {
  return _.camelCase(file.replace(/\.md$/, ''))
})

.mapValues(function (file) {
  return _.template(fs.readFileSync(path.join(__dirname, 'src', file), 'utf8'))
})

.value()
