let path = require('path')
let arc = require('@architect/functions')
let browserify = require('browserify')
let cache = false

function route(req, res) {
  if (cache) {
    res({
      js: cache
    })
  }
  else {
    // compiles ./main.js entry file
    let b = browserify()
    let p = path.join(__dirname, 'main.js') 
    b.add(p)
      .on('error', function _err(err) {
        res(err)
      })
      .on('bundle', function _bundle(js) {
        var finalJs = ''
        js.on('data', function _jsData(chunk) {
          finalJs += chunk
        }).on('error', function _jsErr(err) {
          res(err)
        }).on('end', function _jsEnd() {
          cache = finalJs
          res({js:finalJs})
        })
      })
      .plugin('tinyify')
      .bundle()
  }
}

exports.handler = arc.js.get(route)
