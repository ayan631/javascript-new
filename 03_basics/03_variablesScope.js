// global scope
let a = 10
const b = 20
var c = 30      //var is not used due to scope problem
if(true){
    // local scope
    let a = 100
    const b = 200
    var c = 300

    console.log("INNER a: ",a)  //100
    console.log("INNER b: ",b)  //200
    console.log("INNER c: ",c)  //300
}

console.log(a)  //10
console.log(b)  //20
console.log(c)  //300



