// // Create a Paper.js Path to draw a line into it:
// var path = new Path();
// // Give the stroke a color
// path.strokeColor = 'black';
// path.add(new Point(100, 100));
// path.add(new Point(100, 100));
// // Move to start and draw a line from there
// // path.moveTo(start);
// // Note the plus operator on Point objects.
// // PaperScript does that for us, and much more!
// function onFrame(event) {
//     // Your animation code goes in here
//     if (event.count < 101) {
//         path.segments[1].point += new Point(20, 20);
//     }
// }




var oldWidth, oldHeight, newWidth, newHeight, randX, randY;
var randEndPoints = [];
var startPoints;
var startPoint, lineA, lineB, lineC;
var dotGroup, lineGroup;
var mousePos = view.center / 2;
var sizeChangeRatioX, sizeChangeRatioY, newVector, line;

var center = view.bounds.bottomRight;
oldWidth = view.size.width;
oldHeight = view.size.height;

project.currentStyle = {
    fillColor: 'yellow',
    strokeColor: 'red',
    strokeWidth: 5
}

var circlePath = new Path.Circle(center, 100);
circlePath.style = {
	fillColor: 'white',
	strokeColor: 'red'
};

getStartPoints(oldWidth, oldHeight);
getRandPoints();
drawDots();
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
  line.strokeColor = 'yellow';
  line.fullySelected = true;
  console.log(line.lastSegment.point);
}

function onResize(event) {
  newWidth = view.size.width;
  newHeight = view.size.height;
  getStartPoints(newWidth, newHeight);
  sizeChangeRatioX = newWidth/oldWidth;
  sizeChangeRatioY = newHeight/oldHeight;
  lineGroup.children[0].lastSegment.point.x = lineGroup.children[0].lastSegment.point.x * sizeChangeRatioX;
  lineGroup.children[0].lastSegment.point.y = lineGroup.children[0].lastSegment.point.y * sizeChangeRatioY;
  oldWidth = newWidth;
  oldHeight = newHeight;
  circlePath.position = view.bounds.bottomRight;
}

function mapPoint(point) {
  // point[0] = point[0].map(point, 0, oldWidth, 0, newWidth);
  // point[1] = point[1].map(point, 0, oldHeight, 0, newHeight);
  point = point.map(point, 0, oldHeight, 0, newHeight);
}

function onMouseDown(event) {
  console.log(event.point);
}

function onFrame(event) {
  endPos = randEndPoints[3];
  currentPos = line.lastSegment.point;
  var vector = endPos - currentPos;
  currentPos += vector / 30;
  // console.log(endPos);
  // console.log(currentPos);
  // console.log(vector);

  // if (vector.length < 5) {
  //   vector.length = 0;
  // }
}
