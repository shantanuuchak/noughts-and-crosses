import winningChances from "./winning.js";

// DOM Selection
const playerStatus = document.querySelector(".player");
const boxes = document.querySelectorAll(".box");
const newGameBtn = document.querySelector(".btn-reset");

// Game Variables
let player;
let gameGrid;

console.log(winningChances);

// Game Logic
const startGame = () => {
  player = "Y";
  gameGrid = new Array(9).fill("");
  newGameBtn.classList.remove("active");
  playerStatus.textContent = player;
};

startGame();

// Disable Right Click
document.addEventListener("contextmenu", (event) => event.preventDefault());
