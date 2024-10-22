//Arrays in Javascript are not primitive. Arrays are growable in nature

//Array Declarations:
const nums = [1,2,3,4,5]
const names = new Array("Bittu", "Tushar", "Bablu", "Shyam")
// console.log(nums)
// console.log(names.sort())  //default: Ascendind order sort

//Descending order Sort:
// console.log(names.sort((n1, n2) => n1<n2 ? 1:-1))

// console.log(nums.length)   //check size of the array


//Add to and delete element from end: 
// nums.push(6)
// console.log(nums)   
// nums.pop()
// console.log(nums)


//Add to and delete element from beginning:
// nums.unshift(0)
// console.log(nums)
// nums.shift()
// console.log(nums)


console.log(nums.indexOf(4))  //returns index of given element
console.log(nums.indexOf(7))    // returns -1 if not present 

console.log(nums.includes(0))  //return true if exists
console.log(nums.includes(5))

let newNums = nums.join()   //binds all element into String and returns.
console.log(typeof (newNums))   //String
console.log(newNums)


//slice() and splice()
// console.log("A:", nums)
// let subArray1 = nums.slice(1,3)
// console.log(subArray1)
// console.log("B:", nums)

// let subArray2 = nums.splice(1,3)
// console.log(subArray2)
// console.log("C:", nums)




