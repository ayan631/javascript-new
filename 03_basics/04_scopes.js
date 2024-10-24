function addOne(){
    const num = 5
    console.log(num+1)
    function addTwo() {
        const anothernum = 10
        console.log(num+anothernum)
    }
    // console.log(anothernum) // undefined
    addTwo()
}
addOne()



/*  A normal js function can be invoked before and after its declaration    */

fun1("invoking fun1 before its declaration.")

function fun1(message){
    console.log(message);
}

fun1("invoking fun1 after its declaration.")



/*  If a js function is declated as function expression,
    then it can not be invoked before its declaration */

// fun2("invoking before declaration.")

const fun2 = function(message){
    console.log(message);
    
}

fun2("invoking fun2 after its declaration.")  //it will work


