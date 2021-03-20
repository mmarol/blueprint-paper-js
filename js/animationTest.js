var oldWidth, oldHeight, newWidth, newHeight, randX, randY;
var randEndPoints = [];
var startPoints;
var startPoint, lineA, lineB, lineC;
var dotGroup, lineGroup;
var mousePos = view.center / 2;
var sizeChangeRatioX, sizeChangeRatioY, newVector, line, vector, currentLine;
var endPoints = [];

var center = view.bounds.bottomRight;
oldWidth = view.size.width;
oldHeight = view.size.height;

project.currentStyle = {
    fillColor: 'yellow',
    strokeColor: 'black',
    strokeWidth: 5
}

getStartPoints(oldWidth, oldHeight);
getRandPoints();
drawLines();

function getStartPoints(w, h) {
  startPoints = [[0, 0], [(w/2), 0], [w, 0], [0, (h/2)], [(w/2), (h/2)], [w, (h/2)], [0, h], [(w/2), h], [w, h]];
}

function getRandPoints() {
  for (i = 0; i < 4; i++) {
    randX = getRandomArbitrary((oldWidth/8), (oldWidth*7/8));
    randY = getRandomArbitrary((oldHeight/8), (oldHeight*7/8));
    randEndPoints[i] = [randX, randY];
  }
}

function getRandomArbitrary(min, max) {
    return Math.random() * (max - min) + min;
}

function drawDots () {
  dotGroup = new Group();
  for (var i = 0; i < startPoints.length; i++) {
    dotGroup.addChild(new Shape.Circle(startPoints[i], 20))
  }
}

function drawLines () {
  startPoint = new Point(0, 0);
  lineGroup = new Group();
  for (var i = 0; i < 3; i++) {
    endPoint = new Point(randEndPoints[i]);
    currentLine = new Path.Line(startPoint, startPoint);
    lineGroup.addChild(currentLine);
    endPoints.push(endPoint);
  }
}

function onResize(event) {
  newWidth = view.size.width;
  newHeight = view.size.height;
  sizeChangeRatioX = newWidth/oldWidth;
  sizeChangeRatioY = newHeight/oldHeight;
  for (var i = 0; i < lineGroup.children.length; i++) {
    lineGroup.children[i].lastSegment.point.x = lineGroup.children[i].lastSegment.point.x * sizeChangeRatioX;
    lineGroup.children[i].lastSegment.point.y = lineGroup.children[i].lastSegment.point.y * sizeChangeRatioY;
    endPoints[i].x = endPoints[i].x * sizeChangeRatioX;
    endPoints[i].y = endPoints[i].y * sizeChangeRatioY;
  }
  oldWidth = newWidth;
  oldHeight = newHeight;
}

function onFrame(event) {
  for (var i = 0; i < lineGroup.children.length; i++) {
    vector = endPoints[i] - lineGroup.children[i].lastSegment.point;
    lineGroup.children[i].lastSegment.point += vector / 50;
    lineGroup.children[i].lastSegment.point += vector / 50;
  }
}
