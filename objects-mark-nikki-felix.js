// // Consider this variable:

// const person = {
//   firstName: "Arthur",
//   lastName: "Dent",
//   homePlanet: "Earth",
//   whereFrom: function () {
//     return `${person.firstName} ${person.lastName} is form planet ${person.homePlanet}`
//   }
// }
// // Write the code that accesses the first name of the person object.
// console.log(person.firstName)
// //output:Arthur

// // Write the code that accesses the last name of the person object.
// console.log(person.lastName)
// //output:Dent

// // Write the code that gives the person object a property of homePlanet and set it to 'Earth'.
// console.log(person.homePlanet)

// // Update the person object with a method that logs "Arthur Dent is from planet Earth".
// console.log(person.whereFrom())

// const {firstName, lastName, homePlanet, whereFrom} = person

// console.log(whereFrom())
// //output:Arthur Dent is form planet Earth
// // Consider this variable:

// const product = {
//   name: "chair",
//   price: 24.99
// }

// // Write a function called describeProduct that takes the product object as an argument and logs "The product is a chair. It costs $24.99".

// //pseudocode
// // create function called describePoint

// const describeProduct = () => {
//   return `The product is a ${product.name}. It cost ${product.price} ` 
// }
// console.log(describeProduct()) // outcome: The product is a chair. It cost 24.99 

// // Write a function called totalWithTax that takes the product object as an argument and returns the total price of the chair that includes a 7% sales tax rounded to two decimals.

// const totalWithTax = () => {
//   withTax = product.price * 1.07 
//     return `$${withTax.toFixed(2)}`
// }

// console.log(totalWithTax())
// // Consider this variable:

// const lunch = {
//   name: "PB and Banana",
//   type: "sandwich",
//   ingredients: ["bread", "peanut butter", "banana"]
// }
// // Write the code that accesses the ingredients property.

// const ingredientsCode = () => {
//   return lunch.ingredients
// }
// console.log(ingredientsCode())

// // Write the code that access the third ingredient of the lunch object.
// const ingredientCode = () => {
//   return lunch.ingredients[2]
// }
// console.log(ingredientCode())

// // Write a function that takes the lunch object as an argument and returns "The ingredients for a PB and Banana sandwich are bread, peanut butter, and banana."

// const pbNj = () => {
//   return `The ingredients for a ${lunch.name} ${lunch.type} are ${lunch.ingredients[0]}, ${lunch.ingredients[1]}, and ${lunch.ingredients[2]}`
// }

// console.log(pbNj())
// // Update the lunch object with method that returns "The ingredients for a PB and Banana sandwich are bread, peanut butter, and banana."
// // Consider this variable:

const animals = [
  { name: "Waffles", type: "dog", age: 7 },
  { name: "Fluffy", type: "cat", age: 14 },
  { name: "Spelunky", type: "dog", age: 4 },
  { name: "Hank", type: "cat", age: 11 }
]
// Create a function that takes in an array of animal objects and returns a new array with only the objects that are cats.

// const type = animals.filter((value) => value.type === "cat")
const type = animals.filter((value) => value.type === "cat")
console.log(type)

const onlyCats = () => {
  let cats = animals.filter((value) => value.type === "cat")
  return cats
}





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