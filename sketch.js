// Calculating time using predefined func from p5.js 


function setup() {
  createCanvas(800,400);
  angleMode(DEGREES);
}

function draw() {
  background("black"); 
  translate(200,200);
  rotate(-9);
  hr = hour();
  mn = minute();
  sc = second();

  scAngle= map(sc, 0, 60, 0, 360);
  // Scale the mouseX value from 0 to 720 to a range between 40 and 300
  mnAngle= map(mn, 0, 60, 0, 360);
  hrAngle= map(hr%12, 0, 12, 0, 360);
   
  push();
  rotate(scAngle);
  stroke(255,0,0);
  strokeWeight(7);
  line(0,0,100,0);
  pop();

  push();
  rotate(mnAngle);
  stroke("green");
  strokeWeight(7);
  line(0,0,75,0);
  pop();

  push();
  rotate(hrAngle);
  stroke("blue");
  strokeWeight(7);
  line(0,0,50,0);
  pop();

  stroke("yellow");
  point(0,0);
  noFill();
  stroke("red");
   arc(0,0,300,300,0,scAngle);

   stroke("green");
   arc(0,0,280,280,0,mnAngle);

   stroke("yellow");
   arc(0,0,260,260,0,hrAngle);
}

