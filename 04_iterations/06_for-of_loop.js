//for-of loop:-
const nums = [10,20,30,40]
for (const num of nums) {
    console.log(num);
}

// for-of with String:
const greetings = "Hello World"
for (const letter of greetings) {
    if (letter===" ") {
        continue
    }
    console.log(letter);
}

// for-of with array of objects:
const myArrayObj =[
    {
        name: 'Hritwik',
        employer: "TCS"
    },
    {
        name: 'Ayan',
        employer: "Deloitte"
    },
    {
        name: 'Sumit',
        employer: "Accenture"
    }
]

for (const obj of myArrayObj) {
    // console.log(obj);
    console.log(`${obj['name']} is employee of:  ${obj['employer']}`);
    
}