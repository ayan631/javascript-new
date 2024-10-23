// Way of passing parameters:
// function cartPrice(...num){     //using rest operator for n arguments//
//     return num  //returns an array
// }
// console.log(cartPrice(200, 450, 500, 750));


// function cartPrice(val1, val2, ...rest){
//     return rest
// }
// console.log(cartPrice(200, 450, 500, 750));



//object as function argument:
const user = {
    username : "ayanbhattacherjee",
    time: new Date().toLocaleTimeString()
}

function fun1(userObject){
    console.log(`UserName:${userObject.username}  Time:${userObject.time}`);
    
}

//invoke fun1:
fun1(user); //UserName:ayanbhattacherjee  Time:3:38:01 PM

fun1({
    //with given data
    username: "aaiswaryyakundu",
    time: new Date().toLocaleTimeString()
})  //UserName:aaiswaryyakundu  Time:3:38:01 PM


//Array as function argument:
function showMinMax(array){
    //return min & max value from array
    return [Math.min(...array), Math.max(...array)]
}
const [min, max] = showMinMax(new Array(100,400,500,200,300));
//destructuring the returned array
console.log(`Min = ${min} and Max = ${max}`)
