// Write the test for a function that returns "drink coffee" if you are tired and "keep working" if you are not tired.
//pseudo:
//input: a function called are you tired with one parameter.
// inside the function we'll create a conditional statement that returns "drink coffee" if you are tired and "keep working" if you are not tired.
//output: function will return the string drink coffee or keep working based on given argument.
describe ("areYouTired" , () => {
    it("returns drink coffee or keep working" , ()=> {
        expect(areYouTired("yes")).toEqual("drink coffee")
        expect(areYouTired("no")).toEqual("keep working")
        expect(areYouTired()).toEqual("something went wrong")
    })
})

const areYouTired = (string) => {
    if(string === "yes"){
        return "drink coffee"
    }
    else if(string === "no"){
        return "keep working"
    }
    else{
        return "something went wrong"
    }
}

// Create the function that will make the test pass.

// Write the test for a function that returns "relax" if you are stressed and "keep going" if you are not stressed.
//Pseudo:
//input: a function called chillOut with one parameter.
// inside the function we'll create a conditional statement that returns the string "relax" if you are stressed and the string "keep working" if you are not stressed.
describe ("chillOut" , () => {
    it("returns relax or keep working" , ()=> {
        expect(chillOut("yes")).toEqual("relax")
        expect(chillOut("no")).toEqual("keep working")
        expect(chillOut()).toEqual("something went wrong")
    })
})

const chillOut = (string) => {
    if(string === "yes"){
        return "relax"
    }
    else if(string === "no"){
        return "keep working"
    }
    else{
        return "something went wrong"
    }
}
// Create the function that will make the test pass.


// Write the test for a function that returns "in budget" if a price is lower than $300.
//pseudo:
//Input: create a function called haveMoney that takes in one parameter
//function will contain a conditional. If number is <= 300 return "in budget". If number is >300 return "not in budget"based on input argument. Else return "somthing went wrong".  
//output: return the strings "in budget", "not in budget", or "something went wrong"


describe("haveMoney" , ()=> {
it("returns in budget if price is lower than $300 and above budget if price is higher than $300" , ()=> {
    expect(haveMoney(200)).toEqual("in budget")
    expect(haveMoney(400)).toEqual("not in budget")
    expect(haveMoney()).toEqual("something went wrong")
})
})
//check .toBeLessThanOrEqual
//check .toBeGreaterThanOrEqual

const haveMoney = (num1) => {
    
    if(num1<=300){
        return "in budget"
    }
    else if(num1>300){
        return "not in budget"
    }
    else{
        return "something went wrong"
    }
    
    
}
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
