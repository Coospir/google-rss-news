const express = require('express')
const app = express()

let url = 'https://news.google.com/rss?hl=en-US&gl=US&ceid=US:en'
let p = require('./parser')

app.get("/", function(request, response){
  response.send(p.parse(url));
})
app.listen(3000);
