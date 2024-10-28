console.log("Documen is Loaded!");

// getElementById:-
document.getElementById('heading1').innerHTML='DOM Manipulation'
document.getElementById('heading2').innerText += ' From a beginner student'
document.getElementById('heading2').style='margin-left: 180px'


// getElementsByClassName:-
const items = Array.from(document.getElementsByClassName('items'))
items.forEach((i) => i.style = 'color: green')


//get the tagName of any element:
console.log(document.querySelector('#heading1').tagName)


// fristChild and lastChild and children:
console.log(document.querySelector('.container').firstChild);
console.log(document.querySelector('.container').lastChild);
console.log(document.querySelector('.container').children);



// make an event to change the theme:
document.querySelector('button').addEventListener('click', function(e){
    document.querySelector('body').style.color = '#212121';
    document.querySelector('body').style.backgroundColor = '#fff'; 
}, false)


// accessing the divs with class='box':
const boxes = document.querySelectorAll('.box');
let i=1;
boxes.forEach((box) => {
    box.innerText=`Box: ${i}`
    i++;
})
