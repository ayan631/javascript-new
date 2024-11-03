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
.catch(function (error){
    console.log(error);
})
.finally(function (){
    console.log("This code will be executed regardless of the state of promises.");
})