let boxes = document.querySelectorAll(".box");
let resetbtn = document.querySelector("#reset");
let newGamebtn = document.querySelector("#newGame");
let msgContainer = document.querySelector(".msg-container");
let winMsg = document.querySelector("#winMsg");
let aman = "aman";

let turn0 = true;

const winPatterns = [
    [0,1,2],
    [3,4,5],
    [6,7,8],
    [0,3,6],
    [1,4,7],
    [2,5,8],
    [0,4,8],
    [2,4,6]
];

const resetGame = () => {
    turn0 = true;
    enableBoxes();
    msgContainer.classList.add("hide");
}

boxes.forEach((box) => {
    box.addEventListener("click", () => {
        if (turn0){ //player0
            box.innerText = "0";
            turn0 = false;
        }else{  //playerX
            box.innerText = "X";
            turn0 = true;
        }
        box.disabled = true; 

        checkWinner();
    })
})

const disableBoxes = () => {
    for (let box of boxes){
        box.disabled = true;
    }
}

const enableBoxes = () => {
    for (let box of boxes){
        box.disabled = false;
        box.innerText = ""
    }
}

const showWinner = (winner) => {
    winMsg.innerText = `CONGRATULATIONS!, WINNER IS ${winner}`;
    msgContainer.classList.remove("hide");
}


const checkWinner = () => {
    for (let patterns of winPatterns){
        let pos1Val = boxes[patterns[0]].innerText;
        let pos2Val = boxes[patterns[1]].innerText;
        let pos3Val = boxes[patterns[2]].innerText;

        if (pos1Val != "" && pos2Val != "" && pos3Val != ""){
            if(pos1Val === pos2Val && pos2Val === pos3Val){
                showWinner(pos1Val);
                disableBoxes();
            }
        }
    }
}

newGamebtn.addEventListener("click", resetGame);
resetbtn.addEventListener("click", resetGame);