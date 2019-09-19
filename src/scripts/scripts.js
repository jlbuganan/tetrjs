
// Global variable definitions
let currentShape;
let xPos, yPos;

// Constants
const shape = {
  left: 0,
  top: 0,
  blockUnit: 15,
  moveUnit: 15,
  rotationIndex: 1
};
const board = {
  width: window.innerWidth,
  height: window.innerHeight
};
const shapeTypes = [ 't', 'i', 'j', 'l', 's', 'z', 'o' ];

initializeGame();

function initializeGame() {
  // Stats
  xPos = document.querySelector('#xPos');
  yPos = document.querySelector('#yPos');

  // Get current shape, randomize it and set initial position
  currentShape = document.querySelector('#currentShape');
  setRandomCurrentShape();
  resetShapePosition();

  // Event handlers
  window.addEventListener('keydown', transformShape);
  window.addEventListener('resize', resetShapePosition);
}

function setRandomCurrentShape() {
  randomIndex = Math.floor(Math.random() * 6);
  currentShape.classList.remove(shapeTypes.join(','));
  currentShape.classList.add(shapeTypes[randomIndex]);
}

function resetShapePosition() {
  board.width = window.innerWidth;
  board.height = window.innerHeight;
  shape.left = Math.floor(Math.floor(board.width / 2) / shape.blockUnit) * shape.blockUnit - shape.blockUnit;
  shape.top = Math.floor(Math.floor(board.height / 2) / shape.blockUnit) * shape.blockUnit - shape.blockUnit;
  setCurrentShapePos(shape.left, shape.top);
}

function transformShape(e) {
  console.log(e.keyCode);
  switch(e.keyCode) {
    case 88: // Rotate Right
      currentShape.classList.remove(`rot-${shape.rotationIndex}`);
      shape.rotationIndex = (shape.rotationIndex === 4) ? 1 : shape.rotationIndex + 1;
      currentShape.classList.add(`rot-${shape.rotationIndex}`);
      break;
    case 90: // Rotate Left
      currentShape.classList.remove(`rot-${shape.rotationIndex}`);
      shape.rotationIndex = (shape.rotationIndex === 1) ? 4 : shape.rotationIndex - 1;
      currentShape.classList.add(`rot-${shape.rotationIndex}`);
      break;
    case 37: // Move Left
      shape.left -= (shape.left <= 0) ? 0 : shape.moveUnit;
      break;
    case 38: // Move Up
      shape.top -= (shape.top <= 0) ? 0 : shape.moveUnit;
      break;
    case 39: // Move Right
      shape.left += (shape.left >= (window.visualViewport.width - shape.moveUnit * 3)) ? 0 : shape.moveUnit;
      break;
    case 40: // Move Down
      shape.top += (shape.top >= (window.visualViewport.height - shape.moveUnit * 3)) ? 0 : shape.moveUnit;
      break;
    default:
      break;
  }
  setCurrentShapePos(shape.left, shape.top);
}

function setCurrentShapePos(x, y) {
  currentShape.style.left = `${x}px`;
  currentShape.style.top = `${y}px`;
  xPos.innerHTML = x;
  yPos.innerHTML = y;
}