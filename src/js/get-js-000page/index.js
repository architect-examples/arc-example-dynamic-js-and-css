let arc = require('@architect/functions')
let fs = require('fs')
let path = require('path')
let exists = require('path-exists')

function route(req, res) {
  let page = path.join(__dirname, req.params.page)
  if (exists(page)) {
    res({
      js: fs.readFileSync(page).toString()
    })
  }
  else {
    res({
      status: 404,
      js: `console.log('not found')`
    })
  }
}

exports.handler = arc.js.get(route)
