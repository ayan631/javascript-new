//Numbers:
let num1 = 400 // primitive number data
let num2 = new Number(350)  // non-primitive number object
// console.log(num2.__proto__) //{}
console.log(num1)   //400
console.log(num2)    //[Number: 350]
const num3=124.89758
console.log(num3.toFixed(2))    //124.90
console.log(num3.toFixed(3))    //124.898
console.log(num3.toPrecision(3))    //125

const balance = 25000000
let newBalance = balance.toLocaleString()   // returns a String
console.log(newBalance) //25,000,000
let indianBalance = balance.toLocaleString("en-IN") // returns in Indian format
console.log(indianBalance)  //2,50,00,000


//-------------------------------------------------------------------------------//

//Math Library:

console.log(Math.max(15,11,16,12))  //16
console.log(Math.min(14,10,12,18)) //10
console.log(Math.sqrt(576))   //24
console.log(Number.MAX_VALUE)   //maximum possible number range in javascript
console.log(Math.abs(-25))  //25
console.log(Math.log2(4096))   //12
console.log(Math.round(33.428))    //33
console.log(Math.round(33.8744))    //34
console.log(Math.ceil(24.25))   // gives upper value=> 25
console.log(Math.floor(24.99))  // gives lower value=> 24
console.log(Math.random())  // generates a random number ranges between 0 to 1

//generate a random whole number ranges between 1 to 10: 
console.log(Math.floor( (Math.random()*10) + 1 ))


//Generating randome whole number ranges between 20 to 40:
const min=20
const max=40
console.log( Math.floor( (Math.random() * (max-min+1)) + min ) )










