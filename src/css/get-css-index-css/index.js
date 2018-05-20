let arc = require('@architect/functions')
let mitten = require('cssmitten')
let config = require('cssmitten/config')
let cached = mitten(JSON.stringify(config))

function route(req, res) {
  res({
    css: cached
  })
}

exports.handler = arc.css.get(route)
