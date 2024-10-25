// Use of for-in loops:-

const languages = ['Python','Ruby','Javascript','C++','Swift']
for (const key in languages) { 
    // key is basically index value in case of array
    // console.log(`key ${key} is for value: ${languages[key]}`)
}


// Array of Objects:-
const courses = [
    {
        name: 'Python',
        price: 499 
    },
    {
        name: 'Java',
        price: 1299
    },
    {
        name: 'Spring Boot',
        price: 999
    }
]
for (const key in courses) {
    // console.log(courses[key])  // print individual object
    // console.log(`${courses[key].name} : ${courses[key].price}/-`)
}



// applying for-in loop over an object:-
const myobj = {
    myName: 'Ayan Bhattacherjee',
    myAge: 26,
    myCourse: 'MCA'
}
for (const key in myobj) {
    // console.log(key);   // it will give only keys
    // console.log(`${key} is ${myobj[key]}`); // you can't write ${myobj.key}
}


// for-in loop over a map:-
const map = new Map()
map.set('Uk', 'United Kingdom')
map.set('IN', 'India')
map.set('FRA', 'France')
map.set('AUS', 'Australia')
map.set('RUS', 'Russia')
console.log(map)

/*    We cannot use a for-in loop to iterate over a Map object in JavaScript. The for-in loop is intended for iterating over the enumerable properties of an object.   */
// for (const key in map.values()) {
//     console.log(key);
// }