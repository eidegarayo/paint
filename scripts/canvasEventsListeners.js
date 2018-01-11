const canvasEventsListeners = (canvas) => {
  canvas.addEventListener('pointerdown', startDraw)
  canvas.addEventListener('pointermove', draw)
  canvas.addEventListener('pointerout', stopDraw)
  canvas.addEventListener('pointerup', stopDraw)
  canvas.addEventListener('mousedown', startDraw)
  canvas.addEventListener('mousemove', draw)
  canvas.addEventListener('mouseup', stopDraw)
  canvas.addEventListener('touchstart', startDraw)
  canvas.addEventListener('touchmove', draw)
  canvas.addEventListener('touchend', stopDraw)
}
