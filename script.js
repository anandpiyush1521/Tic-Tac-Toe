// Variables for player's turns, game board, and winning combinations
let currentPlayer = 'X';
let gameBoard = ['', '', '', '', '', '', '', '', ''];
let winningCombinations = [[0, 1, 2], [3, 4, 5], [6, 7, 8], [0, 3, 6], [1, 4, 7], [2, 5, 8], [0, 4, 8], [2, 4, 6]];

// Function to check for a winner
const checkForWinner = () => {
  for (let i = 0; i < winningCombinations.length; i++) {
    if (gameBoard[winningCombinations[i][0]] === currentPlayer && gameBoard[winningCombinations[i][1]] === currentPlayer && gameBoard[winningCombinations[i][2]] === currentPlayer) {
      alert(`Player ${currentPlayer} wins!`);
      resetGame();
    }
  }
}

// Function to reset the game
const resetGame = () => {
  currentPlayer = 'X';
  gameBoard = ['', '', '', '', '', '', '', '', ''];
  let squares = document.querySelectorAll('.square');
  squares.forEach((square) => {
    square.innerHTML = '';
  });
}

// Event listener for clicking on squares
document.querySelectorAll('.square').forEach((square) => {
  square.addEventListener('click', (event) => {
    if (event.target.innerHTML === '') {
      event.target.innerHTML = currentPlayer;
      event.target.classList.add(currentPlayer.toLowerCase());
      gameBoard[event.target.id.slice(1) - 1] = currentPlayer;
      checkForWinner();
      currentPlayer = (currentPlayer === 'X') ? 'O' : 'X';
    }
  });
});

