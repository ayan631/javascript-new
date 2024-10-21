//declaration: 1
let str1 = "Java-Script"

//declaration: 2
let str2 = new String("Language")

// console.log("This tutorial is about "+str1+" Programming "+str2)
// Do  not use this way to print in console


console.log(`This tutorial is about ${str1} Programming ${str2}`)


//Some important functions of String:
console.log(str1.length) //11
console.log(str1.toLowerCase()) //java-script
console.log(str1.charAt(5)) //S
console.log(str1.indexOf('t')) //10
const newstr = str1.concat("-js") // 
console.log(newstr)   // Java-Script-js
const array = newstr.split('-')
console.log(array) // [ 'Java', 'Script', 'js' ]
console.log(array.__proto__)   // object(0)[] => means array object

console.log(newstr.replaceAll('-', ' '))
console.log(newstr.substring(5,11)) // from idx:5 to idx:10 => Script
let slicedstr = str1.slice(-6,-3)   //Scr
console.log(slicedstr)

const name = "      user24@gmail.com        "
console.log(name.length)    //30

console.log(name.trim().length) //16

const correctname = name.replace("user", "ayan")
console.log(correctname.trim()) //ayan24@gmail.com





