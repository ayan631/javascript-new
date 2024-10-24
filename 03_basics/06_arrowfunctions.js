const addition = (num1, num2) => (num1+num2) // need not to give return statement
console.log(addition(4,7))

const subtract = (num1, num2) => {
    return num1-num2
}
console.log(subtract(10,3))

const student = {
    name: "David",
    course: "Spring Boot",
    fees: 1499,
    show: function() {
        return `name: ${this.name}, course: ${this.course}, fees: ${this.fees}`
    } 
}
console.log(student.show())


const showDetails = (anyObj) => {
    console.log(anyObj.name)
    console.log(anyObj.course)
    console.log(anyObj.fees)
}
showDetails({name:"ayan", course:"javascript", fees:599})