var oldWidth, oldHeight, newWidth, newHeight, randX, randY;
var randEndPoints = [];
var startPoints;
var startPoint, lineA, lineB, lineC;
var dotGroup, lineGroup;
var mousePos = view.center / 2;
var sizeChangeRatioX, sizeChangeRatioY, newVector, line, vector;

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
    lineGroup.addChild(new Path.Line(startPoint, endPoint));
  }
  endPoint = new Point(randEndPoints[3]);
  line = new Path.Line(startPoint, startPoint);
  line.strokeColor = 'red';
  line.fullySelected = true;
}

function onResize(event) {
  newWidth = view.size.width;
  newHeight = view.size.height;
  getStartPoints(newWidth, newHeight);
  sizeChangeRatioX = newWidth/oldWidth;
  sizeChangeRatioY = newHeight/oldHeight;
  lineGroup.children[0].lastSegment.point.x = lineGroup.children[0].lastSegment.point.x * sizeChangeRatioX;
  lineGroup.children[0].lastSegment.point.y = lineGroup.children[0].lastSegment.point.y * sizeChangeRatioY;
  line.lastSegment.point.x = line.lastSegment.point.x * sizeChangeRatioX;
  line.lastSegment.point.y = line.lastSegment.point.y * sizeChangeRatioY;
  endPoint.x = endPoint.x * sizeChangeRatioX;
  endPoint.y = endPoint.y * sizeChangeRatioY;
  oldWidth = newWidth;
  oldHeight = newHeight;
}

function onFrame(event) {
  vector = endPoint - line.lastSegment.point;
  line.lastSegment.point += vector / 50;
}
