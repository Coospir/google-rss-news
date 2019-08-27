const Parser = require('rss-parser')
const parser = new Parser()
let arr = []


module.exports.parse = function(url) {
  parser.parseURL(url, function(err, data) {
    data.items.forEach(function(item) {
        arr.push(item.title)
    })
  })
  return arr
}
