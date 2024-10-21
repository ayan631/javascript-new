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
let name1 = "user@gmail.com"
let name2 = name1 // assiginig a copy
name2 = name2.replace("user", "ayan60") // changes ar e made in the copy version
console.log(name1)  // unchanged
console.log(name2)  //changed



// All object types take Heap memory (e.g.: Objects, Arrays, Functions)

let student1 = {
    name: "Sandy",
    age: 21,
    marks: 75.25
}

let student2 = student1    //now student2 refers to the same data.
/*
    In case of reference types, if we make any changes through them, the actual data will be changed. 
*/ 
student2.name = "Dipayan"  // this will change the actual data.
student2.marks = 76.58

console.log(student1)   //{ name: 'Dipayan', age: 21, marks: 76.58 }
console.log(student2)   //{ name: 'Dipayan', age: 21, marks: 76.58 }

