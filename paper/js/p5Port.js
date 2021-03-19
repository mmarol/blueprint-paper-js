
var oldWidth, oldHeight, newWidth, newHeight, randX, randY;
var randEndPoints = [];
var startPoints;

var center = view.center;
oldWidth = view.size.width;
oldHeight = view.size.height;

console.log(oldWidth);
console.log(oldHeight);

getStartPoints(oldWidth, oldHeight);
console.log(startPoints);
getRandPoints();
console.log(randEndPoints);
drawLines();

function getStartPoints(w, h) {
  startPoints = [[0, 0], [(w/2), 0], [w, 0], [0, (h/2)], [(w/2), (h/2)], [w, (h/2)], [0, h], [(w/2), h], [w, h]];
}

function getRandPoints() {
  for (i = 0; i < 45; i++) {
    randX = getRandomArbitrary((oldWidth/8), (oldWidth*7/8));
    randY = getRandomArbitrary((oldHeight/8), (oldHeight*7/8));
    randEndPoints[i] = [randX, randY];
  }
}

function getRandomArbitrary(min, max) {
    return Math.random() * (max - min) + min;
}

function drawLines () {
  var background = new Shape.Rectangle(new Point(startPoints[0][0], startPoints[0][1]), oldWidth, oldHeight);
  background.fillColor = 'white';
  for (j = 0; j < 5; j++) {
      var startA = new Point(startPoints[0][0], startPoints[0][1]);
      var endA = new Point(randEndPoints[j][0], randEndPoints[j][1]);
      var pathA = new Path.Line(startA, endA);
      pathA.strokeColor = 'blue';
      pathA.strokeWidth = 2;
  }
  for (j = 4; j < 10; j++) {
      var startA = new Point(startPoints[1][0], startPoints[1][1]);
      var endA = new Point(randEndPoints[j][0], randEndPoints[j][1]);
      var pathA = new Path.Line(startA, endA);
      pathA.strokeColor = 'blue';
      pathA.strokeWidth = 2;
  }
  for (j = 9; j < 15; j++) {
      var startA = new Point(startPoints[2][0], startPoints[2][1]);
      var endA = new Point(randEndPoints[j][0], randEndPoints[j][1]);
      var pathA = new Path.Line(startA, endA);
      pathA.strokeColor = 'blue';
      pathA.strokeWidth = 2;
  }
  for (j = 14; j < 20; j++) {
      var startA = new Point(startPoints[3][0], startPoints[3][1]);
      var endA = new Point(randEndPoints[j][0], randEndPoints[j][1]);
      var pathA = new Path.Line(startA, endA);
      pathA.strokeColor = 'blue';
      pathA.strokeWidth = 2;
  }
  for (j = 19; j < 25; j++) {
      var startA = new Point(startPoints[4][0], startPoints[4][1]);
      var endA = new Point(randEndPoints[j][0], randEndPoints[j][1]);
      var pathA = new Path.Line(startA, endA);
      pathA.strokeColor = 'blue';
      pathA.strokeWidth = 2;
  }
  for (j = 24; j < 30; j++) {
      var startA = new Point(startPoints[5][0], startPoints[5][1]);
      var endA = new Point(randEndPoints[j][0], randEndPoints[j][1]);
      var pathA = new Path.Line(startA, endA);
      pathA.strokeColor = 'blue';
      pathA.strokeWidth = 2;
  }
  for (j = 29; j < 35; j++) {
      var startA = new Point(startPoints[6][0], startPoints[6][1]);
      var endA = new Point(randEndPoints[j][0], randEndPoints[j][1]);
      var pathA = new Path.Line(startA, endA);
      pathA.strokeColor = 'blue';
      pathA.strokeWidth = 2;
  }
  for (j = 34; j < 40; j++) {
      var startA = new Point(startPoints[8][0], startPoints[8][1]);
      var endA = new Point(randEndPoints[j][0], randEndPoints[j][1]);
      var pathA = new Path.Line(startA, endA);
      pathA.strokeColor = 'blue';
      pathA.strokeWidth = 2;
  }
  for (j = 39; j < 45; j++) {
      var startA = new Point(startPoints[8][0], startPoints[8][1]);
      var endA = new Point(randEndPoints[j][0], randEndPoints[j][1]);
      var pathA = new Path.Line(startA, endA);
      pathA.strokeColor = 'blue';
      pathA.strokeWidth = 2;
  }
}

function onResize(event) {
  newWidth = view.size.width;
  newHeight = view.size.height;
  // resizeCanvas(newWidth, newHeight);
  getStartPoints(newWidth, newHeight);
  // mapEndPoints();
  drawLines();
  oldWidth = newWidth;
  oldHeight = newHeight;
}
