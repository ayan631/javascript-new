function one(){
    two()
    console.log(1)
}
function two() {
    three()
    console.log(2)
}
function three() {
    console.log(3)
}

one()   // 3 2 1  
two()   // 3 2
three() // 3
