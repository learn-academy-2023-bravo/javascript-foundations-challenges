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

//     35 | describe ("areYouStressed", () =>{
//     36 |     it("returns a string that says relax if you are stresed and keep going if you are not", () =>{
//   > 37 |         expect(areYouStressed('yes')).toEqual("relax")
//        |         ^
//     38 |         expect(areYouStressed("no")).toEqual("keep going")
//     39 |     })
//     40 | })

const areYouStressed = (string) => {
    if(string === "yes") {
        return "relax"
    } else if (string === "no"){
        return "keep going"
    }
}
//output:
// PASS  ./jest.test.js
// areYouTired
//   ✓ returs drink cofee if you are tired and keep working if you are not (5 ms)
// areYouStressed
//   ✓ returns a string that says relax if you are stresed and keep going if you are not





// Create the function that will make the test pass.
// Write the test for a function that returns "in budget" if a price is lower than $300.
// Create the function that will make the test pass.
// Write the test for a function that takes in two numbers and returns the smaller number.
// Create the function that will make the test pass.
// Write the test for a function that takes in one numbers and returns whether the number is odd.
// Create the function that will make the test pass.
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