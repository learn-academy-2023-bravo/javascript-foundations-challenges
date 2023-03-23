class Coffee {
  constructor(type, cream, sugar) {
    this.type = type.toLowerCase();
    this.cream = cream;
    this.sugar = sugar;
  }

  coffeeProfile() {
    return `A ${this.type} coffee with ${this.creams()}, ${this.sugars()}`;
  }

  creams() {
    if (this.cream > 1) {
      return `${this.cream} creams`;
    } else {
      return `${this.cream} cream`;
    }
  }

  sugars() {
    if (this.sugar > 1) {
      return `${this.sugar} sugars`;
    } else {
      return `${this.sugar} sugar`;
    }
  }
}

//Coffee marker: copy the given Coffee class into a text editor
// Write the code that makes a black coffee object
const blackCoffee = new Coffee("black", 1, 2);

// Write the code that outputs the black coffee's profile
console.log(blackCoffee.coffeeProfile());

// Write the code that makes a coffee object with 1 cream and 2 sugars

// Write the code that outputs the 1 cream and 2 sugars coffee profile

// Latte Maker: create a class for Latte

// Write a Latte class that takes a flavor, a milk type, and a number of shots
class Latte {
  constructor(flavor, milkType, numOfShots) {
    this.flavor = flavor;
    this.milkType = milkType;
    this.numOfShots = numOfShots;
  }
  latteProfile() {
    return `A ${this.flavor} latte with ${this.milkType} and ${this.numOfShots} shot(s)`;
  }
}

// Write a method for your Latte class that outputs the latte's profile
// Write the code that makes a regular, single shot latte
const myLatte = new Latte("regular", "milk", 1);

// Log the regular, single shot latte's profile
console.log(myLatte.latteProfile());

// Write the code that makes a double shot, hazelnut latte with almond milk.
const myLatte2 = new Latte("hazelnut", "almond milk", 2);

// Log the double shot, hazelnut latte with almond milk's profile.
console.log(myLatte2.latteProfile());

// Volume of a Cylinder: create a class for Cylinder
class Cylinder {
  constructor(radius, height) {
    this.radius = radius;
    this.height = height;
  }
  volume() {
    return (Math.PI * this.radius ** 2 * this.height).toFixed(4);
  }
}

// Write a class that calculates the volume of a Cylinder: v = πr2h (r is the radius and h is the height of the cylinder)

// Write the code that rounds the volume of the cylinder to four decimal places

// Write the code that creates three unique cylinder objects
const c1 = new Cylinder(5, 10);
const c2 = new Cylinder(15, 20);
const c3 = new Cylinder(30, 50);
console.log(c1.volume());
console.log(c2.volume());
console.log(c3.volume());
