export default function button(params) {
  var el = document.createElement('button')
  el.innerHTML = params.text
  el.addEventListener('click', params.click, false)
  return el
}

