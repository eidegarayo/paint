const canvasContainer = document.getElementById('canvas-container')
const myCanvas = new DefaultCanvas(600, 400, 'canvas-paint', '#000000', 5)
const canvas = myCanvas.createCanvas()
const context = myCanvas.createContext(canvas)
canvasContainer.appendChild(canvas)

canvasEventsListeners(canvas)
toolsEventsListeners(context)
