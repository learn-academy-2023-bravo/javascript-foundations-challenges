// Write the test for a function that returns "drink coffee" if you are tired and "keep working" if you are not tired.

// RED-GREEN-REFACTOR
    //  RED
    //  Write the test

    describe("coffee", () => {
        it("returns drink coffee, keep working",  () => {
            expect(coffee("tired")).toEqual("drink coffee")
            expect(coffee("not tired")).toEqual("keep working")
        })
    })

    // See the test fail
    //  FAIL  ./jest.test.js
    //   coffee
    //   ✕ returns drink coffee, keep working (2 ms)

    // ● coffee › returns drink coffee, keep working

    //   ReferenceError: coffee is not defined

// GREEN
// Pseudocode 
/* 
    create a function called coffee
    need conditional in function "if else"
    return "drink coffee" if tired, "keep working" if not tired
    test to see if it passes

*/

// Create the function that will make the test pass.

const coffee = (string) => {
    if(string === "tired") {
        return "drink coffee"
    } else if( string === "not tired") {
        return "keep working"
    }
}


// See the test pass 
// PASS  ./jest.test.js
// coffee
//   ✓ returns drink coffee, keep working (3 ms)



// REFACTOR

const coffee2 = (string) => {
    return "drink coffee if tired, keep working if not tired"
}




// Write the test for a function that returns "relax" if you are stressed and "keep going" if you are not stressed.


// RED-GREEN-REFACTOR
    //  RED
    //  Write the test

    describe("relax", () => {
        it("returns relax if you are stressed, keep going if you are not stressed",  () => {
            expect(relax("stressed")).toEqual("relax")
            expect(relax("not stressed")).toEqual("keep going")
        })
    })

    // FAIL  ./jest.test.js
    // coffee
    //   ✓ returns drink coffee, keep working (6 ms)
    // relax
    //   ✕ returns relax if you are stressed, keep going if you are not stressed (1 ms)
  
    // ● relax › returns relax if you are stressed, keep going if you are not stressed
  
    //   ReferenceError: relax is not defined

// GREEN
// Pseudocode 
/* 
    create a function called relax
    need conditional in function "if else"
    return "relax" if stressed, "keep going" if not stressed
    test to see if it passes

*/

// Create the function that will make the test pass.
const relax = (string) => {
    if(string === "stressed") {
        return "relax"
    } else if( string === "not stressed") {
        return "keep going"
    }
}



// See the test pass 
// PASS  ./jest.test.js
// coffee
//   ✓ returns drink coffee, keep working (3 ms)



// REFACTOR

const relax2 = (string) => {
    return "relax if you are stressed and keep going if you are not stressed"
}





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