// while loop:-
let i = 1
while (i <= 10) {
    // console.log(i)
    i+=2
}


// while loop on array:-
const myArray = ['Ironman','Superman','Hulk','Stranger']
let idx=0
while (idx < myArray.length) {
    console.log(myArray[idx])
    idx++
}


// do-while loop:-
let score = 100
do {
    console.log(`Score is: ${score}`)
    score-=10 
} while (score >= 10);