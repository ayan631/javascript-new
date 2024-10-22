/*  Object can be declated in 2 ways in Javascript: 
1.By using Object literals
2. By using new Keyword(to create singleton object)
        Javascript Objects are not primitive.   */

const userObj = {
    name: "Ayan",   //properties are always set in "key:val" pair
    age: 22,
    email: "ayan60@gmail.com",
    "full-name": "Ayan Bhattacherjee"
}   //keys are by-default Strings in type

console.log(userObj)


//Accessing object properties:
console.log(userObj["email"])
console.log(userObj.name)
// console.log(userObj.full-name); //ReferenceError: name is not defined
console.log(userObj["full-name"])   //Ayan Bhattacherjee

//modify object property:
userObj.age=25  // age is changed to 25
console.log(userObj.age)   //25


//freezing the object:
Object.freeze(userObj) // proprties can not be changed now.
userObj.email="ayan101@gmail.com"   //this change will not be implemented 
console.log(userObj.email); //prints older value


//using a js symbol as a propery of an Object:
const passKey = Symbol("key-1")
console.log( typeof passKey )   //Symbol
const user2 = {
    name: "Karan",
    age: 21,
    [passKey]: "karan-12321",   //Symbol
    // passKey: "karan-12321", //String
    city: "Kolkata",
    greet: function(){
        //defininf a function of user2 object:
        console.log(`Hello ${this.name}! Good Morning.`)
        
    }
}
console.log(user2[passKey]) //karan-12321
console.log(typeof(user2[passKey]))    //String


//define another function of user2 object:
user2.greet2 = function(){
    console.log("Bye Bye...");
    
}
console.log(user2.greet)    // [Function: greet]
console.log(user2.greet())  // Hello Karan! Good Morning.

console.log(user2.greet2);  // [Function (anonymous)]
console.log(user2.greet2());    // Bye Bye...










