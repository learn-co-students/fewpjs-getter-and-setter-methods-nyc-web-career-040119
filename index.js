class Circle {
  constructor(radius) {
    this.radius = radius
  }

  set diameter(radius) {
    this.radius = radius/2
  }

  get diameter() {
    return this.radius * 2
  }

  set circumference(radius) {
    this.radius = radius/2/Math.PI
  }

  get circumference() {
    return Math.PI * this.radius * 2
  }

  get area() {
    return Math.PI * this.radius * this.radius
  }

}
