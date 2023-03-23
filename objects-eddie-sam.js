// Consider this variable:

const person = {
  firstName: "Arthur",
  lastName: "Dent",
  homePlanet: "Earth",
  statement: function () {
    return `${this.firstName} ${this.lastName} is from planet ${this.homePlanet}`
  }
}

// Write the code that accesses the first name of the person object.
// Process:
// Use dot notation to call on the key firstName from the function named person
console.log(person.firstName)

// Write the code that accesses the last name of the person object.
// Process:
// Use dot notation to call on the key lastName from the function named person
console.log(person.lastName)

// Write the code that gives the person object a property of homePlanet and set it to 'Earth'.
// Modify the object to add another key named homePlanet
// Have the value of the new key set to 'Earth'.
console.log(person.homePlanet)

// Update the person object with a method that logs "Arthur Dent is from planet Earth".
// Process:
// Modify the object and add the string interpolation method to output the desired statement.
console.log(person.statement())


// Consider this variable:

const product = {
  name: "chair",
  price: 24.99
}

// Write a function called describeProduct that takes the product object as an argument and logs "The product is a chair. It costs $24.99".
// Process:
// Create a function called describeProduct that takes the prodect object and returns the statement: "The product is a chair. It costs $24.99".

const describeProduct = (thisProduct) => {
    return `The product is a ${thisProduct.name}. It costs $${thisProduct.price}`
}

console.log(describeProduct(product))


// Write a function called totalWithTax that takes the product object as an argument and returns the total price of the chair that includes a 7% sales tax rounded to two decimals.
// Process:
// Create a function called totalWithTax that takes the object product as an argument, and returns the price with an added 7% tax, rounded
// We can use mathematical functions to add the tax (24.99 * 1.07), then round to two decimals with Math.round().

const totalWithTax = (finalPrice) => {
    return Math.round(finalPrice.price * 1.07 * 100)/100
}

console.log(totalWithTax(product))


// Consider this variable:

const lunch = {
  name: "PB and Banana",
  type: "sandwich",
  ingredients: ["bread", "peanut butter", "banana"],
  lunchStatement: function () {
    return `The ingredients for a ${this.name} ${this.type} are ${this.ingredients[0]}, ${this.ingredients[1]}, and ${this.ingredients[2]}.`
  }
}

// Write the code that accesses the ingredients property.
// Use dot notation to call on the ingredients key.
console.log(lunch.ingredients)

// Write the code that access the third ingredient of the lunch object.
// Use the array index and dot notation to call on the ingredients key.
console.log(lunch.ingredients[2])

// Write a function that takes the lunch object as an argument and returns "The ingredients for a PB and Banana sandwich are bread, peanut butter, and banana."
// Create a function called ingredientStatement with an object as a parameter
// It will return the desired statement using string interpolation

const ingredientStatement = (object) => {
    return `The ingredients for a ${object.name} ${object.type} are ${object.ingredients[0]}, ${object.ingredients[1]}, and ${object.ingredients[2]}.`
}

console.log(ingredientStatement(lunch))

// Update the lunch object with method that returns "The ingredients for a PB and Banana sandwich are bread, peanut butter, and banana."
// Create a function called lunchStatement inside the object as a new key
// It will return the desired statement using string interpolation

console.log(lunch.lunchStatement())

// Consider this variable:

const animals = [
  { name: "Waffles", type: "dog", age: 7 },
  { name: "Fluffy", type: "cat", age: 14 },
  { name: "Spelunky", type: "dog", age: 4 },
  { name: "Hank", type: "cat", age: 11 }
]


// Create a function that takes in an array of animal objects and returns a new array with only the objects that are cats.
// Create a function called onlyCats that takes an array of objects as a parameter, and uses the filter method to return only the cat objects.

const onlyCats = animals.filter((value) => value.type === "cat")
console.log(onlyCats)


// Create a function that takes in an array of animal objects and returns a new array with only the names of the animals.
// Create a function that takes in an array of animal objects and returns a new array of the names of the animals that are more than 10 years old.
// Create a function that takes in an array of animal objects and returns a new array with a sentence about each animal.
// Consider this variable:

// const author = {
//   name: "H. G. Wells",
//   genre: "science fiction"
// }
// Write the code that destructures the author object so that the following code snippet will run successfully:
// console.log(`${name} is a ${genre} author`)
// // output: "H. G. Wells is a science fiction author"
// Consider this variable:

// const pokeOne = {
//   species: "Charmandar",
//   pokemon_type: "Fire"
// }

// const pokeTwo = {
//   species: "Magikarp",
//   pokemon_type: "Water"
// }
// Create a function called describePokemon that take an object like the ones above and uses destructuring to return a description of the Pokemon so that the following code snippet will run successfully:
// console.log(describePokemon(pokeOne))
// // output: "Charmandar is a Fire pokemon"
// console.log(describePokemon(pokeTwo))
// // output: "Magikarp is a Water pokemon"
// Consider this variable:

// const triangleDimensions = {
//   base: 2,
//   height: 5
// }
// Modify the triangleDimensions object to have a method that returns the area of the triangle.
// Write the code that will update the base to be the value of 6.
// 🏔 Stretch Goals
// Consider this variable:

// const learn = {
//   cohorts: {
//     2021: ["Alpha", "Bravo", "Charlie", "Delta", "Echo"],
//     2022: ["Alpha", "Bravo", "Charlie", "Delta", "Echo", "Foxtrot", "Golf"]
//   }
// }
// Write the code that logs the name of your cohort.
// Write the code that uses destructuring to log the name of your cohort.
// Create a function that takes an object like the one above and returns an array with a string of every cohort name and year.
// // output: ["2021 Alpha", "2021 Bravo", "2021 Charlie", "2021 Delta", "2021 Echo", "2022 Alpha", "2022 Bravo", "2022 Charlie", "2022 Delta", "2022 Echo", "2022 Foxtrot", "2022 Golf"]
