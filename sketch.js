function setup() {
  // The size of our starting canvas: 400px width, 400px height
  createCanvas(400, 400);
  angleMode(DEGREES);
}
function draw() {
  let r = random(255);
  let g = random(255);
  let b = random(255);
  let seconds = second();
  let hours = hour();
  let minutes = minute();

  // The same as doing: background(220); or --> background(220,220,220);
  background(87, 7, 16);
  // all about the o'clock
  translate(width / 2, height / 2);
  rotate(-90);
  noFill();
  strokeWeight(8);
  //seconds only
  stroke(0, 0, 0);

  let secondsArc = map(seconds, 0, 60, 0, 360);
  arc(0, 0, 300, 300, 0, secondsArc);

  //minutes only
  stroke(255, 186, 8);
  push();
  let minutesArc = map(minutes, 0, 60, 0, 360);
  arc(0, 0, 250, 250, 0, minutesArc);
  strokeWeight(6);
  stroke(229, 56, 59);
  pop();
  //hours only
  stroke(36, 0, 70);
  push();
  let hoursArc = map(hours % 12, 0, 12, 0, 360);
  arc(0, 0, 200, 200, 0, hoursArc);
  pop();
  ///argam

  push();
  stroke(255);
  textSize(25);
  strokeWeight(1);
  rotate(90);
  fill(r, g, b);
  text("12", 0, -160);
  pop();
  push();
  textSize(25);
  strokeWeight(1);
  rotate(90);
  fill(r, g, b);
  text("3", 160, 0);
  pop();
  push();
  textSize(25);
  strokeWeight(1);
  rotate(90);
  fill(r, g, b);
  text("6", 0, 180);
  pop();
  push();
  textSize(25);
  strokeWeight(1);
  rotate(90);
  fill(r, g, b);
  text("9", -180, 0);
  pop();
  push();
  textSize(25);
  stroke(255);
  strokeWeight(1);
  rotate(90);
  fill("white");
  text("1", 80, -145);
  pop();
  push();
  textSize(25);
  stroke(255);
  strokeWeight(1);
  rotate(90);
  fill("white");
  text("2", 145, -90);
  pop();
  push();
  textSize(25);
  stroke(255);
  strokeWeight(1);
  rotate(90);
  fill("white");
  text("4", 150, 85);
  pop();
  push();
  textSize(25);
  stroke(255);
  strokeWeight(1);
  rotate(90);
  fill("white");
  text("5", 100, 160);
  pop();
  push();
  textSize(25);
  stroke(255);
  strokeWeight(1);
  rotate(90);
  fill("white");
  text("7", -100, 160);
  pop();
  push();
  textSize(25);
  stroke(255);
  strokeWeight(1);
  rotate(90);
  fill("white");
  text("8", -170, 90);
  pop();
  push();
  textSize(25);
  stroke(255);
  strokeWeight(1);
  rotate(90);
  fill("white");
  text("10", -160, -85);
  pop();
  push();
  textSize(25);
  stroke(255);
  strokeWeight(1);
  rotate(90);
  fill("white");
  text("11", -90, -138);
  pop();
  // seconds
  push();
  stroke(255);
  strokeWeight(2);
  rotate(secondsArc);
  line(0, 0, 140, 0);
  pop();

  // min
  push();
  stroke(0);
  strokeWeight(4);
  rotate(minutesArc);
  line(0, 0, 110, 0);
  pop();
  //hour
  push();
  stroke("red");
  strokeWeight(6);
  rotate(hoursArc);
  line(0, 0, 90, 0);
  pop();
}
