// Process: Write the test FIRST. Ensure the test fails correctly. Then write the code that will make the test pass.

// Note: You do not need to comment out the old tests or functions. The purpose of tests are to be AUTOMATED. Commenting them out defeats that purpose.

// Write the test for a function that returns "drink coffee" if you are tired and "keep working" if you are not tired.

describe ("tired", () => {
    it ("returns drink coffee or keep working based on input", () => {
        expect(areYouTired("yes")).toEqual("drink coffee")
        expect(areYouTired("no")).toEqual("keep working")
        })
})

// Create the function that will make the test pass.

const areYouTired = (string) => {
    if (string === "yes") {
        return "drink coffee"
    } else if (string ==="no") {
        return "keep working"
    }
}


// Write the test for a function that returns "relax" if you are stressed and "keep going" if you are not stressed.

describe ("stressed", () => {
    it ("returns relax or keep going based on input", () => {
        expect(areYouStressed("yes")).toEqual("relax")
        expect(areYouStressed("no")).toEqual("keep going")
        })
})

// Create the function that will make the test pass.

const areYouStressed = (string) => {
    if (string === "yes") {
        return "relax"
    } else if (string ==="no") {
        return "keep going"
    }
}


// Write the test for a function that returns "in budget" if a price is lower than $300.

describe ("canAfford", () => {
    it ("returns in budget based on input", () => {
        expect(canAfford(299)).toBe("in budget")
        expect(canAfford(301)).toBe("not in budget")
        })
    })
// Create the function that will make the test pass.

const canAfford = (number) => {
    if (number >= 300) {
        return "not in budget"
    } else if (number <= 300) {
        return "in budget"
    }
}


// Write the test for a function that takes in two numbers and returns the smaller number.

describe ("smallerNumber", () => {
    it ("returns the smaller number based on input", () => {
        expect (smallerNumber(1, 2)).toBe(1)
    })
})

// Create the function that will make the test pass.

 const smallerNumber = (number1, number2) => {
     if (number1 < number2) {
         return number1
     } else { return number2}
}


// Write the test for a function that takes in one numbers and returns whether the number is odd.

describe ("isItOdd", () => {
    it ("returns if a number is odd based on input", () => {
        expect (isItOdd(5)).toBe(true)
        expect (isItOdd(2)).toBe(false)
    })
})

// Create the function that will make the test pass.

const isItOdd =(number) => {
    return number % 2 !== 0
}


// Write the test for a function that takes in a fruit and returns "yellow" if the argument is banana, "red" if apple and "purple" if grape.

describe ("whatColorIsThisFruit", () => {
    it ("returns the color of a given fruit based on input", () => {
        expect (whatColorIsThisFruit("banana")).toBe("yellow")
        expect (whatColorIsThisFruit("apple")).toBe("red")
        expect (whatColorIsThisFruit("grape")).toBe("purple")
    })
})

// Create the function that will make the test pass.

const whatColorIsThisFruit = (string) => {
    switch (string) {
        case "banana":
            return "yellow";
        case "apple":
            return "red";
        case "grape":
            return "purple"
        default:
            throw new Error("Unkown fruit")
    }
}

// Write the test for a function called rick that returns "Morty".

describe("rick", () => {
    it("return 'Morty'", () => {
        const expected = "Morty"
        const actual = rick()
        expect(actual).toEqual(expected)
    })
})

// Create the function that will make the test pass.

const rick = () => {
    return "Morty"
}


// Write the test for a function called greeter that takes a name as an argument and returns a greeting with that name to the screen.

describe ("greeter", () => {
    it ("returns `Hello, ${name}` based on input", () => {
        const result = greeter("John")
        expect (result).toBe("Hello, John")
    })
})


// Create the function that will make the test pass.

const greeter = (name) => {
    return `Hello, ${name}`
}


// Write the test for a function called oddOrEven that takes a number as an argument and logs whether the number is odd or even.
// Create the function that will make the test pass.
// Write the test for a function called doubler that takes a number and returns the result of the number multiplied by 2.
// Create the function that will make the test pass.
// Write the test for a function called multiply that takes two numbers as arguments and logs the result of one of the numbers multiplied by the other.
// Create the function that will make the test pass.
// Write the test for a function called divisibleBy that takes two numbers as arguments and returns whether the first number is evenly divisible by the second so that divisibleBy(10, 5) logs "10 is evenly divisible by 5".
// Create the function that will make the test pass.
// Write the test for a function called fizzbuzz. If a number is a multiple of 3, replace it with the word "fizz". If a number is a multiple of five, replace it with the word "buzz". If a number is a multiple of both 3 and 5, replace it with "fizzbuzz".
// Create the function that will make the test pass