console.log("2" > 1.5)
console.log("05" > 2)

// Try to avoid this type of comparisons
console.log(null > 0)
console.log(null >= 0)
console.log(null == 0)

console.log(undefined > 0)
console.log(undefined == 0)
console.log(undefined < 0)


// === (Strict comparison)
console.log(2 == "2");   // true
// "2" is converted to number first and then only value is compared.   

console.log("2" === 2); // false
// here conversion is restricted. Both datatype and value is compared.



