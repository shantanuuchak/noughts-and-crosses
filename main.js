// DOM Selection
const playerStatus = document.querySelector(".status");
const boxes = document.querySelectorAll(".box");
const newGameBtn = document.querySelector(".btn-reset");

// Game Variables
let player;
let gameGrid;
const winningChances = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
  [1, 4, 7],
  [2, 5, 8],
  [3, 6, 9],
  [1, 5, 9],
  [3, 5, 7],
];

// Disable Right Click
document.addEventListener("contextmenu", (event) => event.preventDefault());
