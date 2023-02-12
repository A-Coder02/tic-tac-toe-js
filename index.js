// 1. Basic Setup
// 2. Determine Winner
// 3. Basic AI and winner Notification
// 4. Minmax Alogrithm

var origBoard;
const humanPlayer = "O";
const aiPlayer = "X";
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
  // document.querySelector(".endgame").style.display = "block";
  origBoard = Array.from(new Array(9).keys());
  console.log(origBoard);
  for (let i = 0; i < cells.length; i++) {
    cells[i].innerHTML = "-";
    cells[i].style.removeProperty("background-color");
    cells[i].addEventListener("click", turnClick, { once: true });
  }
}

function turnClick(square) {
  turn(square.target.id, humanPlayer);
}

function turn(squareId, player) {
  console.log(squareId, player);
  origBoard[squareId] = player;
  console.log(document.getElementById(squareId));
  document.getElementById(squareId).innerHTML = player;
}
