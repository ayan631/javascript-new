// alert("Ready?")
// getElementById:-
document.getElementById('heading1').innerHTML='DOM Manipulation'
document.getElementById('heading2').innerHTML='By JavaScript'
document.getElementById('heading2').style='margin-left: 180px'


// getElementsByClassName:-
const items = Array.from(document.getElementsByClassName('items'))
items.forEach((i) => i.style = 'color: green')


// make an event to change the theme:
console.log("Documen is Loaded!");
document.querySelector('button').addEventListener('click', function(e){
    document.querySelector('body').style.color = '#212121';
    document.querySelector('body').style.backgroundColor = '#fff'; 
}, false)

