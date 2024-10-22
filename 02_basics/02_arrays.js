let arr1 = [1,2,3,4]
let arr2 = [5,6,7]

// arr1.push(arr2)
// console.log(arr1)    // [1, 2, 3, 4, [ 5, 6, 7 ]]

// const newarr = arr1.concat(arr2)
// console.log(newarr)  //[ 1, 2, 3, 4, 5, 6, 7 ]


// const newarr = [...arr1, ...arr2]   //using spread operator
// console.log(newarr)  

// let another = newarr.join()     //returns a String object
// console.log(typeof(another))    //String


// console.log(Array.isArray("Ayan"))
// console.log(Array.isArray(arr1))


const namearray = Array.from("Ayan")
console.log(namearray)  // [ 'A', 'y', 'a', 'n' ]


let score1 = 100
let score2 = 200
let score3 = 275
let score4 = 300

let allScores = Array.of(score1, score2, score3, score4)
console.log(allScores)  //[ 100, 200, 275, 300 ]




