export default function card(params) {
  // body
  // title
  let noop = x=> !x
  let el = document.createElement('div')
  el.innerHTML = `
<div class="mdc-card">
  <div class="mdc-card__media mdc-card__media--square">
    <div class="mdc-card__media-content">${params.title || ''}</div>
  </div>
  ${params.body || ''}
  <div class="mdc-card__actions">
    <div class="mdc-card__action-buttons">
      <button class="mdc-button mdc-card__action mdc-card__action--button">Action 1</button>
      <button class="mdc-button mdc-card__action mdc-card__action--button">Action 2</button>
    </div>
    <div class="mdc-card__action-icons">
      <i class="material-icons mdc-card__action mdc-card__action--icon" tabindex="0" role="button" title="Share">share</i>
      <i class="material-icons mdc-card__action mdc-card__action--icon" tabindex="0" role="button" title="More options">more_vert</i>
    </div>
  </div>
</div>
`
  el.addEventListener('click', params.click || noop, false)
  return el
}

