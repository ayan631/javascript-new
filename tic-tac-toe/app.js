const boxes = document.querySelectorAll('.box');
const resetBtn = document.querySelector('#reset');

// we have two players in the game: playerX | playerO
let turnO=true  //turn of playerO

// make a 2D Array to store all winning patterns:
let patterns = [
    [0,1,2],
    [0,3,6],
    [0,4,8],
    [1,4,7],
    [2,5,8],
    [2,4,6],
    [3,4,5],
    [6,7,8],
];

function resetGame() {
    let turnO=true;
    for (const box of boxes) {
        box.disabled = false;
        box.innerText="";
    }
    document.getElementById('msg').style.display = 'none';
}

resetBtn.addEventListener('click', (e)=>{
    resetGame();
}, false)


boxes.forEach((box) => {
    box.addEventListener('click', function(){
        if (turnO) {
            // turn of O
            box.innerText = "O";
            turnO = false;
        }
        else{
            // turn of X
            box.innerText = "X";
            turnO = true;
        }

        // once a box is filled, it should be disabled.
        box.disabled = true;
        checkWinner();
    }, false)
});

const checkWinner = () => {
    for(let p of patterns){
        let pos1Value = boxes[p[0]].innerText;
        let pos2Value = boxes[p[1]].innerText;
        let pos3Value = boxes[p[2]].innerText;
        if(pos1Value != '' && pos2Value != '' && pos3Value != ''){
            if(pos1Value === pos2Value && pos2Value === pos3Value){
                showWinner(pos1Value);
            }
        }
    }
}


const showWinner = (winner)=>{
    for (let box of boxes) {
        box.disabled = true;
    }
    let message = document.createElement('p');
    message.setAttribute('id', 'msg');
    message.innerText = `Winner is ${winner}!`;
    document.querySelector('.container').after(message);
}