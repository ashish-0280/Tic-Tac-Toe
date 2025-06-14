let boxes = document.querySelectorAll(".box");
let turn = true;
let resetButton = document.querySelector("#reset-btn");
let messageContainer = document.querySelector(".msg-container");
let newGame = document.querySelector("#new-btn");
let message = document.querySelector("#msg");
let winningPatterns = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
];
let count = 0;
const disableBoxes = () => {
    boxes.forEach((box) => {
        box.disabled = true;
    })
}
const enableBoxes = () => {
    boxes.forEach((box) => {
        box.disabled = false;
    })
}
let winner = function(){
    messageContainer.classList.remove("hide");
}
const restart = ()=>{
    boxes.forEach((box) => {
        box.innerText = "";
        enableBoxes();
        turn = true;
        messageContainer.classList.add("hide");
        count = 0;
    })
}
let drawGame = () => {
    message.innerText = "Game is drawn!!!";
    messageContainer.classList.remove("hide");
}
let checkWinner = ()=>{
    for(let pattern of winningPatterns) {
        let pos1 = boxes[pattern[0]];
        let pos2 = boxes[pattern[1]];
        let pos3 = boxes[pattern[2]];

        let val1 = pos1.innerText;
        let val2 = pos2.innerText;
        let val3 = pos3.innerText;

        if (val1 !== "" && val1 === val2 && val2 === val3) {
            message.innerText = `Congratulations, Winner is ${val1}`;
            winner(); 
            disableBoxes(); 
            setTimeout(restart, 5000);
        }
    }
    return false;
}

boxes.forEach((box) => {
    box.addEventListener("click", ()=>{
        if(box.innerText != "") return;
        if(turn){
            box.innerText = 'O';
            count++;
            turn = false;
        } else {
            box.innerText = 'X';
            count++;
            turn = true;
        }
        checkWinner();
        if(count == 9){
            drawGame();
            setTimeout(restart, 3000);
        }
    });
});
resetButton.addEventListener("click", ()=>{
    boxes.forEach((box) => {
        box.innerText = "";
        enableBoxes();
        turn = true;
        messageContainer.classList.add("hide");
    })
})
newGame.addEventListener("click", ()=>{
    boxes.forEach((box) => {
        box.innerText = "";
        enableBoxes();
        turn = true;
        messageContainer.classList.add("hide");
    })
})





