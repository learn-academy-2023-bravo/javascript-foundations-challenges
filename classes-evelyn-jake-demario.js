// Coffee marker: copy the given Coffee class into a text editor
class Coffee {
  constructor(type, cream, sugar) {
    this.type = type.toLowerCase()
    this.cream = cream
    this.sugar = sugar
  }
  coffeeProfile() {
    return `A ${this.type} coffee with ${this.creams()}, ${this.sugars()}`
  }
  creams() {
    if (this.cream > 1) {
      return `${this.cream} creams`
    } else {
      return `${this.cream} cream`
    }
  }
  sugars() {
    if (this.sugar > 1) {
      return `${this.sugar} sugars`
    } else {
      return `${this.sugar} sugar`
    }
  }
}
// Write the code that makes a black coffee object
let blackCoffee = new Coffee ("black", 0, 0) 

// Write the code that outputs the black coffee's profile 
console.log(blackCoffee.coffeeProfile())

// Write the code that makes a coffee object with 1 cream and 2 sugars

let coffeeMod = new Coffee("", 1, 2)

// Write the code that outputs the 1 cream and 2 sugars coffee profile

console.log(coffeeMod.coffeeProfile())

// Latte Maker: create a class for Latte
class Latte {
  constructor(flavor, milk, shots) {
    this.flavor = flavor.toLowerCase()
    this.milk = milk.toLowerCase()
    this.shots = shots
  }
  latteProfile(){
    return `A ${this.flavor} latte with ${this.milk} milk and ${this.numberOfShots()}`
  }
  numberOfShots() {
    if (this.shots > 1) {
      return `${this.shots} shots`
    } 
    else {
      return `${this.shots} shot`
    }
  }
}
let latteRegular = new Latte("Regular", "White", 1)
console.log(latteRegular.latteProfile())

// Write a Latte class that takes a flavor, a  milk type, and a number of shots


// Write a method for your Latte class that outputs the latte's profile

// Write the code that makes a regular, single shot latte

// Log the regular, single shot latte's profile

// Write the code that makes a double shot, hazelnut latte with almond milk.
let almondMilk = new Latte ("hazelnut", "almond", 2)
console.log(almondMilk.latteProfile())

// Log the double shot, hazelnut latte with almond milk's profile.

// Volume of a Cylinder: create a class for Cylinder
class Cylinder {
  constructor (radius, height) {
    this.radius = radius
    this.height = height
  }
  volume() { 
    return (Math.PI * (this.radius ** 2) * this.height).toFixed(4) 
  }
}
const cylinder1 = new Cylinder (1, 10)
console.log(cylinder1.volume())

// Write a class that calculates the volume of a Cylinder: v = πr2h (r is the radius and h is the height of the cylinder)

// Write the code that rounds the volume of the cylinder to four decimal places

// Write the code that creates three unique cylinder objects
const cylinder2 = new Cylinder (10, 100)
console.log(cylinder2.volume())
const cylinder3 = new Cylinder (100, 1000)
console.log(cylinder3.volume())