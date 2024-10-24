// for loop:-
for (let i = 1; i <= 10; i++) {
    const element = i
    // console.log(element)
}


// nested for loop:-
for (let i = 1; i <= 10; i++) {
    // console.log("Outer Loop Value: " + i);
    
    for (let j = 1; j <=10 ; j++) {
        // console.log(`${i} * ${j} = ${i*j}`);
    }
}


// for loop on array:-
const myArray = ['Ironman','Superman','Hulk','Stranger']
// myArray.forEach(name => console.log(name));
for (let idx = 0; idx < myArray.length; idx++) {
    console.log(myArray[idx]);
}