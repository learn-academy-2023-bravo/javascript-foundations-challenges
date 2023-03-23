// Coffee marker: copy the given Coffee class into a text editor
// Write the code that makes a black coffee object
// Write the code that outputs the black coffee's profile
// Write the code that makes a coffee object with 1 cream and 2 sugars
// Write the code that outputs the 1 cream and 2 sugars coffee profile

// class Coffee {
//    constructor(type, cream, sugar) {
//      this.type = type.toLowerCase()
//      this.cream = cream
//      this.sugar = sugar
//    }

//    coffeeProfile() {
//     return `A ${this.type} coffee with ${this.creams()}, ${this.sugars()}`
//    }
   
//    creams() {
//      if (this.cream > 1) {
//        return `${this.cream} creams`
//      } else {
//        return `${this.cream} cream`
//      }
//    }

//    sugars() {
//      if (this.sugar > 1) {
//        return `${this.sugar} sugars`
//     } else {
//        return `${this.sugar} sugar`
//      }
//    }
//  }

//  const blackCoffee = new Coffee("black","1","2")
//  console.log(blackCoffee.coffeeProfile())


 // Latte Maker: create a class for Latte
// class Latte {}

// Write a Latte class that takes a flavor, a milk type, and a number of shots
class Latte {
    constructor (flavor, milk, shot){
        this.flavor = flavor
        this.milk = milk
        this.shot = shot
    }
    latteProfile() {
        return `A ${this.flavor} latte with ${this.milk} and ${this.shots()}`
       }
    
    shots() {
    if (this.shot > 1) {
        return `${this.shot} shots`
    } else {
        return `${this.shot} shot`
    }
    }
}

// Write a method for your Latte class that outputs the latte's profile

// Write the code that makes a regular, single shot latte
const regularLatte = new Latte("regular","milk","1")

console.log(regularLatte.latteProfile())

// Log the regular, single shot latte's profile
// console.log(regularLatte.latteProfile())


// // Write the code that makes a double shot, hazelnut latte with almond milk.
// const hazulnutLatte = new Latte("hazelnut","almond","2")
// console.log(hazulnutLatte)
// // Log the double shot, hazelnut latte with almond milk's profile.
// console.log(hazulnutLatte.latteProfile())
// // Volume of a Cylinder: create a class for Cylinder
// Write a class that calculates the volume of a Cylinder: v = πr2h (r is the radius and h is the height of the cylinder)
// Write the code that rounds the volume of the cylinder to four decimal places
// Write the code that creates three unique cylinder objects
