import t from './test-module2.mjs'
import card from './card.mjs'
import button from './button.mjs'
import p from './paragraph.mjs'

function hello(e) {
  alert('hi')
  console.log(e)
}

document.body.appendChild(p('hello from a module'))
document.body.appendChild(button({text:'yay', click:hello}))
document.body.appendChild(card({title:'title text here', body:'body text here', click:hello}))

console.log(t())
