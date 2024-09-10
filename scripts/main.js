import winningChances from "./winning.js";

// DOM Selection
const playerStatus = document.querySelector(".player");
const boxes = document.querySelectorAll(".box");
const newGameBtn = document.querySelector(".btn-reset");

// Game Variables
const validPlayers = ["X", "O"];
let currPlayer;
let gameGrid;

// Game Logic
const startGame = () => {
  // Setting current player to random
  currPlayer = validPlayers[Math.floor(Math.random() * 2)];

  // Filling gameGrid with empty 9 strings
  gameGrid = new Array(9).fill("");

  // Removing active class from newGameBtn
  newGameBtn.classList.remove("active");

  // Updating to show the current playerStatus
  playerStatus.textContent = currPlayer;
};

startGame();

const chances = [];

// Function to swap player
const swapPlayer = () => {
  const newPlayer =
    validPlayers[0] === currPlayer ? validPlayers[1] : validPlayers[0];
  currPlayer = newPlayer;
  playerStatus.textContent = newPlayer;
};

// Check game winner function
const checkWinner = () => {
  const winner = winningChances.some((el, idx) => {
    el.length === gameGrid.length &&
      el.every((el, idx) => el === gameGrid[idx]);
  });
  console.log(winner);
};

// Function to handle click
const handleClick = (index) => {
  // """
  // Function responsible to
  // 1. Check if the .box is clickable
  // 2. Makes the box unclickable
  // 3. Adds the current Player to the box
  // 4. Invokes togglePlayer()
  // 5. Check who won
  // """
  if (gameGrid[index] === "") {
    boxes[index].textContent = currPlayer;
    gameGrid[index] = playerStatus;
    swapPlayer();
    checkWinner();
  }
};

// Add click event to every box
boxes.forEach((e, i) => {
  e.addEventListener("click", () => {
    handleClick(i);
  });
});

// Disable right click on website
document.addEventListener("contextmenu", (event) => event.preventDefault());
