// generate a random color:
const randomColor = function () {
    const hexCode = "0123456789ABCDEF"
    let color = '#'
    for (let i = 0; i < 6; i++) {
        color += hexCode[Math.floor(Math.random() * 16)]
    }
    return color
}

function bgColor(){
    document.body.style.backgroundColor = randomColor();
}
// console.log(randomColor());
let interval_Id
const startChangingColor = function () {
    if (!interval_Id) {
        interval_Id = setInterval(bgColor, 1000);    
    }
}

const stopChangingColor = function () {
    clearInterval(interval_Id);
    interval_Id =null;
}

document.querySelector('#start').addEventListener('click', startChangingColor);
document.querySelector('#stop').addEventListener('click', stopChangingColor);