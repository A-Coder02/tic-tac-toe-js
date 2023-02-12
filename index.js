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
  [6, 7, 8],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  [0, 4, 8],
  [2, 4, 6],
];

const cells = document.querySelectorAll(".cell");

startGame();

function startGame() {
  // document.querySelector(".endgame").style.display = "block";
  origBoard = Array.from(new Array(9).keys());
  // console.log(origBoard);
  for (let i = 0; i < cells.length; i++) {
    cells[i].innerHTML = " ";
    cells[i].style.removeProperty("background-color");
    cells[i].addEventListener("click", turnClick, { once: true });
  }
}

function turnClick(square) {
  turn(square.target.id, humanPlayer);
}

function turn(squareId, player) {
  origBoard[squareId] = player;
  document.getElementById(squareId).innerHTML = player;

  let gameWon = checkWin(origBoard, player);
  console.log(gameWon);
  if (gameWon) gameOver(gameWon);
}

function checkWin(board, player) {
  let plays = board.reduce((a, e, i) => (e === player ? a.concat(i) : a), []);
  let gameWon = null;

  for (let [index, win] of WIN_COMBOS.entries()) {
    const isTrue = win.every((elt) => plays.includes(elt));
    if (isTrue) {
      gameWon = { index, player };
    }
  }
  return gameWon;
}

function gameOver(gameWon) {
  for (let index of WIN_COMBOS[gameWon.index]) {
    document.getElementById(index).style.backgroundColor =
      gameWon.player == humanPlayer ? "blue" : "red";
  }

  for (let i = 0; i < cells.length; i++) {
    cells[i].removeEventListener("click", turnClick);
  }
}
