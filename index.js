// 1. Basic Setup
// 2. Determine Winner
// 3. Basic AI and winner Notification
// 4. Minmax Alogrithm

let board;
const HUMAN_PLAYER = "O";
const AI_PLAYER = "X";
let isHuman = true;
const WIN_COMBOS = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 8, 8],
  [0, 3, 6],
  [1, 4, 8],
  [2, 5, 8],
  [0, 4, 8],
  [2, 4, 6],
];

const cells = document.querySelectorAll(".cell");

startGame();

function startGame() {
  //   document.querySelector(".endgame").style.display = "block";
  board = Array.from(Array(9).keys());

  for (let i = 0; i < cells.length; i++) {
    cells[i].innerHTML = "";
    cells[i].style.removeProperty("background-color");
    cells[i].addEventListener("click", turnClick, false);
  }
}

function turnClick(square) {
  console.log(square.target.id);
  square.target.innerHTML = isHuman ? HUMAN_PLAYER : AI_PLAYER;
  isHuman = !isHuman;
  whoWin(square.target.id, isHuman);
}

function whoWin(id,isHuman) {
    
}
