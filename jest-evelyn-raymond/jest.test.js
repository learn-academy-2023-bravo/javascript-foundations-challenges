// Write the test for a function that returns "drink coffee" if you are tired and "keep working" if you are not tired.
// Create the function that will make the test pass.

describe("rest", () => {
  it("returns drink coffee if you are tired", () => {
    expect(rest(true)).toEqual("drink coffee")
  })
  it("returns keep working if you are not tired", () => {
    expect(rest(false)).toEqual("keep working")
  })
})
// yarn jest

// Pseudo code:
// Create a function named "rest" that takes in a boolean named "tired"
// If the boolean is true, will return "drink coffee"
// If the boolean is not true, will return "keep working"
const rest = (tired) => {
  if (tired) {
    return "drink coffee"
  }
  else if (tired === false) {
    return "keep working"
  }
}

// Write the test for a function that returns "relax" if you are stressed and "keep going" if you are not stressed.
// Create the function that will make the test pass.

describe("stressed", () => {
  it("returns relax if you are stressed", () => {
    expect(stressed(true)).toEqual("relax")
  })
  it("returns keep going if you are not stressed", () => {
    expect(stressed(false)).toEqual("keep going")
  })
})
// output: good FAIL

// Pseudo code:
// Create a function named "stressed" that takes in a boolean named "value"
// If the boolean is true, will return "relax"
// If the boolean is not true, will return "keep going"
const stressed = (value) => {
  if (value) {
    return "relax"
  }
  else if (value === false) {
    return "keep going"
  }
}

// Write the test for a function that returns "in budget" if a price is lower than $300.
// Create the function that will make the test pass.

describe("canIBuy", () => {
  it("returns in budget if a price is lower than $300", () => {
    expect(canIBuy(250)).toEqual("in budget")
  })
  it("returns too expensive if price is greater than or equal to $300", () => {
    expect(canIBuy(500)).toEqual("too expensive")
  })
})

// Pseudo code:
// Create a function named "canIBuy" that takes in a number named "price"
// If the number is less than 300, will return "in budget"
// If the number is greater than or equal to 300, will return "too expensive"
const canIBuy = (price) => {
  if (price < 300) {
    return "in budget"
  }
  else if (price >= 300) {
    return "too expensive"
  }
}

// Write the test for a function that takes in two numbers and returns the smaller number.
// Create the function that will make the test pass.

describe("smallerNum", () => {
  it("returns the smaller of two numbers", () => {
    expect(smallerNum(25, 7)).toEqual(7)
  })
})

// Pseudo code:
// Create a function named "samllerNum" that takes in two numbers"
// If num1 is smaller than num2 than return num1
// If num2 is smaller than num1 than return num2

const smallerNum = (num1, num2) => {
  if (num1 < num2) {
    return num1
  }
  else if (num1 > num2) {
    return num2
  }
}

// Write the test for a function that takes in one numbers and returns whether the number is odd.
// Create the function that will make the test pass.

describe("oddOrEven", () => {
  it("should return odd", () => {
    expect(oddOrEven(3)).toEqual("odd")
  })
  it("should return even", () => {
    expect(oddOrEven(6)).toEqual("even")
  })
})

// Pseudo code:
// Create a function named "oddOrEven" that takes in one number"
// If number is even return "even"
// If number is odd  return "odd"
const oddOrEven = (number) => {
  if (number % 2 === 0) {
    return "even"
  }
  else if (number % 2 !== 0) {
    return "odd"
  }
}

// Write the test for a function that takes in a fruit and returns "yellow" if the argument is banana, "red" if apple and "purple" if grape.
// Create the function that will make the test pass.

describe("fruitColor", () => {
  it("should return yellow", () => {
    expect(fruitColor("banana")).toEqual("yellow")
  })
  it("should return red", () => {
    expect(fruitColor("apple")).toEqual("red")
  })
  it("should return purple", () => {
    expect(fruitColor("grape")).toEqual("purple")
  })
})

// Pseudo code:
// Create a function named "fruitColor" that takes in fruit
// If the argument is banana then returns "yellow"
// If the argument is apple then returns "red"
// If the argument is grape then returns "purple"
const fruitColor = (fruit) => {
  if (fruit === "banana") {
    return "yellow"
  }
  else if (fruit === "apple") {
    return "red"
  }
  else if (fruit === "grape") {
    return "purple"
  }
}

// Write the test for a function called rick that returns "Morty".
// Create the function that will make the test pass.

describe("rick", () => {
  it("should return morty", () => {
    expect(rick()).toEqual("morty")
  })
})

// Pseudo code:
// Create a function named "rick" and returns "morty"
const rick = () => {
    return "morty"
}

// Write the test for a function called greeter that takes a name as an argument and returns a greeting with that name to the screen.
// Create the function that will make the test pass.

describe("greeter", () => {
  it("should return hello world", () => {
    expect(greeter("world")).toEqual("hello world")
  })
  it("should return hello evelyn", () => {
    expect(greeter("evelyn")).toEqual("hello evelyn")
  })  
})

// Pseudo code:
// Create a function named "greeter" that takes in a string called "name" and returns "hello name"
const greeter = (name) => {
  return `hello ${name}`
}

// Write the test for a function called oddOrEven that takes a number as an argument and logs whether the number is odd or even.
// Create the function that will make the test pass.

describe("oddOrEven2", () => {
  it("should return odd", () => {
    expect(oddOrEven2(3)).toEqual("odd")
  })
  it("should return even", () => {
    expect(oddOrEven2(6)).toEqual("even")
  })
})

// Pseudo code:
// Create a function named "oddOrEven" that takes a number as an argument and logs whether the number is odd or even
// If number is even return "even"
// If number is odd  return "odd"
const oddOrEven2 = (number) => {
  if (number % 2 === 0) {
    return "even"
  }
  else if (number % 2 !== 0) {
    return "odd"
  }
}

// Write the test for a function called doubler that takes a number and returns the result of the number multiplied by 2.
// Create the function that will make the test pass.

describe("doubler", () => {
  it("should return the result of the number multiplied by 2", () => {
    expect(doubler(7)).toEqual(14)
    expect(doubler(10)).toEqual(20)
    expect(doubler(25)).toEqual(50)
  })  
})

// Pseudo code:
// Create a function named "doubler" that takes a number and returns the result of the number multiplied by 2.
 const doubler = (number) => {
    return number * 2
  }

// Write the test for a function called multiply that takes two numbers as arguments and logs the result of one of the numbers multiplied by the other.
// Create the function that will make the test pass.

describe("multiply", () => {
  it("should return the result of one of the numbers multiplied by the other", () => {
    expect(multiply(7, 2)).toEqual(14)
    expect(multiply(9, 9)).toEqual(81)
    expect(multiply(5, 5)).toEqual(25)
  })  
})

// Pseudo code:
// Create a function named "multiply" that takes two numbers as arguments and logs the result of one of the numbers multiplied by the other
const multiply = (number1, number2) => {
  return number1 * number2
}

// Write the test for a function called divisibleBy that takes two numbers as arguments and returns whether the first number is evenly divisible by the second so that divisibleBy(10, 5) logs "10 is evenly divisible by 5".
// Create the function that will make the test pass.

describe("divisibleBy", () => {
  it("should returns whether the first number is evenly divisible by the second so that divisibleBy(10, 5)", () => {
    expect(divisibleBy(8, 2)).toEqual("8 is evenly divisible by 2")
    expect(divisibleBy(10, 5)).toEqual("10 is evenly divisible by 5")
    expect(divisibleBy(20, 3)).toEqual("20 is not evenly divisible by 3")
  })  
})

// Pseudo code:
// Create a function named "divisibleBy" takes two numbers as arguments and returns whether the first number is evenly divisible by the second so that divisibleBy(10, 5) 
// logs "10 is evenly divisible by 5"
const divisibleBy = (number1, number2) => {
  if(number1 % number2 === 0) {
  return `${number1} is evenly divisible by ${number2}`
  }
  else {return `${number1} is not evenly divisible by ${number2}`
  }
}

// Write the test for a function called fizzbuzz. If a number is a multiple of 3, replace it with the word "fizz". If a number is a multiple of five, replace it with the word "buzz". If a number is a multiple of both 3 and 5, replace it with "fizzbuzz".
// Create the function that will make the test pass.

describe("fizzbuzz", () => {
  it("should return fizz", () => {
    expect(fizzbuzz(3)).toEqual("fizz")
    expect(fizzbuzz(6)).toEqual("fizz")
    expect(fizzbuzz(9)).toEqual("fizz")
  }) 
  it("should return buzz", () => {
    expect(fizzbuzz(5)).toEqual("buzz")
    expect(fizzbuzz(10)).toEqual("buzz")
    expect(fizzbuzz(20)).toEqual("buzz")
  })   
  it("should return fizzbuzz", () => {
    expect(fizzbuzz(15)).toEqual("fizzbuzz")
    expect(fizzbuzz(30)).toEqual("fizzbuzz")
    expect(fizzbuzz(60)).toEqual("fizzbuzz")
  })
})

// Pseudo code:
// Create a function named "fizzbuzz" 
// If a number is a multiple of 3, replace it with the word "fizz". If a number is a multiple of five, replace it with the word "buzz". If a number is a multiple of both 3 and 5, replace it with "fizzbuzz".
const fizzbuzz = (number) => {
  if(number % 3 === 0 && number % 5 === 0) {
    return "fizzbuzz" 
  }
  else if(number % 3 === 0) {
  return "fizz" 
  }
  else if(number % 5 === 0) {
    return "buzz" 
  }
}
