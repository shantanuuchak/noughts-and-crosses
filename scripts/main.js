import winningChances from "./winning.js";

// DOM Selection
const playerStatus = document.querySelector(".player");
const boxes = document.querySelectorAll(".box");
const newGameBtn = document.querySelector(".btn-reset");

// Game Variables
const validPlayers = ["X", "O"]; // List of supported players
let currPlayer; // Will be either X or O
let gameGrid; // Will contain the current moves

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

// Function to swap player
const swapPlayer = () => {
  const newPlayer =
    validPlayers[0] === currPlayer ? validPlayers[1] : validPlayers[0];
  currPlayer = newPlayer;
  playerStatus.textContent = newPlayer;
};

// Check game winner function
const checkWinner = () => {
  newGameBtn.classList.add("active");
  console.log("Invoked");
};

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
    gameGrid[index] = currPlayer;
    boxes[index].style.cursor = "auto";
    swapPlayer();
    checkWinner();
  }
};

// Add handleClick on click event to every .box
boxes.forEach((box, idx) => {
  box.addEventListener("click", () => {
    handleClick(idx);
  });
});

// Reset game
newGameBtn.addEventListener("click", () => {
  // Setting fresh game state
  startGame();

  // Repainting the boxes
  boxes.forEach((box) => {
    // Setting content to empty
    box.textContent = "";

    // Showing them clickable
    box.style.cursor = "pointer";
  });
});

// Disable right click on website
document.addEventListener("contextmenu", (event) => event.preventDefault());
