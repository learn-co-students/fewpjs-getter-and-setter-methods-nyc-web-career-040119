class Circle {
  constructor(radius){
    this.radius = radius
  }

    // getter
    get diameter(){
      return this.radius * 2
    }

    get circumference(){
      return Math.PI * this.diameter
    }

    get area(){
      return Math.PI * (this.radius * this.radius)
    }

    // setter
    set diameter(value){
      return this.radius = value / 2
    }

    set circumference(value){
      return this.radius = (value / 2) / Math.PI
    }

    set area(value){

    }
}
