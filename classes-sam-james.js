// Coffee marker: copy the given Coffee class into a text editor
// Write the code that makes a black coffee object
// Write the code that outputs the black coffee's profile
// Write the code that makes a coffee object with 1 cream and 2 sugars
// Write the code that outputs the 1 cream and 2 sugars coffee profile
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

let blackCoffee = new Coffee("black", 0, 0)
console.log(blackCoffee.coffeeProfile());

let coffee = new Coffee("", 1, 2)
console.log(coffee.coffeeProfile());

// Latte Maker: create a class for Latte

// Write a Latte class that takes a flavor, a milk type, and a number of shots
// Write a method for your Latte class that outputs the latte's profile
class Latte {
    constructor(flavor, milkType, shots) {
      this.flavor = flavor.toLowerCase()
      this.milkType = milkType
      this.shots = shots
    }
  
    latteProfile() {
      return `A ${this.flavor} latte with ${this.milkBrand()}, ${this.shotAmount()}`
    }
  
    milkBrand() {
        return `${this.milkType} milk`
    }
  
    shotAmount() {
        return `${this.shots} shot`
    }
}




// Write the code that makes a regular, single shot latte
let regular = new Latte("regular", "", "single")

// Log the regular, single shot latte's profile
console.log(regular.latteProfile())

// Write the code that makes a double shot, hazelnut latte with almond milk.
let hazelnut = new Latte("hazelnut", "almond", "double")

// Log the double shot, hazelnut latte with almond milk's profile.
console.log(hazelnut.latteProfile());

// Volume of a Cylinder: create a class for Cylinder

// Write a class that calculates the volume of a Cylinder: v = πr2h (r is the radius and h is the height of the cylinder)
// Write the code that rounds the volume of the cylinder to four decimal places

class Cylinder {
    constructor(radius, height) {
        // this.volume = volume.toLowerCase()
        this.radius = radius
        this.height = height
    }

    calculations() {
        return (Math.PI * (Math.pow(this.radius, 2)) * this.height).toFixed(4)
    }
}

// Write the code that creates three unique cylinder objects

let testCylinder1 = new Cylinder(4, 5)
console.log(testCylinder1.calculations());

let testCylinder2 = new Cylinder(2, 4)
console.log(testCylinder2.calculations());

let testCylinder3 = new Cylinder(6, 8)
console.log(testCylinder3.calculations());