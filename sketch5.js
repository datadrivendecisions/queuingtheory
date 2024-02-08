// p5.js code to draw the arrival process of customers with timestamps

function setup() {
  createCanvas(800, 400); // Create a canvas of desired size
  background(255); // Set background color to white
  drawStartline();
  drawArrows()
  drawTexts()
}

function drawStartline() {

  
  // Draw the start dashed line
  stroke(255, 0, 0); // Red color for dashed line
  drawDashedLine(50, 50, 50, 280, 5);
}

function drawDashedLine(x1, y1, x2, y2, dashLength) {
  let deltaX = x2 - x1;
  let deltaY = y2 - y1;
  let numDashes = dist(x1, y1, x2, y2) / dashLength;
  for (let i = 0; i < numDashes; i++) {
    if (i % 2 === 0) {
      let startX = map(i, 0, numDashes, x1, x2);
      let startY = map(i, 0, numDashes, y1, y2);
      let endX = map(i + 1, 0, numDashes, x1, x2);
      let endY = map(i + 1, 0, numDashes, y1, y2);
      line(startX, startY, endX, endY);
    }
  }
}



function drawArrows() {
  // Draw arrows for each customer arrival
  drawArrowHoriz(50, 250, 100, 'blue');
  drawArrowHoriz(50, 150, 180, 'blue');
}

function drawArrowHoriz(x, d, y, colorValue) {
  push(); // Isolate drawing styles
  const shapeColor = color(colorValue)
  shapeColor.setAlpha(255);
  fill(shapeColor);
  stroke(shapeColor);
  // Draw the line part of the arrow
  setLineDash([0, 0]);
  line(x, y + 20, x + d -10, y + 20 );
  // Draw the arrowhead
  translate(x + d, y + 20);
  rotate(PI / 2); // 90 degree angle
  triangle(0, 0, -5, 10, 5, 10);
  pop(); // Restore original drawing styles
}

function drawTexts() {
  // Draw times beneath the dashed line and arrows
  drawText(150,  100, 'S');
  drawText(120,  180, 'U');
}

function drawText(x, y, time) {
  noStroke();
  fill(0);
  textSize(16);
  textAlign(CENTER);
  text(time, x, y); // Adjust the y value to place the text beneath the line
}

function setLineDash(list) {
  drawingContext.setLineDash(list);
}

function draw() {
  // No ongoing drawing required
}
