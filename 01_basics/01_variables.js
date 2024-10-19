const accId = 122124                //constant
let accEmail = "ayan60@dev.in"      //variable
var accPassword = "12345"           //also variable
accCity = "Burdwan"                 //also variable 
let accState                        //by-default value is undefined 
/*
Prefer not to use var because it has issues with block-scope and functional-scope. 
*/

//accId = 122014    //accId is a constant 
console.table([accId, accEmail, accPassword, accCity, accState])

//formating string
console.log(`Id : ${accId}\nEmail : ${accEmail}\nPassword : ${accPassword}\nCity : ${accCity}\nState : ${accState}`)