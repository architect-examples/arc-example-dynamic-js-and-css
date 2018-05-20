let arc = require('@architect/functions')
let layout = require('@architect/shared/views/layout')

function route(req, res) {
  let body = '<h1>hello world</h1><p>some body text here</p>'
  let html = layout({_url:req._url, body})
  res({html})
}

exports.handler = arc.html.get(route)
