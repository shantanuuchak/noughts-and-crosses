import winningChances from "./winning.js";

// DOM Selection
const playerStatus = document.querySelector(".player");
const boxes = document.querySelectorAll(".box");
const newGameBtn = document.querySelector(".btn-reset");

// Game Variables
let player;
let gameGrid;

// Game Logic
const startGame = () => {
  player = "Y";
  gameGrid = new Array(9).fill("");
  newGameBtn.classList.remove("active");
  playerStatus.textContent = player;
};

startGame();

const chances = [];

// Function to handle click
const handleClick = (index) => {
  chances.push(index);
  if (winningChances.includes(chances)) alert("Won!");

  console.log(chances);
};

// Add Event To Every Grid Box
boxes.forEach((e, i) => {
  e.addEventListener("click", () => {
    handleClick(i + 1);
  });
});

// Disable Right Click
document.addEventListener("contextmenu", (event) => event.preventDefault());
