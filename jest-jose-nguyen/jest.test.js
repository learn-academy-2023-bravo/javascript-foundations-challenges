/*
Process: Write the test FIRST. Ensure the test fails correctly. Then write the code that will make the test pass.

Note: You do not need to comment out the old tests or functions. The purpose of tests are to be AUTOMATED. Commenting them out defeats that purpose.

Write the test for a function that returns "drink coffee" if you are tired and "keep working" if you are not tired.
Create the function that will make the test pass.
*/
//Pseudo Code
//Create a test function named energyLevel that checks level of enegry (low) and returns "drink coffee" and if energy is (high) returns "keep working"


//Red
describe("energyLevel", () => {
    it("returns a string drink coffee if enery levels are low", ()=> {
        expect(energyLevel("low")).toEqual("drink coffee")
        expect(energyLevel("high")).toEqual("keep coding")
    })
})

// Green 
const energyLevel = (energy) => {
    if(energy === "low") {
    return "drink coffee"
    } else if (energy === "high") {
        return "keep coding"
    }
} 

console.log(energyLevel("high"))


/*
Write the test for a function that returns "relax" if you are stressed and "keep going" if you are not stressed.
Create the function that will make the test pass.
*/

//Red
describe("howYouFeel", () => {
    it("returns relax if stressed equals yes or keep going if not stress", () => {
        expect(howYouFeel("yes")).toEqual("relax")
        expect(howYouFeel("no")).toEqual("keep going")
    })
})
//Green 

const howYouFeel = (mood) => {
    if (mood === "yes" ) {
        return "relax"
    }   else if (mood === "no") {
        return "keep going"
    }
}
//Refactor


/*
Write the test for a function that returns "in budget" if a price is lower than $300.
Create the function that will make the test pass.
*/

// Pseudo Code
// Create a test fuction named bejamins 
// Test function will check the condition price and return "in budget" if price < $300
// Make a function that will make the test pass
// Refactor if necessary 

describe("bejamins", () => {
    it("returns 'in budjet' if condition prices is less than $300", () => {
        expect(bejamins(400))
    })
})

const bejamins = (price) => {
    if (price > 300) {
        return "in budget"
    } 
} 

//Red
//Green
//Refactor



/*
Write the test for a function that takes in two numbers and returns the smaller number.
Create the function that will make the test pass.
*/

describe("smallerNum", () => {
    it("compare a set of number and returns smaller number", () => {
        expect(smallerNum(5, 20)).toBe(5)
        expect(smallerNum(3, 5)).toBe(3)
    })
})

const smallerNum = (num1, num2) => {
    if (num1 < num2) {
        return num1
    } else {
        return num2
        return num2
    }
}


/*
Write the test for a function that takes in one numbers and returns whether the number is odd.
Create the function that will make the test pass.

Write the test for a function that takes in a fruit and returns "yellow" if the argument is banana, "red" if apple and "purple" if grape.
Create the function that will make the test pass.

Write the test for a function called rick that returns "Morty".
Create the function that will make the test pass.

Write the test for a function called greeter that takes a name as an argument and returns a greeting with that name to the screen.
Create the function that will make the test pass.

Write the test for a function called oddOrEven that takes a number as an argument and logs whether the number is odd or even.
Create the function that will make the test pass.

Write the test for a function called doubler that takes a number and returns the result of the number multiplied by 2.
Create the function that will make the test pass.

Write the test for a function called multiply that takes two numbers as arguments and logs the result of one of the numbers multiplied by the other.
Create the function that will make the test pass.

Write the test for a function called divisibleBy that takes two numbers as arguments and returns whether the first number is evenly divisible by the second so that divisibleBy(10, 5) logs "10 is evenly divisible by 5".
Create the function that will make the test pass.
Write the test for a function called fizzbuzz. If a number is a multiple of 3, replace it with the word "fizz". If a number is a multiple of five, replace it with the word "buzz". If a number is a multiple of both 3 and 5, replace it with "fizzbuzz".
Create the function that will make the test pass.
*/