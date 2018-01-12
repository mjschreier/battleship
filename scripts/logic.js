var randomX;
var randomY;
reassignCoordinates();

function fireMissle(displayBoard, board, coordinates) {
  if(board[coordinates.y][coordinates.x] !== e) {
    displayBoard[coordinates.y][coordinates.x] = h; 
  } else {
    displayBoard[coordinates.y][coordinates.x] = m;
  }
  return displayBoard
}

function generateComputerMove(board) {
  while (Math.abs(board[randomY][randomX]) === 1) {
    reassignCoordinates();
  }
  return {
    x: randomX,
    y: randomY
  }
}

function isWon(board) {
  var hits = [];
  board.forEach(array => {
    array.forEach(square => {
      if (square === -1) {
        hits.push(square);
      }
    });
  });
  if(hits.length === 17) {
    return true
  }
  return false
}

function reassignCoordinates() {
  randomX = Math.floor(Math.random() * 10);
  randomY = Math.floor(Math.random() * 10);
}