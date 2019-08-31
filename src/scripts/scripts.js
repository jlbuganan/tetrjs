// Init
let shape = {
  degrees: 0,
  top: 150,
  left: 300,
  moveUnit: 15,
  rotationUnit: 90
};

// Get shape
let shape1 = document.querySelector('#shape1');
let xPos = document.querySelector('#xPos');
let yPos = document.querySelector('#yPos');
window.addEventListener('keydown', transformShape);
setXandY();

function transformShape(e) {
  switch(e.keyCode) {
    case 88: // Rotate Left
      rotateShape(shape.degrees += shape.rotationUnit);
      break;
    case 90: // Rotate Right
      rotateShape(shape.degrees -= shape.rotationUnit);
      break;
    case 37: // Move Left
      shape.left -= (shape.left <= 0) ? 0 : shape.moveUnit;
      moveShape('Left', shape.left);
      break;
    case 38: // Move Up
      shape.top -= (shape.top <= 0) ? 0 : shape.moveUnit;
      moveShape('Top', shape.top);
      break;
    case 39: // Move Right
      shape.left += (shape.left >= (window.visualViewport.width - shape.moveUnit * 3)) ? 0 : shape.moveUnit;
      moveShape('Left', shape.left);
      break;
    case 40: // Move Down
      shape.top += (shape.top >= (window.visualViewport.height - shape.moveUnit * 3)) ? 0 : shape.moveUnit;
      moveShape('Top', shape.top);
      break;
    default:
      break;
  }
  setXandY();
}

function rotateShape(degrees) {
  document.documentElement.style.setProperty(`--shapeDegrees`, `${degrees}deg`);
}

function moveShape(origin, newPos) {
  document.documentElement.style.setProperty(`--shape${origin}`, `${newPos}px`);
}

function setXandY() {
  xPos.innerHTML = shape.left;
  yPos.innerHTML = shape.top;
}