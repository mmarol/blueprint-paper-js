let randX;
let randY;
let num = 10;
let i;

function setup() {
  let aX = 0;
  let aY = 0;
  let bX = windowWidth/2;
  let bY = 0;
  let cX = windowWidth;
  let cY = 0;
  let dX = 0;
  let dY = windowHeight;
  let eX = windowWidth/2;
  let eY = windowHeight;
  let fX = windowWidth;
  let fY = windowHeight;

  createCanvas(windowWidth, windowHeight);
  background(240);
  stroke(0);

  for (let i = 0; i < num; i++) {
    randX = random((windowWidth/6),(windowWidth*5/6));
    randY = random((windowHeight/6),(windowHeight*5/6));
    line(aX, aY, randX, randY);
  }
  for (let i = 0; i < num; i++) {
    randX = random((windowWidth/6),(windowWidth*5/6));
    randY = random((windowHeight/6),(windowHeight*5/6));
    line(bX, bY, randX, randY);
  }
  for (let i = 0; i < num; i++) {
    randX = random((windowWidth/6),(windowWidth*5/6));
    randY = random((windowHeight/6),(windowHeight*5/6));
    line(cX, cY, randX, randY);
  }
  for (let i = 0; i < num; i++) {
    randX = random((windowWidth/6),(windowWidth*5/6));
    randY = random((windowHeight/6),(windowHeight*5/6));
    line(dX, dY, randX, randY);
  }
  for (let i = 0; i < num; i++) {
    randX = random((windowWidth/6),(windowWidth*5/6));
    randY = random((windowHeight/6),(windowHeight*5/6));
    line(eX, eY, randX, randY);
  }
  for (let i = 0; i < num; i++) {
    randX = random((windowWidth/6),(windowWidth*5/6));
    randY = random((windowHeight/6),(windowHeight*5/6));
    line(fX, fY, randX, randY);
  }
}

function draw() {

}





// let randX;
// let randY;
// let percentX;
// let percentY;
// let xPos;
// let yPos;
//
// function setup() {
//   createCanvas(windowWidth, windowHeight);
//   randX = random(((windowWidth / 2)-100),((windowWidth / 2)+100));
//   randY = random(((windowHeight / 2)-100),((windowHeight / 2)+100));
//   percentX = randX / windowWidth;
//   percentY = randY / windowHeight;
//   xPos = windowWidth * percentX;
//   yPos = windowHeight * percentY;
//   print(randX);
//   print(percentX);
//   print(xPos);
// }
//
// function draw() {
//   background(220);
//   ellipse(xPos, yPos, 50, 50);
// }
//
// /* full screening will change the size of the canvas */
// function windowResized() {
//   resizeCanvas(windowWidth, windowHeight);
//   percentX = randX/windowWidth;
//   percentY = randY/windowHeight;
//   xPos = windowWidth * percentX;
//   yPos = windowHeight * percentY;
//   print("windowWidth = " + windowWidth);
//   print("randX = " + randX);
//   print("percentX = " + percentX);
//   print("xPos = " + xPos);
//   redraw();
// }
