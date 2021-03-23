var startPoints = [view.bounds.topLeft, view.bounds.topCenter, view.bounds.topRight, view.bounds.leftCenter, view.bounds.center, view.bounds.rightCenter, view.bounds.bottomLeft, view.bounds.bottomCenter, view.bounds.bottomRight];
var currentWidth, currentHeight, newWidth, newHeight, randX, randY;
var randEndPoints = [];
var lineGroup;
var sizeChangeRatioX, sizeChangeRatioY, vector, currentLine, mousePos;
var linesPerVertex = 5;
var endPoints = [];
var newEndPoints = [];
var endPoint, newEndPoint;
var vectors = [];
var randSpeed = [];

currentWidth = view.size.width;
currentHeight = view.size.height;

project.currentStyle = {
    fillColor: 'yellow',
    strokeColor: '#111BBF',
    strokeWidth: 1
}

// getStartPoints();
getRandPoints();
initiateLines();

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

// initiate the lines with 0 length
function initiateLines () {
  lineGroup = new Group();
  for (var i = 0; i < startPoints.length; i++) {
    for (var j = (i*linesPerVertex); j < (i*linesPerVertex + linesPerVertex); j++) {
      endPoint = new Point(randEndPoints[j]);
      endPoints.push(endPoint);
      newEndPoints.push(endPoint);
      currentLine = new Path.Line(startPoints[i], startPoints[i]);
      lineGroup.addChild(currentLine);
      randSpeed.push(getRandomArbitrary(50,150));
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
    vectors[i] = newEndPoints[i] - lineGroup.children[i].lastSegment.point;
    lineGroup.children[i].lastSegment.point += vectors[i] / randSpeed[i];
    lineGroup.children[i].lastSegment.point += vectors[i] / randSpeed[i];
    if (vectors[i].length < 1) {
      lineGroup.children[i].lastSegment.point = newEndPoints[i];
      lineGroup.children[i].lastSegment.point = newEndPoints[i];
    }
  }
}
