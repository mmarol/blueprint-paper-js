var gridCols, gridRows, cellWidth, cellHeight;
var startPoint, startDot;
var endPoint;
var endPoints = [];
// var path = new Path();
var center = view.center;
var width = view.size.width;
var height = view.size.height;

// initializePath();
// getRandomPoints();
var end = new Point ((width/2), (height/2));
var startA = new Point (0, 0);
var pathA = new Path.Line(startA, end);
pathA.strokeColor = 'black';
pathA.strokeWidth = 2;
var startB = new Point ((width/2), 0);
var pathB = new Path.Line(startB, end);
pathB.strokeColor = 'red';
pathB.strokeWidth = 2;
var startC = new Point (width, 0);
var pathC = new Path.Line(startC, end);
pathC.strokeColor = 'blue';
pathC.strokeWidth = 2;

for (var i = 0; i < 10; i++) {
  var pathACopy = pathA.clone();
  pathACopy.rotate(getRandomArbitrary(-35, 35), startA);
  pathACopy.scale(getRandomArbitrary(.75, 1.25), pathA.bounds.topLeft);
  var pathBCopy = pathB.clone();
  pathBCopy.rotate(getRandomArbitrary(-35, 35), startB);
  pathBCopy.scale(getRandomArbitrary(.75, 1.25), pathB.bounds. topCenter);
  var pathCCopy = pathC.clone();
  pathCCopy.rotate(getRandomArbitrary(-35, 35), startC);
  pathCCopy.scale(getRandomArbitrary(.75, 1.25), pathC.bounds.topRight);
}

function getRandomArbitrary(min, max) {
    return Math.random() * (max - min) + min;
}

function getRandomPoints() {
  for (var i = 0; i < 9; i++) {
    // for (var j = 0; j < 10; j++) {
      var initialPoint = new Point((width/4), (height/4));
      var randomPoint = initialPoint * Point.random();
      var translatedPoint = randomPoint + center;
      console.log("initiatPoint" + initialPoint);
      console.log("randomPoint" + randomPoint);
      console.log("translatedPoint" + translatedPoint);
      path.add(0,0);
      path.add(translatedPoint);
      // endPoint = new Point(0, i);
      // endPoints.push(endPoint);
    // }
  }
  // console.log(endPoints);
}

function initializePath() {

  gridCols = 3;
  gridRows = 3;
  cellWidth = width / (gridCols - 1);
  cellHeight = height / (gridRows - 1);
  for (var i = 0; i < 9; i++) {
    for (var j = 0; j < 9; j++) {
  		startPoint = new Point((i * cellWidth), (j * cellHeight));
      startDot = new Shape.Circle(startPoint, 20);
      startDot.fillColor = new Color(1, 0, 0);
  	}
	}
}

function drawPath() {

}

function onFrame(event) {

}

// Reposition the path whenever the window is resized:
function onResize(event) {
	// initializePath();
}
