// functions: function is treated as a variable in js.

function addition(num1, num2){
    if (typeof(num1) === "number" && typeof(num2) === "number") {
        return num1+num2
    } else {
        return null;
    }
}
console.log(`Addition = ${addition(5, 8)}`) //12
// console.log(`Addition = ${addition(null, 5)}`)
// console.log(`Addition = ${addition('a', 'b')}`)
// console.log(`Addition = ${addition('5', '8')}`)


function subtract(num1, num2){
    console.log(num2-num1);
}

const result = subtract(4,10); 
/* function will be invoked and undefined will be returned from function and assigned to => result  */
console.log(typeof result);  // undefined 


//argument with default value:
function loggedIn(user = "unknown user"){
    return `${user} has logged in.`;
}
console.log(loggedIn("ayan"))
console.log(loggedIn())




