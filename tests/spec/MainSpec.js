/* global describe beforeEach it expect jasmine */
describe('Paint App', () => {
  const canvasContainer = document.createElement('div')
  canvasContainer.id = 'canvas-container'
  document.getElementById = jasmine.createSpy('HTML Element').and.returnValue(canvasContainer)

  const mousedown = document.createEvent('MouseEvents')
  mousedown.initMouseEvent('mousedown', true, true, window)
  const mousemove = document.createEvent('MouseEvents')
  mousemove.initMouseEvent('mousemove', true, true, window)
  const mouseout = document.createEvent('MouseEvents')
  mouseout.initMouseEvent('mouseout', true, true, window)

  describe('function startDraw', () => {
    beforeEach(() => {
      let drawing = false
    })

    it('should change drawing to true', () => {
      startDraw(mousedown)
      expect(drawing).toBe(true)
    })

    it('should set mouse positionX and positionY', () => {
      startDraw(mousedown)
      expect(positionX).toBeDefined()
      expect(positionY).toBeDefined()
    })

    it('positionX and positionY should be numbers', () => {
      startDraw(mousedown)
      expect(typeof positionX).toBe('number')
      expect(typeof positionY).toBe('number')
    })
  })

  describe('function draw', () => {
    beforeEach(() => {
      let positionY, positionX
    })

    it('should return false if drawing is false', () => {
      stopDraw()
      expect(draw(mousemove)).toBe(false)
    })

    it('should set mouse positionX and positionY if drawing is true', () => {
      startDraw(mousedown)
      draw(mousemove)
      expect(positionX).toBeDefined()
      expect(positionY).toBeDefined()
    })

    it('positionX and positionY should be numbers', () => {
      startDraw(mousedown)
      draw(mousemove)
      expect(typeof positionX).toBe('number')
      expect(typeof positionY).toBe('number')
    })
  })

  describe('function stopDraw', () => {
    beforeEach(function () {
      let drawing = true
    })

    it('should change drawing to false', () => {
      stopDraw(mouseout)
      expect(drawing).toBe(false)
    })
  })

  describe('function drawHistoryPush', () => {
    beforeEach(function () {
      let step = 0
      let drawHistory = [1]
    })
    it('should add one step', () => {
      step = 0
      drawHistoryPush()
      expect(step).toBe(1)
    })

    it('should add one draw to the drawHistory array', () => {
      drawHistory.length = 1
      drawHistoryPush()
      expect(drawHistory.length).toBe(2)
    })
  })

  describe('function getUndo', () => {
    beforeEach(function () {
      let step = 0
      let drawHistory = [1]
    })
    it('should subtract one step if step value is more than 0', () => {
      step = 0
      getUndo()
      expect(step).toBe(0)
      step = 5
      getUndo()
      expect(step).toBe(4)
    })
  })

  describe('function getRedo', () => {
    beforeEach(function(){
      let step = 0
      let drawHistory = [1]
    })
    it('should add one step until the last draw', () => {
      step = 3
      drawHistory.length = 5
      getRedo()
      expect(step).toBe(4)
      step = 4
      drawHistory.length = 5
      getRedo()
      expect(step).toBe(4)
    })
  })
})
