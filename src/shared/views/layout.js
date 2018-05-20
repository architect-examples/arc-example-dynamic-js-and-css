module.exports = function layout(params) {
  // required: 
  // - params._url
  // - params.body
  // opional:
  // - params.title
  return `<!doctype html>
<html>
<head>
   <link rel="shortcut icon"type="image/x-icon" href="data:image/x-icon;,">
  <title>${params.title || 'dynastatics demos'}</title>
  <link rel=stylesheet href=${params._url('/css/index.css')}>
</head>
<body>
${params.body}
<script src=${params._url('/js/index.js')}></script>
</body>
</html>
    `
}

