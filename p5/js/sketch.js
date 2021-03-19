let oldWidth, oldHeight, newWidth, newHeight, randX, randY;
let randEndPoints = [];
let startPoints;

function setup() {
  createCanvas(windowWidth, windowHeight);

  oldWidth = windowWidth;
  oldHeight = windowHeight;

  stroke('blue');
  strokeWeight(2);
  randomSeed(1);

  getStartPoints(oldWidth, oldHeight);
  getRandPoints();
}


function draw() {
  drawLines();
}

function windowResized() {
  newWidth = windowWidth;
  newHeight = windowHeight;
  resizeCanvas(newWidth, newHeight);
  getStartPoints(newWidth, newHeight);
  // mapEndPoints();
  drawLines();
  oldWidth = newWidth;
  oldHeight = newHeight;
}

function getStartPoints(w, h) {
  startPoints = [[0, 0], [(w/2), 0], [w, 0], [0, (h/2)], [(w/2), (h/2)], [w, (h/2)], [0, h], [(w/2), h], [w, h]];
}

function getRandPoints() {
  for (i = 0; i < 45; i++) {
    randX = random((oldWidth/6), (oldWidth*5/6));
    randY = random((oldHeight/6), (oldHeight*5/6));
    // console.log(randX + ', ' + randY);
    randEndPoints[i] = [randX, randY];
  }
}

function mapEndPoints() {
  for (i = 0; i < randEndPoints.length; i++) {
    randEndPoints[i][0] = map(randEndPoints[i][0], 0, oldWidth, 0, newWidth);
    randEndPoints[i][1] = map(randEndPoints[i][0], 0, oldHeight, 0, newHeight);
  }
}

function drawLines () {
  for (j = 0; j < 5; j++) {
      point(randEndPoints[j][0], randEndPoints[j][1]);
      line(startPoints[0][0], startPoints[0][1], randEndPoints[j][0], randEndPoints[j][1])
  }
  for (j = 4; j < 10; j++) {
      point(randEndPoints[j][0], randEndPoints[j][1]);
      line(startPoints[1][0], startPoints[1][1], randEndPoints[j][0], randEndPoints[j][1])
  }
  for (j = 9; j < 15; j++) {
      point(randEndPoints[j][0], randEndPoints[j][1]);
      line(startPoints[2][0], startPoints[2][1], randEndPoints[j][0], randEndPoints[j][1])
  }
  for (j = 14; j < 20; j++) {
      point(randEndPoints[j][0], randEndPoints[j][1]);
      line(startPoints[3][0], startPoints[3][1], randEndPoints[j][0], randEndPoints[j][1])
  }
  for (j = 19; j < 25; j++) {
      point(randEndPoints[j][0], randEndPoints[j][1]);
      line(startPoints[4][0], startPoints[4][1], randEndPoints[j][0], randEndPoints[j][1])
  }
  for (j = 24; j < 30; j++) {
      point(randEndPoints[j][0], randEndPoints[j][1]);
      line(startPoints[5][0], startPoints[5][1], randEndPoints[j][0], randEndPoints[j][1])
  }
  for (j = 29; j < 35; j++) {
      point(randEndPoints[j][0], randEndPoints[j][1]);
      line(startPoints[6][0], startPoints[6][1], randEndPoints[j][0], randEndPoints[j][1])
  }
  for (j = 34; j < 40; j++) {
      point(randEndPoints[j][0], randEndPoints[j][1]);
      line(startPoints[7][0], startPoints[7][1], randEndPoints[j][0], randEndPoints[j][1])
  }
  for (j = 39; j < 45; j++) {
      point(randEndPoints[j][0], randEndPoints[j][1]);
      line(startPoints[8][0], startPoints[8][1], randEndPoints[j][0], randEndPoints[j][1])
  }
}
