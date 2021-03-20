var startPoints = [view.bounds.topLeft, view.bounds.topCenter, view.bounds.topRight, view.bounds.leftCenter, view.bounds.center, view.bounds.rightCenter, view.bounds.bottomLeft, view.bounds.bottomCenter, view.bounds.bottomRight];
var currentWidth, currentHeight, newWidth, newHeight, randX, randY;
var randEndPoints = [];
var lineGroup;
var sizeChangeRatioX, sizeChangeRatioY, vector, currentLine;
var linesPerVertex = 5;
var endPoints = [];

var center = view.bounds.bottomRight;
currentWidth = view.size.width;
currentHeight = view.size.height;

project.currentStyle = {
    fillColor: 'yellow',
    strokeColor: 'blue',
    strokeWidth: 2
}

// getStartPoints();
getRandPoints();
initiateLines();

// function getStartPoints() {
//   startPoints = [view.bounds.topLeft, view.bounds.topCenter, view.bounds.topRight, view.bounds.leftCenter, view.bounds.center, view.bounds.rightCenter, view.bounds.bottomLeft, view.bounds.bottomCenter, view.bounds.bottomRight];
// }

// Create and array of random coordinates
function getRandPoints() {
  for (i = 0; i < linesPerVertex * 9; i++) {
    randX = getRandomArbitrary((currentWidth/8), (currentWidth*7/8));
    randY = getRandomArbitrary((currentHeight/8), (currentHeight*7/8));
    randEndPoints[i] = [randX, randY];
  }
}

// generate a random number between the min and max values
function getRandomArbitrary(min, max) {
    return Math.random() * (max - min) + min;
}

// Draw circles at each of the 9 points on the 2x2 grid
// function drawDots () {
//   dotGroup = new Group();
//   for (var i = 0; i < startPoints.length; i++) {
//     dotGroup.addChild(new Shape.Circle(startPoints[i], 20))
//   }
// }

// initiate the lines with 0 length
function initiateLines () {
  lineGroup = new Group();
  for (var i = 0; i < startPoints.length; i++) {
    for (var j = (i*linesPerVertex); j < (i*linesPerVertex + linesPerVertex); j++) {
      endPoint = new Point(randEndPoints[j]);
      endPoints.push(endPoint);
      currentLine = new Path.Line(startPoints[i], startPoints[i]);
      lineGroup.addChild(currentLine);
    }
  }
}

function onResize(event) {
  newWidth = view.size.width;
  newHeight = view.size.height;
  sizeChangeRatioX = newWidth/currentWidth;
  sizeChangeRatioY = newHeight/currentHeight;
  for (var i = 0; i < lineGroup.children.length; i++) {
    lineGroup.children[i].lastSegment.point.x = lineGroup.children[i].lastSegment.point.x * sizeChangeRatioX;
    lineGroup.children[i].lastSegment.point.y = lineGroup.children[i].lastSegment.point.y * sizeChangeRatioY;
    lineGroup.children[i].firstSegment.point.x = lineGroup.children[i].firstSegment.point.x * sizeChangeRatioX;
    lineGroup.children[i].firstSegment.point.y = lineGroup.children[i].firstSegment.point.y * sizeChangeRatioY;
    endPoints[i].x = endPoints[i].x * sizeChangeRatioX;
    endPoints[i].y = endPoints[i].y * sizeChangeRatioY;
  }
  currentWidth = newWidth;
  currentHeight = newHeight;
}

function onFrame(event) {
  for (var i = 0; i < lineGroup.children.length; i++) {
    vector = endPoints[i] - lineGroup.children[i].lastSegment.point;
    lineGroup.children[i].lastSegment.point += vector / 50;
    lineGroup.children[i].lastSegment.point += vector / 50;
  }
}