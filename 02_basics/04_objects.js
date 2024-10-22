const obj1 = new Object();  //Singleton object
const obj2 = {}     //normal empty object literal
// console.log(obj1);
// console.log(obj2);

//setting properties into an empty object
obj2.id = 1230
obj2.email = "user@gmail.com"
obj2.isLoggedIn = false
// console.log(obj2)
// console.log(Object.keys(obj2))      //returns an array of keys
// console.log(Object.values(obj2))   // return an array of values
// console.log(Object.entries(obj2))  // returns array of key-value pair array
// console.log(obj2.hasOwnProperty("isLoggedIn"));  // true
// console.log(obj2.hasOwnProperty("age"));        // false




//Nested Object:
const user1 = {
    email: "user1@gmail.com",
    name: {
        user_fullname: {
            firstName: "Ayan",
            lastName: "Bhattacherjee"
        }
    }
}
// console.log(user1.name);
// console.log(user1.name.user_fullname);
// console.log(`FirstName: ${user1.name.user_fullname.firstName}, LastName: ${user1.name.user_fullname.lastName}`);


// Assiging into single object
const object1 = { 1: 'A', 2: 'B' }
const object2 = { 3: 'C', 4: 'D' }
// const object3 = {object1, object2}
// const object3 = Object.assign(object1, object2) // target=>object1
// const object3 = Object.assign({}, object1, object2) //target=> {}
// const object3 = {...object1, ...object2}    //Spread and assigned to object3
// console.log(object3)
// console.log(object1)


//Array of objects:
const allUsers = [
    {
        name: "Aaiswaryya",
        id: 101
    },
    {
        name: "Ayan",
        id: 102
    },
    {
        name: "Ravi",
        id: 104
    }
]
console.log(allUsers);

// Print id and name(in Uppercase) of all users :
for (let idx = 0; idx < allUsers.length; idx++) {
    
    // console.log(`ID: ${allUsers[idx].id} , Name: ${allUsers[idx].name.toUpperCase()}`);
    console.log(`ID: ${allUsers[idx]["id"]} , Name: ${allUsers[idx]["name"].toUpperCase()}`);
}



