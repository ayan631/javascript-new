let score1 = "35"
let score2 = "35abc"
let score3 = null   //type = object
let score4 = undefined  //type = undefined
let isPassed = true  //type = boolean

console.log(typeof isPassed)
let valueInNumber = Number(isPassed) 
console.log(typeof valueInNumber)  //number
console.log(valueInNumber)     //1


/*
    "35" => 33
    "35abc" => NaN (NaN is a special type)
    "abcced" => NaN
    true => 1
    false => 0
    undefined => NaN
    null => 0
*/


// number => String
let x = 33;
x = String(x)
console.log(x);
console.log(typeof x);