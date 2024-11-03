const user = {
    firstName: 'ayan',
    lastName: 'bhatacherjee',
    age: 26,
    email: 'example123@js.com',
    isLoggedIn: true,
    getDetails: function(){
        console.log(`Name: ${this.firstName} | Age: ${this.age} | Email: ${this.email} | LoggedIn: ${this.isLoggedIn}`);
        // this refers to current object.
    }
}   //  user is a object literal.

console.log(`User's Full Name: ${user['firstName'].toUpperCase()} ${user['lastName'].toUpperCase()}`);

user.getDetails();