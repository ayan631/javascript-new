//Dates

let myDate = new Date()
console.log(typeof myDate)  //object

// console.log(myDate.toString())  //Mon Oct 21 2024 20:22:49
// console.log(myDate.toDateString())  //Mon Oct 21 2024
// console.log(myDate.toISOString())   //2024-10-21T20:24:40.536Z
// console.log(myDate.toJSON())    //2024-10-21T20:24:40.536Z
// console.log(myDate.toLocaleDateString())    //10/21/2024
// console.log(myDate.toLocaleString())    //10/21/2024, 8:25:46 PM
// console.log(myDate.toLocaleTimeString())    //8:28:09 PM
// console.log(myDate.toUTCString())   //Mon, 21 Oct 2024 20:27:43 GMT



// let myCreatedDate = new Date(2025, 0, 5) // Month starts with 0 in javascript.
// console.log(myCreatedDate.toDateString())   //Sun Jan 05 2025

// let myCreatedDate = new Date(2025, 0, 5, 16,30)
// console.log(myCreatedDate.toLocaleString()) //1/5/2025, 4:30:00 PM

// let myCreatedDate = new Date("2025-01-14")
// console.log(myCreatedDate.toLocaleString())     // 1/14/2025, 12:00:00 AM

// let myCreatedDate = new Date("01-14-2025")
// console.log(myCreatedDate.toLocaleString()) // 1/14/2025, 12:00:00 AM
// console.log(myCreatedDate.getTime())    //return in milis.

//timestamps:
// let myTimeStamp = Date.now()
// console.log(myTimeStamp)    // in milis: 1729543273152
// console.log(Math.floor(myTimeStamp/1000))   // in seconds: 1729543273

let newDate=new Date()
// console.log(newDate.getDate()) // only date
// console.log(newDate.getDay())   //1 (represents Monday)

// console.log(newDate.getFullYear())   //2024
console.log(`The date is: ${newDate.toLocaleDateString()} and Time is: ${newDate.toLocaleTimeString()}`)   //The date is: 10/21/2024 and Time is: 8:47:05 PM


