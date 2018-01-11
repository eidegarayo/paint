class DefaultCanvas {
  constructor (width, height, id, color, lineWidth) {
    this.width = width || 600
    this.height = height || 400
    this.id = id
    this.color = color || '#000000'
    this.lineWidth = lineWidth || 5
  }
  createCanvas () {
    const canvas = document.createElement('canvas')
    canvas.width = this.width
    canvas.height = this.height
    canvas.id = this.id
    return canvas
  }
  createContext (canvas) {
    const context = canvas.getContext('2d')
    context.lineCap = 'round'
    context.lineJoin = 'round'
    context.strokeStyle = this.color
    context.lineWidth = this.lineWidth
    return context
  }
}
