function setup() {
  createCanvas(800, 400);
  background(255); // Set the background color to white
  drawGraph();
}

function drawGraph() {
  let graphPoints = [
    {x: 50, y: 200},
    {x: 150, y: 200},
    {x: 150, y: 150},
    {x: 350, y: 150},
    {x: 350, y: 100},
    {x: 400, y: 100},
    {x: 400, y: 150},
    {x: 480, y: 150},
    {x: 480, y: 200},
    {x: 600, y: 200},
    {x: 600, y: 150},
    {x: 700, y: 150},
  ];

  // Define the step heights on the graph and their corresponding labels
  let steps = [
    {y: 200, label: '0'},
    {y: 150, label: '1'},
    {y: 100, label: '2'},
    {y: 50, label: '3'} // Assuming the top of the graph corresponds to '3'
  ];

  stroke('red');
  strokeWeight(4);
  noFill();

  beginShape();
  for (let i = 0; i < graphPoints.length; i++) {
    vertex(graphPoints[i].x, graphPoints[i].y);
  }
  endShape();

  // Draw axes
  stroke(0);
  strokeWeight(1);
  line(50, 200, 750, 200); // X-axis
  line(50, 200, 50, 50); // Y-axis

  // Add labels
  fill('black');
  textSize(12);
  text('Time', 760, 165);
  text('Number of customers', 20, 15);

  // Draw y-axis labels
  textAlign(RIGHT, CENTER); // Align text to the right and center vertically
  for (let i = 0; i < steps.length; i++) {
    text(steps[i].label, 45, steps[i].y); // Adjust text position based on y-axis
  }
}

function draw() {
  // No ongoing drawing needed
}
