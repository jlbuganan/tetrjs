// Init
let shape = {
  degrees: 0,
  top: 150,
  left: 300,
  moveUnit: 15,
  rotationIndex: 1,
  type: ''
};

// Stats
let xPos = document.querySelector('#xPos');
let yPos = document.querySelector('#yPos');

// Get current shape and set initial position
let currentShape = document.querySelector('#currentShape');
setXandY(shape.left, shape.top);

// Listen for keydown
window.addEventListener('keydown', transformShape);

function transformShape(e) {
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
  setXandY(shape.left, shape.top);
}

function setXandY(x, y) {
  currentShape.style.left = `${x}px`;
  currentShape.style.top = `${y}px`;
  xPos.innerHTML = x;
  yPos.innerHTML = y;
}