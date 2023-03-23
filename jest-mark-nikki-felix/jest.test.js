// Write the test for a function that returns "drink coffee" if you are tired and "keep working" if you are not tired.
// Create the function that will make the test pass.
describe("areYouTired", () => {
    it("returs drink cofee if you are tired and keep working if you are not", () => {
        expect(areYouTired('yes')).toEqual('drink coffee')
        expect(areYouTired('no')).toEqual('keep working')
    })
})
//output:
// FAIL  ./jest.test.js
// areYouTired
//   ✕ returs drink cofee if you are tired and keep working if you are not (2 ms)

// ● areYouTired › returs drink cofee if you are tired and keep working if you are not

//   ReferenceError: areYouTired is not defined
const areYouTired = (string) => {
    if (string === "yes") {
        return "drink coffee"
    } else if (string === "no"){
        return "keep working"
    }
}
//output:
// PASS  ./jest.test.js
// areYouTired
//   ✓ returs drink cofee if you are tired and keep working if you are not (4 ms)


// Write the test for a function that returns "relax" if you are stressed and "keep going" if you are not stressed.
//input:1 string
//output: 1 string
// creating a function called areYouStressed takes an argument that check for "yes or no" and returns a string.

describe ("areYouStressed", () =>{
    it("returns a string that says relax if you are stresed and keep going if you are not", () =>{
        expect(areYouStressed('yes')).toEqual("relax")
        expect(areYouStressed("no")).toEqual("keep going")
    })
})

// FAIL  ./jest.test.js
// areYouTired
//   ✓ returs drink cofee if you are tired and keep working if you are not (5 ms)
// areYouStressed
//   ✕ returns a string that says relax if you are stresed and keep going if you are not

// ● areYouStressed › returns a string that says relax if you are stresed and keep going if you are not

//   ReferenceError: areYouStressed is not defined

    describe ("areYouStressed", () =>{
             it("returns a string that says relax if you are stresed and keep going if you are not", () =>{
             expect(areYouStressed('yes')).toEqual("relax")
             ^
             expect(areYouStressed("no")).toEqual("keep going")
         })
     })

const areYouStressed = (string) => {
    if(string === "yes") {
        return "relax"
    } else if (string === "no"){
        return "keep going"
    }
}
// //output:
// PASS  ./jest.test.js
// areYouTired
//   ✓ returs drink cofee if you are tired and keep working if you are not (5 ms)
// areYouStressed
//   ✓ returns a string that says relax if you are stresed and keep going if you are not





// Create the function that will make the test pass.
// Write the test for a function that returns "in budget" if a price is lower than $300.

// Create a function inBudget
// Create parameter called 'number'
// take a number as input/argument
// Use a relational operators: =, <=, >= 
// output a string - "in budget"

describe("inBudget", () => {
    it("return a string in budget if price is lower than $300, if not return string you broke", () => {
        expect(inBudget(200)).toEqual("in budget")
        expect(inBudget(350)).toEqual("you broke")
    })
})

//output:
// FAIL  ./jest.test.js
// inBudget
//   ✕ return a string in budget if price is lower than $300, if not return string you broke (2 ms)

// ● inBudget › return a string in budget if price is lower than $300, if not return string you broke

//   ReferenceError: inBudget is not defined

const inBudget = (number) => {
    if(number <= 300) {
        return "in budget"
    } else if(number > 300) {
        return "you broke"
    }
}

//output:
//  PASS  ./jest.test.js
//   inBudget
//   ✓ return a string in budget if price is lower than $300, if not return string you broke (6 ms)

// Test Suites: 1 passed, 1 total
// Tests:       1 passed, 1 total
// Snapshots:   0 total
// Time:        1.422 s, estimated 2 s
// Ran all test suites.
// ✨  Done in 5.76s.


// Create the function that will make the test pass.
// Write the test for a function that takes in two numbers and returns the smaller number.

//psuedocode
// Function called smallerNum
// Parameter will take 2 numbers as input
// Relational operator
// Ouput smaller number

describe("smallerNum", () => {
    it("takes two numbers in and returns the smaller number", () => {
        expect(smallerNum(1, 1)).toEqual(1);
    })
})

const smallerNum = (num1, num2) => {
    if(num1 < num2) {
        return num1
    } else if(num1 > num2) {
        return num2
    } else if(num1 === num2){
        return num1
    }
}

// Create the function that will make the test pass.
// Write the test for a function that takes in one numbers and returns whether the number is odd.

// Pseudocode

// input is a number that will create a function
// Create a function called oddNumber
// Use conditional statement to check if number is odd or even
// Will return string of "odd" or "even"

describe("oddNumber" , () => {
    it("returns odd or even based on input", () => {
        expect(oddNumber(5)).toEqual("odd");
        expect(oddNumber(4)).toEqual("even");
    }) 
})
    const oddNumber = (number) => {
        if(number % 2 !== 0) {
            return "odd"
        } else if(number % 2 === 0) {
            return "even"
        }
    }
//  PASS  ./jest.test.js
//   oddNumber
//   ✓ returns odd or even based on input (1 ms)

// Test Suites: 1 passed, 1 total
// Tests:       1 passed, 1 total
// Snapshots:   0 total
// Time:        0.166 s, estimated 1 s
// Ran all test suites.
// ✨  Done in 0.75s.

// Create the function that will make the test pass.
// Write the test for a function that takes in a fruit and returns "yellow" if the argument is banana, "red" if apple and "purple" if grape.
    // Pseudocode
        // Input is a string
        // Output is a string 
        // Create a function called fruitColor
        // Use conditional statement with === operator 
        
    describe("fruitColor", () => {
        it("return fruit color based on the input", () => {
            expect(fruitColor("banana")).toEqual("yellow");
            expect(fruitColor("apple")).toEqual("red");
            expect(fruitColor("grape")).toEqual("purple");
        })
    })
    const fruitColor = (string) => {
        if(string === "banana") {
            return "yellow"
        } else if (string === "apple") {
            return "red"
        } else if (string === "grape") {
            return "purple"
        }
    }
//     PASS  ./jest.test.js
//     areYouTired
//       ○ skipped returs drink cofee if you are tired and keep working if you are not
//     areYouStressed
//       ○ skipped returns a string that says relax if you are stresed and keep going if you are not
//       ○ skipped returns a string that says relax if you are stresed and keep going if you are not
//     inBudget
//       ○ skipped return a string in budget if price is lower than $300, if not return string you broke
//     smallerNum
//       ○ skipped takes two numbers in and returns the smaller number
//     oddNumber
//       ○ skipped returns odd or even based on input
//     fruitColor
//       ✓ return fruit color based on the input (1 ms)
  
//   Test Suites: 1 passed, 1 total
//   Tests:       6 skipped, 1 passed, 7 total
//   Snapshots:   0 total
//   Time:        0.179 s, estimated 1 s
//   Ran all test suites.
//   ✨  Done in 0.87s.

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