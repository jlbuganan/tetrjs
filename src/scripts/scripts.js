
// Global variable definitions
let xPos, yPos;
const shapeConfig = {
  left: 0,
  top: 0,
  blockUnit: 15,
  moveUnit: 15,
  rotationIndex: 1,
  shapeTypeIndex: 0
};
const boardConfig = {
  width: Math.floor(window.innerWidth / shapeConfig.blockUnit),
  height: Math.floor(window.innerHeight / shapeConfig.blockUnit)
};

initializeGame();

function initializeGame() {
  // Stats
  xPos = document.querySelector('#xPos');
  yPos = document.querySelector('#yPos');

  // Get current shape, randomize it and set initial position
  setRandomCurrentShape();
  resetShapePosition();

  // Event handlers
  window.addEventListener('keyup', rotateShape);
  window.addEventListener('keydown', moveShape);
  window.addEventListener('resize', resetShapePosition);
}

function setRandomCurrentShape() {
  shapeConfig.shapeTypeIndex = Math.floor(Math.random() * 6);
  shapeConfig.rotationIndex = 0;
  drawShape(shapeConfig.shapeTypeIndex, shapeConfig.rotationIndex);
}

function resetShapePosition() {
  shapeConfig.left = Math.floor(boardConfig.width / 2) * shapeConfig.blockUnit - shapeConfig.blockUnit;
  shapeConfig.top = Math.floor(boardConfig.height / 2) * shapeConfig.blockUnit - shapeConfig.blockUnit;
  setCurrentShapePosition(shapeConfig.left, shapeConfig.top);
}

function drawShape(shapeTypeIndex, rotationIndex) {
  const shapeMatrix = shapeTypes[shapeTypeIndex][rotationIndex].toArray();
  let blockIndex = 1;
  for (var i = 0; i < shapeMatrix.length; i++) {
    for (var j = 0; j < shapeMatrix[i].length; j++) {
      if (shapeMatrix[i][j] === 1) {
        currentBlock = document.querySelector(`#block${blockIndex}`);
        currentBlock.style.left = j * shapeConfig.blockUnit + `px`;
        currentBlock.style.top = i * shapeConfig.blockUnit + `px`;
        blockIndex++;
      }
    }
  }
}

function setCurrentShapePosition(x, y) {
  const currentShape = document.querySelector('#currentShape');
  currentShape.style.left = `${x}px`;
  currentShape.style.top = `${y}px`;

  // Display coordinates
  xPos.innerHTML = x;
  yPos.innerHTML = y;
}

// === EVENT HANDLERS ======================================= //
function rotateShape(e) {
  switch(e.keyCode) {
    case 88: // Rotate Right
      shapeConfig.rotationIndex = (shapeConfig.rotationIndex === 3) ? 0 : shapeConfig.rotationIndex + 1;
      drawShape(shapeConfig.shapeTypeIndex, shapeConfig.rotationIndex);
      break;
    case 90: // Rotate Left
      shapeConfig.rotationIndex = (shapeConfig.rotationIndex === 0) ? 3 : shapeConfig.rotationIndex - 1;
      drawShape(shapeConfig.shapeTypeIndex, shapeConfig.rotationIndex);
      break;
  }
}

function moveShape(e) {
  switch(e.keyCode) {
    case 37: // Move Left
      shapeConfig.left -= (shapeConfig.left <= 0) ? 0 : shapeConfig.moveUnit;
      break;
    case 38: // Move Up
      shapeConfig.top -= (shapeConfig.top <= 0) ? 0 : shapeConfig.moveUnit;
      break;
    case 39: // Move Right
      shapeConfig.left += (shapeConfig.left >= (window.visualViewport.width - shapeConfig.moveUnit * 3)) ? 0 : shapeConfig.moveUnit;
      break;
    case 40: // Move Down
      shapeConfig.top += (shapeConfig.top >= (window.visualViewport.height - shapeConfig.moveUnit * 3)) ? 0 : shapeConfig.moveUnit;
      break;
    default:
      break;
  }
  setCurrentShapePosition(shapeConfig.left, shapeConfig.top);
}
