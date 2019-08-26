const express = require('express')
const app = express()
const Parser = require('rss-parser');
const parser = new Parser();
var arr = []
let url = 'https://news.google.com/rss?hl=en-US&gl=US&ceid=US:en'

app.get("/", function(request, response){
  parser.parseURL(url, function(err, feed) {
    feed.items.forEach(function(item) {
        arr.push(item.title)
      })
  })
  response.send(arr);
})
app.listen(3000);
