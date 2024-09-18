// Variables for tracking game state
let currentPlayer = 'X';
let board = ['', '', '', '', '', '', '', '', ''];
let gameActive = true;
const winningConditions = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
];

// DOM elements
const cells = document.querySelectorAll('.cell');
const currentPlayerDisplay = document.getElementById('currentPlayer');
const winnerMessage = document.getElementById('winnerMessage');
const restartBtn = document.getElementById('restartBtn');

// Function to handle cell click
function handleCellClick(event) {
    const clickedCell = event.target;
    const clickedCellIndex = parseInt(clickedCell.getAttribute('data-index'));

    if (board[clickedCellIndex] !== '' || !gameActive) {
        return;
    }

    updateCell(clickedCell, clickedCellIndex);
    checkResult();
}

// Function to update cell with player's move
function updateCell(cell, index) {
    board[index] = currentPlayer;
    cell.innerText = currentPlayer;
}

// Function to check for a win or draw
function checkResult() {
    let roundWon = false;
    
    for (let i = 0; i < winningConditions.length; i++) {
        const [a, b, c] = winningConditions[i];
        if (board[a] === '' || board[b] === '' || board[c] === '') {
            continue;
        }
        if (board[a] === board[b] && board[b] === board[c]) {
            roundWon = true;
            break;
        }
    }

    if (roundWon) {
        displayWinner(currentPlayer);
        gameActive = false;
        return;
    }

    if (!board.includes('')) {
        displayWinner('No one');
        gameActive = false;
        return;
    }

    switchPlayer();
}

// Function to display the winner
function displayWinner(winner) {
    winnerMessage.innerText = winner === 'No one' ? "It's a draw!" : `Player ${winner} wins!`;
}

// Function to switch players
function switchPlayer() {
    currentPlayer = currentPlayer === 'X' ? 'O' : 'X';
    currentPlayerDisplay.innerText = `Player ${currentPlayer}'s turn`;
}

// Function to restart the game
function restartGame() {
    currentPlayer = 'X';
    board = ['', '', '', '', '', '', '', '', ''];
    gameActive = true;
    currentPlayerDisplay.innerText = "Player X's turn";
    winnerMessage.innerText = '';
    cells.forEach(cell => cell.innerText = '');
}

// Event listeners for each cell and the restart button
cells.forEach(cell => cell.addEventListener('click', handleCellClick));
restartBtn.addEventListener('click', restartGame);
