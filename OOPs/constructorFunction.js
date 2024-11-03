/* new keyword is also known as constructor function. It is also used to create object  */

function User(userName, password, isLoggedin){
    this.userName = userName;
    this.password = password;
    this.isLoggedin = isLoggedin;

    return this; //implicitly this will be returned.
}

const user1 = new User("Ayan", 'ayan123', true);
// new is used to create a new instance
const user2 = new User("Aaiswaryya", "aais123", false);
console.log(user1);
console.log(user2);

