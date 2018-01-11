const lineWeightInput = document.getElementById('line-weight')
const colorInput = document.getElementById('tool-color')
const undoBtn = document.getElementById('undo')
const redoBtn = document.getElementById('redo')

const toolsEventsListeners = () => {
  lineWeightInput.addEventListener('change', getLineWeight)
  colorInput.addEventListener('change', getColor)
  undoBtn.addEventListener('click', getUndo)
  redoBtn.addEventListener('click', getRedo)
}

function getLineWeight () {
  context.lineWidth = this.value
  const lineDraw = document.getElementById('line-draw')
  lineDraw.style.borderBottom = this.value + 'px solid #000000'
}

function getColor () {
  context.strokeStyle = this.value
}
