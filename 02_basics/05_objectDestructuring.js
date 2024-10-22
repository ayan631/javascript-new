//Destructuring of Objects:
const newCourse = {
    id: 101,
    name: "JavaScript",
    price: "999",
    instructor: "Ayan Bhattacherjee"
}
// console.log(newCourse.instructor)
// const {instructor: tutor} = newCourse   // alias of instructor is tutor
// console.log(tutor) // object is destructured

const {id:courseId, name: courseName, price: fees} = newCourse //destructured
console.log(courseId, courseName, fees)

//Array Destructuring:
const array = new Array(1,2,3,4,5)
// const [a,b,c] = array
// const [, , a, , b] = array
const [, a, ...b] = array
console.log(`a = ${a} ; b = ${b}`)


/*-------------------------------------------------------------------------------*/

/*  APIs: Objects are usually sent or fetched through different API calls in
    JSON format. */

// {
//     "id": 10012,
//     "userName": "ayanbhattacherjee",
//     "url": "https://www.github.com/login"
// }