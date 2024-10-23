function user(){
    let name="ayan"
    function task() {
        let subject = "javascript"
        console.log(name, subject)
    }
    // console.log(subject) // undefined
    task()
}

user()

fun1()
function fun1(){
    console.log("inside fun1");
}


// fun2()  // undefined 
const fun2 = function(){
    console.log("inside fun2");
    
}
fun2()  //it will work

/* 
    Normal function can be invoked before declaration(e.g.: fun1).
    but if a function is defined and it is stored in a variable, then we can not use that variable before the declaration(e.g.: fun2).
*/
