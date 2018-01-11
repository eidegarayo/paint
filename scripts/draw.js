let drawing = false
let step = 0
let positionX, positionY
const drawHistory = [whiteCanvasImage]

function startDraw (event) {
  event.preventDefault()
  drawing = true
  positionX = event.offsetX
  positionY = event.offsetY
}

function draw (event) {
  event.preventDefault()
  if (!drawing) return false
  context.beginPath()
  context.moveTo(positionX, positionY)
  context.lineTo(event.offsetX, event.offsetY)
  context.stroke()
  positionX = event.offsetX
  positionY = event.offsetY
  return true
}

function stopDraw () {
  drawHistory.length = step + 1
  if (drawing) drawHistoryPush()
  drawing = false
}

function drawHistoryPush () {
  step++
  const dataURL = canvas.toDataURL()
  drawHistory.push(dataURL)
}

function getUndo () {
  if (step > 0) {
    step--
    reDraw()
  }
}

function getRedo () {
  if (step < drawHistory.length - 1) {
    step++
    reDraw()
  }
}

function reDraw () {
  let lastDrawStep = new Image()
  lastDrawStep.onload = function () {
    context.clearRect(0, 0, canvas.width, canvas.height)
    context.drawImage(lastDrawStep, 0, 0)
  }
  lastDrawStep.src = drawHistory[step]
}
