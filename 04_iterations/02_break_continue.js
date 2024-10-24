// break and continue statement:-
for (let index = 1; index <= 10; index++) {
    if(index === 5) {
        console.log(`5 Detected !!`);
        break;
    }
    console.log(`Value: ${index}`);
}

console.log("------------------------------------------------")

for (let i = 1; i <= 10; i++) {
    if(i==5){
        continue;
    }
    console.log(i);
}