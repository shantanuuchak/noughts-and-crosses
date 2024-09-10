import winningChances from "./winning.js";

// DOM Selection
const playerStatus = document.querySelector(".player");
const boxes = document.querySelectorAll(".box");
const newGameBtn = document.querySelector(".btn-reset");

// Game Variables
const validPlayers = ["X", "O"];

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

// Function to swap player
const swapPlayer = (currPlayer) => {
  const newPlayer =
    validPlayer[0] == currPlayer ? validPlayers[1] : validPlayers[0];
  return newPlayer;
};

// Function to handle click
const handleClick = (index) => {
  // """
  // Function responsible to
  // 1. Check if the .box is clickable
  // 2. Marks the box value to the current player
  // 3.
  // 4. Invokes togglePlayer()
  // 5. Check who won
  // """
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
