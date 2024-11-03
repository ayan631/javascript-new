// first promise:
let promise1 = new Promise(function (resolve, reject) {
    // Do an asynchronous task: DB calls, file read, Network call etc...
    setTimeout(function(){
        console.log("Asynchronous Task is completed successfully !");
        resolve();
    }, 2000);
})     // creating a new promise object.

promise1.then(function() {
    console.log('Promise consumed !');
})


// second promise:
let promise2 = new Promise(function (resolve, reject) {
    setTimeout(function() {
        resolve({username: 'ayan', useremail: 'ayan@example.com'}) 
    },2000);
})

promise2.then(function (user) {
    console.log(`Name = ${user.username};  Email = ${user.useremail}`);
})


// third promise:
let promise3 = new Promise((resolve, reject)=>{
    setTimeout(() => {
        let error = true
        if (!error) {
            resolve('Database is connected successfully !!')
        }
        else {
            reject('Oops! Something went wrong !')
        }
    }, 2000)
}).then((result) => {
    console.log(result)
}).catch((error) => {
    console.log(error)
}).finally(() => {
    console.log("The promise is either resolved or rejected.")    
})



// Fourth promise:
let promise4 = new Promise((resolve, reject)=>{
    setTimeout(()=>{
        let err = true
        if(!err){
            resolve({username:'ayan', password:'12345'})
        }else{
            reject('ERROR: JS went wrong!')
        }
    }, 2000)
})

// we can also use async-await keywords to handle resolved promises but the only thing is we can not handle rejected promises directly. So, use try-catch block.
async function consumePromise4() {
    try{
        const response = await promise4; //because promise4 is an object
        console.log(response)
    }catch(error){
        console.log(error)
    } 
}

consumePromise4()
