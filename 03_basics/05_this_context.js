//this refers to current context or values.
function show() {
    console.log(this)
    // this generally holds object of Global Execusion Context 
}
show()

function anotherShow() {
    let num = 100
    // console.log(this.num)
    /*  We can't use this in functional context.  */
    console.log(num); 
}
anotherShow()


// Use cases of this:-
const userDetails = {
    name: "username",
    isLoggedIn: false,
    show: function() {
        // this holds current context
        console.log(`Name = ${this.name}, IsLoggedIn = ${this.isLoggedIn}`)
    }
}

userDetails.show()

//changing object's default properties
userDetails.name="Ayan Bhattacherjee"
userDetails.isLoggedIn=true

userDetails.show()
