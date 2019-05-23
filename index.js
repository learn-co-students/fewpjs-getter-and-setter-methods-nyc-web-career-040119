// Add your Circle class here
const pi = Math.PI

class Circle{
  constructor(radius){
    this.radius = radius
  }

  get diameter(){
    return this.radius * 2
  }

  get circumference(){
    return pi * this.diameter
  }

  get area(){
    return pi * Math.pow(this.radius, 2)
  }

  set diameter(value){
    this.radius = value / 2;
  }

  set circumference(value){
    this.diameter = value / pi
  }

}
