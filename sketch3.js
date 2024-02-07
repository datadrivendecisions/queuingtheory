function setup() {
  createCanvas(500, 300);
  background(255); // Set the background color to white
  drawBuffer();
  drawArrows();
  drawServers();
  // drawClient(80, 100, 20, 'red')
  drawClient(195, 165, 20, 'red')
  drawTexts()
}

function drawBuffer() {
  const bufferX = 150; // X position of the buffer
  const bufferY = 140; // Y position of the buffer
  const bufferWidth = 150; // Width of the buffer
  const bufferHeight = 50; // Height of the buffer
  const bufferSlots = 5; // Number of slots in the buffer
  const customerRadius = 10; // Radius of the customers

  // Draw the buffer outline
  stroke(0);
  strokeWeight(2);
  noFill();
  drawOpenRectangle(bufferX, bufferY, bufferWidth, bufferHeight, 'False');
  // drawOpenRectangle(bufferX, bufferY, bufferWidth, bufferHeight);

  // Draw the buffer slots
  const slotWidth = bufferWidth / bufferSlots;
  for (let i = 0; i < bufferSlots; i++) {
    const slotX = bufferX + i * slotWidth;
    drawOpenRectangle(slotX, bufferY, slotWidth, bufferHeight, 'False');
    // drawOpenRectangle(slotX, bufferY, slotWidth, bufferHeight);
  }

  // Draw the customers in the buffer slots
  //noStroke()
  //fill('blue'); // Blue color for customers
  // for (let i = 0; i < bufferSlots; i++) {
  for (let i = 2; i < bufferSlots; i++) {
    const customerX = bufferX + i * slotWidth + slotWidth / 2;
    const customerY = bufferY + bufferHeight / 2;
    drawClient(customerX, customerY, customerRadius * 2, 'blue');
  }
}

function drawArrows()
{
  drawArrowHoriz(50, 100, 145, 255, 'black')
  // Set stroke color and weight before drawing the line
  stroke(0); // Set the stroke to black
  strokeWeight(2); // Set the stroke weight
  // line(50, 165, 150, 100)
  // drawArrowHoriz(150, 100, 80, 255, 'black')
  drawArrowHoriz(300, 150, 145, 255, 'black')
}

function drawServers()
{
  drawServer(375, 165, 255, 'red')
}

function drawTexts()
{
  // drawText(120, 90, 'blocked')
  // drawText(250, 220, 'Capacity: K = 6')
}

function drawArrowHoriz(x, d, y, alpha, colorValue) {
  push(); // Isolate drawing styles
  const shapeColor = color(colorValue)
  shapeColor.setAlpha(alpha);
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

function drawServer(x, y, alpha, colorValue) {
  const outerRadius = 15; // Radius for the outer circle
  const innerRadius = 10; // Radius for the inner circle/dot

  // Draw the outer circle with a border
  stroke(0); // Black color for the border
  strokeWeight(2); // Set the border thickness
  fill(255); // White color for the outer circle
  circle(x, y, outerRadius * 2); // The diameter is twice the radius

  // Draw the inner circle/dot
  noStroke(); // No border for the inner circle
  const shapeColor = color(colorValue)
  shapeColor.setAlpha(alpha);
  fill(shapeColor); // Color for the inner dot
  drawClient(x, y, innerRadius * 2, 'red'); // The diameter is twice the radius
}

function drawClient(x, y, r, colorValue)
{
  noStroke()
  fill(colorValue); // Blue color for customers
  circle(x, y, r)
}

function drawText(x, y, txt) {
  noStroke();
  fill(0);
  textSize(16);
  textAlign(CENTER);
  text(txt, x, y); // Adjust the y value to place the text beneath the line
}

function drawOpenRectangle(x, y, w, h, open='True') {
  stroke(0); // Set the stroke color to black
  strokeWeight(2); // Set the stroke weight
  // Draw the top side
  line(x, y, x + w, y);
  // Draw the right side
  line(x + w, y, x + w, y + h);
  // Draw the bottom side
  line(x, y + h, x + w, y + h);
  // The left side is not drawn, hence it remains open
  if(open=='True'){
    // Draw the left side
    line(x, y, x, y + h);
  }
}

function setLineDash(list) {
  drawingContext.setLineDash(list);
}

function draw() {
  // No ongoing drawing needed
}
