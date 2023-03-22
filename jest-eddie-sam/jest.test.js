// Process: Write the test FIRST. Ensure the test fails correctly. Then write the code that will make the test pass.

// Note: You do not need to comment out the old tests or functions. The purpose of tests are to be AUTOMATED. Commenting them out defeats that purpose.

// Write the test for a function that returns "drink coffee" if you are tired and "keep working" if you are not tired.

// process
// create a describe statment called "coffee
// create an "it" statment that states what our "coffee" function will do
// create two "expect" statments that will call the function and pass the argument
// use the "toEqual" matcher method that will contain the expected output of our function

describe("needsCoffee", ()=>{
    it("return a particular statement if the user is tired or not tired", ()=>{
        expect (needsCoffee("yes")).toEqual("drink coffee")
        expect (needsCoffee("no")).toEqual("keep working")
    })
})
// Create the function that will make the test pass.
// process
// create a function named "coffee"
// the function "coffee" will have one parameter "is tired"
// if "is tired" is true the function will return "drink coffee"
// if "is tired" is false the function will return "keep working"
const needsCoffee = (isTired) =>{
    if (isTired==="yes"){
        return "drink coffee"
    
    } else if (isTired==="no") {
        return "keep working"
    }
}

// Write the test for a function that returns "relax" if you are stressed and "keep going" if you are not stressed.
// process
// create a describe statment called "mentalFatigue"
// create an "it" statment that states what our "fatigue" function will do
// create two "expect" statments that will call the function and pass the argument
// use the "toEqual" matcher method that will contain the expected output of our function

describe("mentalFatigue", ()=>{
    it("return a particular statement if the user is stressed or not stressed", ()=>{
        expect (mentalFatigue("yes")).toEqual("relax")
        expect (mentalFatigue("no")).toEqual("keep going")
    })
})
// Create the function that will make the test pass.
// process
// create a function named "mentalFatigue"
// the function "mentalFatigue" will have one parameter "stress"
// if "stress" is true the function will return "relax"
// if "stress" is false the function will return "keep going"
const mentalFatigue = (stress) =>{
    if (stress==="yes"){
        return "relax"
    
    } else if (stress==="no") {
        return "keep going"
    }
}
// Create the function that will make the test pass.
// Write the test for a function that returns "in budget" if a price is lower than $300.
// process
// create a "describe" statement with our function "budget"
// create an "it" statement which will describe our budget function
// create two "expect" statements that call our function with different inputs
// use the match method "toequal" which will produce our expected outputs

describe ("budget", ()=>{
    it ("budget will take in a number and return 'in budget' if the number is below 300", ()=>{
        expect (budget(200)).toEqual("in budget")
        expect (budget(400)).toEqual("")
    })
})

// create a function named "budget"
// the function "budget" will have one parameter named "price"
// if "price" is below 300 the function will retun "in budget"
// otherwise the function will return an empty string

const budget =(price)=>{
    if (price<300){
        return "in budget"
    } else {
        return ""
    }
}




// Create the function that will make the test pass.
// Write the test for a function that takes in two numbers and returns the smaller number.
// process
// create a "describe" statement with a function with two parameters
// create an "it" statement that describes our function
// create three "expect statements" with our function name and input
// use the "toEqual" method to check for the expected output

describe("compare", ()=>{
    it("takes in two numbers and returns to smaller number after comparing them",()=>{
        expect (compare(10,15)).toEqual(10)
        expect (compare(15,10)).toEqual(10)
        expect (compare(10,10)).toEqual(10)
    })
})

// Create the function that will make the test pass.

// process
// create a function named "compare"
// The function will have two parameters named "num1" and "num2"
// we will use several if statments to identify which is the smallest number or if they are equal
// the function will return the smaller number

const compare = (num1,num2) =>{
    if (num1<=num2){
        return num1
    } else if (num1>num2){
        return num2
    } else {
        return "invalid"
    }
}

// Write the test for a function that takes in one numbers and returns whether the number is odd.
// process
// create a "describe" statement that contains the funcion 
// create an "it" statement that describes our function 
// create two "expect" statements that call our function 
// use the "toEqual" method to check for the expected outputs



// Create the function that will make the test pass.
// process
// create a function named "numberFeature"
// The function will contain one parameter which will be called "number"
// We will use an if statment and the modulo operator to deterine whether the number is odd
// Return whether or not the number is odd


// Write the test for a function that takes in a fruit and returns "yellow" if the argument is banana, "red" if apple and "purple" if grape.
// Create the function that will make the test pass.
// Write the test for a function called rick that returns "Morty".
// Create the function that will make the test pass.
// Write the test for a function called greeter that takes a name as an argument and returns a greeting with that name to the screen.
// Create the function that will make the test pass.
// Write the test for a function called oddOrEven that takes a number as an argument and logs whether the number is odd or even.
// Create the function that will make the test pass.
// Write the test for a function called doubler that takes a number and returns the result of the number multiplied by 2.
// Create the function that will make the test pass.
// Write the test for a function called multiply that takes two numbers as arguments and logs the result of one of the numbers multiplied by the other.
// Create the function that will make the test pass.
// Write the test for a function called divisibleBy that takes two numbers as arguments and returns whether the first number is evenly divisible by the second so that divisibleBy(10, 5) logs "10 is evenly divisible by 5".
// Create the function that will make the test pass.
// Write the test for a function called fizzbuzz. If a number is a multiple of 3, replace it with the word "fizz". If a number is a multiple of five, replace it with the word "buzz". If a number is a multiple of both 3 and 5, replace it with "fizzbuzz".
// Create the function that will make the test pass.
