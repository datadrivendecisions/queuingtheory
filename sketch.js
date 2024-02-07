// p5.js code to draw the arrival process of customers with timestamps

function setup() {
  createCanvas(800, 200); // Create a canvas of desired size
  background(255); // Set background color to white
  drawTimeline();
  drawArrivals();
  drawDepartures();
  drawTimes();
  drawClients();
  drawServiceTimes()
}

function drawTimeline() {
  stroke(0); // Set line color to black
  strokeWeight(2); // Set line thickness
  line(50, 100, width - 50, 100); // Draw the timeline
  
  // Draw the start dashed line
  stroke(255, 0, 0); // Red color for dashed line
  drawDashedLine(50, 50, 50, 150, 5);
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

function drawArrivals() {
  // Draw arrows for each customer arrival
  drawArrowUp(150, 100, 'blue');
  drawArrowUp(350, 100, 'orange');
  drawArrowUp(600, 100, 'green');
}

function drawDepartures() {
  // Draw arrows for each customer arrival
  drawArrowDown(400, 100, 'blue');
  drawArrowDown(480, 100, 'orange');
  drawArrowDown(700, 100, 'green');
}

function drawServiceTimes() {
  // Draw arrows for each customer arrival
  drawArrowHoriz(50, 100, 60, 'red');
  drawArrowHoriz(150, 250, 100, 'blue');
  drawArrowHoriz(350, 130, 60, 'orange');
  drawArrowHoriz(600, 100, 100, 'green');
  drawArrowHoriz(480, 120, 60, 'gray');
}

function drawArrowUp(x, y, color) {
  push(); // Isolate drawing styles
  fill(color);
  stroke(color);
  // Draw the line part of the arrow
  line(x, y - 30, x, y );
  // Draw the arrowhead
  translate(x, y - 40);
  // rotate(PI / 4); // 45 degree angle
  triangle(0, 0, -5, 10, 5, 10);
  pop(); // Restore original drawing styles
}

function drawArrowDown(x, y, color) {
  push(); // Isolate drawing styles
  fill(color);
  stroke(color);
  // Draw the line part of the arrow
  line(x, y + 30, x, y );
  // Draw the arrowhead
  translate(x, y + 40);
  rotate(PI); // 180 degree angle
  triangle(0, 0, -5, 10, 5, 10);
  pop(); // Restore original drawing styles
}

function drawArrowHoriz(x, d, y, colorValue) {
  push(); // Isolate drawing styles
  const shapeColor = color(colorValue)
  shapeColor.setAlpha(100);
  fill(shapeColor);
  stroke(shapeColor);
  // Draw the line part of the arrow
  setLineDash([10, 10]);
  line(x, y + 20, x + d -10, y + 20 );
  // Draw the arrowhead
  translate(x + d, y + 20);
  rotate(PI / 2); // 90 degree angle
  triangle(0, 0, -5, 10, 5, 10);
  pop(); // Restore original drawing styles
}

function drawTimes() {
  // Draw times beneath the dashed line and arrows
  drawTime(50, 170, 'T_1');
  drawTime(150,  170, 'T_2');
  drawTime(350,  170, 'T_3');
  drawTime(600,  170, 'T_4');
  drawTime(100,  70, 'S_1');
  drawTime(275,  140, 'S_2');
  drawTime(415,  70, 'S_3');
  drawTime(650,  140, 'S_4');
  drawTime(540,  70, 'Idle');
}

function drawTime(x, y, time) {
  noStroke();
  fill(0);
  textSize(16);
  textAlign(CENTER);
  text(time, x, y); // Adjust the y value to place the text beneath the line
}

function drawClients() {
  // Draw times beneath the dashed line and arrows
  drawClient(50, 'arrival\nclient 1');
  drawClient(150, 'arrival\nclient 2');
  drawClient(350, 'arrival\nclient 3');
  drawClient(600, 'arrival\nclient 4');
}

function drawClient(x, time) {
  noStroke();
  fill(0);
  textSize(16);
  textAlign(CENTER);
  text(time, x, 20); // Adjust the y value to place the text beneath the line
}

function setLineDash(list) {
  drawingContext.setLineDash(list);
}

function draw() {
  // No ongoing drawing required
}
