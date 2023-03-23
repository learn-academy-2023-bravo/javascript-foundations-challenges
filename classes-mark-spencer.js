

// class Coffee {
//     constructor(type, cream, sugar) {
//       this.type = type.toLowerCase()
//       this.cream = cream
//       this.sugar = sugar
//     }
  
//     coffeeProfile() {
//       return `A ${this.type} coffee with ${this.creams()}, ${this.sugars()}`
//     }
  
//     creams() {
//       if (this.cream > 1) {
//         return `${this.cream} creams`
//       } else {
//         return `${this.cream} cream`
//       }
//     }
  
//     sugars() {
//       if (this.sugar > 1) {
//         return `${this.sugar} sugars`
//       } else {
//         return `${this.sugar} sugar`
//       }
//     }
//   }

//   // Coffee marker: copy the given Coffee class into a text editor
// // Write the code that makes a black coffee object

// let blackCoffee = new Coffee ("black", "no", "no")
// // console.log(blackCoffee)
// // Write the code that outputs the black coffee's profile
// // console.log(blackCoffee.coffeeProfile())
// // Write the code that makes a coffee object with 1 cream and 2 sugars
// let lightCoffee = new Coffee ("regular", "1", "2")
// console.log(lightCoffee)
// // Write the code that outputs the 1 cream and 2 sugars coffee profile
// // console.log(lightCoffee.coffeeProfile())

// // Latte Maker: create a class for Latte

// class Latte {
//     constructor (flavor, milk, number){
//         this.flavor = flavor.toLowerCase(),
//         this.milk = milk.toLowerCase(),
//         this.number = number;
//     } 
//     latteProfile() {
//         return `A ${this.flavor} latte with ${this.milk}, and with ${this.number} shot.`}
// }
// // Write a Latte class that takes a flavor, a milk type, and a number of shots

// // Write a method for your Latte class that outputs the latte's profile

// // Write the code that makes a regular, single shot latte

// let singleShot = new Latte ("regular", "whole milk", 1 )
// console.log(singleShot)

// // Log the regular, single shot latte's profile
// console.log(singleShot.latteProfile())
// // Write the code that makes a double shot, hazelnut latte with almond milk.
// let hazelLatte = new Latte ("hazelnut", "almond milk", 2 )
// console.log(hazelLatte.latteProfile())
// // Log the double shot, hazelnut latte with almond milk's profile.

// Volume of a Cylinder: create a class for Cylinder

class Cylinder {
    constructor (radius, height) {
        this.radius = radius,
        this.height = height,
        this.pi = 3.141592;
    } 
    volumeCylinder() {
        return (this.pi * this.radius * 2 * this.height)
    }
}
let volume = new Cylinder (5, 4)

// Write a class that calculates the volume of a Cylinder: v = πr2h (r is the radius and h is the height of the cylinder)


// Write the code that rounds the volume of the cylinder to four decimal places

// Write the code that creates three unique cylinder objects

let volume1 = new Cylinder (543.543543, 34.43)
let volume2 = new Cylinder (767, 4)
let volume3 = new Cylinder (324.543, 9468.544)
console.log(volume.volumeCylinder().toFixed(4))
console.log(volume1.volumeCylinder().toFixed(4))
console.log(volume2.volumeCylinder().toFixed(4))
console.log(volume3.volumeCylinder().toFixed(4))