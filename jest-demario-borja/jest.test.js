// Process: Write the test FIRST. Ensure the test fails correctly. Then write the code that will make the test pass.
// Note: You do not need to comment out the old tests or functions. The purpose of tests are to be AUTOMATED. Commenting them out defeats that purpose.

// Write the test for a function that returns "drink coffee" if you are tired and "keep working" if you are not tired. 
describe("coffee", () => {
  it("returns 'drink coffee' if you are tired and 'keep working' if you are not tired", () => {
    expect(coffee('yes')).toEqual('drink coffee')
    expect(coffee('no')).toEqual('keep working')
  })
})

// Create the function that will make the test pass.
const coffee = (string) => {
  if (string.toLowerCase() === 'yes'){
    return 'drink coffee'
  } else if(string.toLowerCase() === 'no'){
    return 'keep working'
  }
}
// Write the test for a function that returns "relax" if you are stressed and "keep going" if you are not stressed.

describe("howYouDoin", () => {
  it("returns 'relax' if you are stressed and 'keep going' if you are not stressed", () => {
    expect(howYouDoin('yes')).toEqual('relax')
    expect(howYouDoin('no')).toEqual('keep going')
  })
})

// Create the function that will make the test pass.

const howYouDoin = (string) => {
  if(string.toLowerCase() === 'yes'){
    return 'relax'
  } else if(string.toLowerCase() === 'no'){
    return 'keep going'
  }
}

// Write the test for a function that returns "in budget" if a price is lower than $300.

describe('budget', () => {
  it("returns 'in budget' if a price is lower than $300", () => {
    expect(budget(Number<300)).toEqual('in budget')
  })
})

// Create the function that will make the test pass.

const budget = (number) => {
  if (number < 300){
    return 'in budget'
  }
}

// Write the test for a function that takes in two numbers and returns the smaller number.

describe("smallerNum", () => {
  it("returns the smaller number", () => {
    expect(smallerNum(3,3)).toEqual("They are the same")
    expect(smallerNum(1,2)).toEqual(1)
    expect(smallerNum(2,0)).toEqual(0)
    
  })
})

// Create the function that will make the test pass.

const smallerNum = (num1, num2) => {
  if(num1 < num2){
    return num1
   }else if(num2 < num1){
     return num2
  }else if(num1 === num2){
    return 'They are the same'
  }
}

// Write the test for a function that takes in one numbers and returns whether the number is odd.
describe('oddNum', () => {
  it('takes in one numbers and returns whether the number is odd', () => {
    expect(oddNum(7)).toEqual('Odd')
    expect(oddNum(4)).toEqual('Even')
  })
})

// Create the function that will make the test pass.
const oddNum = (num) => {
  if(num % 2 === 0){
    return 'Even'
  } else if (num % 2 !== 0){
    return 'Odd'
  }
}

// Write the test for a function that takes in a fruit and returns "yellow" if the argument is banana, "red" if apple and "purple" if grape.
describe('fruitChecker', () => {
  it("returns 'yellow' if the argument is banana, 'red' if apple and 'purple' if grape", () => {
    expect(fruitChecker('banana')).toEqual('yellow')
    expect(fruitChecker('apple')).toEqual('red')
    expect(fruitChecker('grape')).toEqual('purple')
  })
})

// Create the function that will make the test pass.
const fruitChecker = (fruit) => {
  if (fruit === 'banana'){
    return 'yellow'
  } else if (fruit === 'apple') {
    return 'red'
  } else if (fruit === 'grape') {
    return 'purple'
  }
}

// Write the test for a function called rick that returns "Morty".
describe('rick', () => {
  it('Returns "Morty"', () => {
    expect(rick()).toEqual("Morty")
  })
})

// Create the function that will make the test pass.
const rick = () => {
  return "Morty"
}

// Write the test for a function called greeter that takes a name as an argument and returns a greeting with that name to the screen.

describe('greeter', () => {
  it('returns a greeting with that name to the screen', () => {
    expect(greeter('John')).toEqual('Hello, John')
  })
})

// Create the function that will make the test pass.

const greeter = (person) => {
  return `Hello, ${person}`
}

// Write the test for a function called oddOrEven that takes a number as an argument and logs whether the number is odd or even.

describe('oddOrEven', () => {
  it('takes a number as an argument and logs whether the number is odd or even', () => {
    expect(oddOrEven(9)).toEqual('Odd')
    expect(oddOrEven(8)).toEqual('Even')
  })
})

// Create the function that will make the test pass.

const oddOrEven = (num) => {
  if (num % 2 === 0){
    return 'Even'
  } else if (num % 2 !== 0){
    return 'Odd'
  }
}

// Write the test for a function called doubler that takes a number and returns the result of the number multiplied by 2.

// describe('', () => {
//   it('', () => {
//     expect()).toEqual('')
//     expect(o()).toEqual('')
//   })
// })

// Create the function that will make the test pass.

// const   = () => {}

// Write the test for a function called multiply that takes two numbers as arguments and logs the result of one of the numbers multiplied by the other.

// describe('', () => {
//   it('', () => {
//     expect()).toEqual('')
//     expect(o()).toEqual('')
//   })
// })

// Create the function that will make the test pass.

// const   = () => {}

// Write the test for a function called divisibleBy that takes two numbers as arguments and returns whether the first number is evenly divisible by the second so that divisibleBy(10, 5) logs "10 is evenly divisible by 5".

// describe('', () => {
//   it('', () => {
//     expect()).toEqual('')
//     expect(o()).toEqual('')
//   })
// })

// Create the function that will make the test pass.

// const   = () => {}

// Write the test for a function called fizzbuzz. If a number is a multiple of 3, replace it with the word "fizz". If a number is a multiple of five, replace it with the word "buzz". If a number is a multiple of both 3 and 5, replace it with "fizzbuzz".

// describe('', () => {
//   it('', () => {
//     expect()).toEqual('')
//     expect(o()).toEqual('')
//   })
// })

// Create the function that will make the test pass.

// const   = () => {}