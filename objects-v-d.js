// Consider this variable:

const person = {
  firstName: "Arthur",
  lastName: "Dent"
}
// Write the code that accesses the first name of the person object.
console.log(person.firstName)
// Write the code that accesses the last name of the person object.
console.log(person.lastName)
// Write the code that gives the person object a property of homePlanet and set it to 'Earth'.
person.homePlanet= "Earth"
console.log(person.homePlanet)

// Update the person object with a method that logs "Arthur Dent is from planet Earth".
person.getPlanet= function(){
    return `${this.firstName} ${this.lastName} is from planet ${this.homePlanet}`
}
console.log(person.getPlanet())

const product = {
    name: "chair",
    price: 24.99
  }
// Write a function called describeProduct that takes the product object as an argument and logs "The product is a chair. It costs $24.99".
product.describeProduct =function (){
    return `The product is a ${this.name}. It costs ${this.price}`
}
console.log(product.describeProduct())


// Write a function called totalWithTax that takes the product object as an argument and returns the total price of the chair that includes a 7% sales tax rounded to two decimals.