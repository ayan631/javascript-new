//Data stored in the memore are either Call By Value or Call By Reference.

// Primitive Types: (call by value)
// Number, String, BigInt, Boolean, null, undefined, Symbol

//Examples of Symbols: (used to create some unique values) 
let id1 = Symbol('2004')
let id2 = Symbol('2004')
console.log(typeof id1)     //symbol

//id1 and id2 are not same though they have same values assigned, because they are two unique symbols.
console.log(id1 === id2)    //false


// Non Primitive Types: (call by reference)
// Function, Object, Array

//Array
let arr = new Array(10,20,25)
console.log(arr) // object of Array

//Object
let user={
    id : 123,
    uname: "Ayan",
    age: 26,
    degree: "MCA"
}
console.log(user)   //{ id: 123, uname: 'Ayan', age: 26, degree: 'MCA' }
console.log(typeof(user))   //object

//Function
const myFunction = function (name) {
    console.log(`My name is ${name}. I am inside 'myFunction'.`)
}

myFunction(user.uname)
console.log(typeof(myFunction)) //function


//================================ Memory =======================================//
// All primitive types take stack memory (e.g.: Number, Boolean, String etc)
const name1 = "user@gmail.com"
const name2 = name1
name2.replace("user", "ayan");
console.log(name2)
 