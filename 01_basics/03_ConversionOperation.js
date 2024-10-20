let score1 = "35"
let score2 = "35abc"
let score3 = null   //type = object
let score4 = undefined  //type = undefined
let isPassed = true  //type = boolean

// console.log(typeof isPassed)
// let valueInNumber = Number(isPassed) 
// console.log(typeof valueInNumber)  //number
// console.log(valueInNumber)     //1


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
// let x = 33;
// x = String(x)
// console.log(x);
// console.log(typeof x);


// ***************************** Operations ******************************//
let val = 3
let negativeVal = -val
console.log(negativeVal)   //-3
console.log(5 + 2) //7
console.log(5 - 2) //3
console.log(5 * 2) //10
console.log(5 / 2) //2.5
console.log(5 % 2) //1
console.log(5 ** 2)    //25
console.log("5" + "2") //52 (string concatenation)

console.log("5" + 2 + 2)
/*  first value is string, so converted to string in below way:
    "5"+2 = "52" => "52"+2 = "522"  */

console.log(5 + 2 + "2")   //5+2 = 7 => 7+"2" = "72"

console.log("56" / 7)  //8
console.log(56 / "7")  //8
console.log("22" - 10) //12
console.log(22 - "10") //12
console.log("5" ** 3)  //125
console.log(5 * "3")   //15

//Bitwise operations
console.log(7 ^ 4) //3
console.log(7 & 4) //4
console.log(7 | 4) //7
console.log(~4);    //-5


//Prefix and Postfix
let counter = 10
// let a = counter++
// let a = ++counter
console.log(`a = ${a}, counter = ${counter}`);







