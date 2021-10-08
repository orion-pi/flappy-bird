var y;
var size = 30;
var pressed = false; 
var screen = 0; //the value of the screen
var mouse_pressed = false; //tells if the mouse is pressed
var x1;
var y1;
var x;
var score = 0; //the variable the sscore is stored in
var l = 0;
var d = 0;
function setup() { //only runs once in the begining of the program
  createCanvas(400, 400);
  y = height/2;
  x1 = 300;
  y1 = -130;
  x = width/4-(size/2);
}

function draw() { //the main loop in which everything is drawn
  background("lightblue");
  if (screen == 0) { 
    textSize(30);
    text("press the screen to start", 40, 200);
    if (mouse_pressed) {
      screen = 1;
    }
  }
  if (screen == 1) { 
  fill("yellow"); //fill everything that comes after yellow
  x1 -= 2; 
  rect(x, y, size);
  if (l == 0) {
    y1 = -130;
    y1 += random(-100, 100);
    l = 1;
  }
  fill("green"); //fill everything that comes after green
  rect(x1, y1, 30, 300);
  rect(x1, y1+450, 30, 300);
  if (x1 < 0) {
    l = 0;
    x1 = width;
    d = 0;
  }
  if (x > x1 && d == 0) {
    d = 1;
    score++;
  }
  fill("black");
  text("score: "+str(score), 10, 30);
  y += 6;
    if (pressed && y >= 0) {
    y -= 12;
  }
  if (x < x1 + 30 &&
   x + size > x1 &&
   y < y1 + 300 &&
   y + 30 > y1) {
    screen = 2;
}
      if (x < x1 + 30 &&
   x + size > x1 &&
   y < (y1+450) + 300 &&
   y + 30 > y1+450) {
    screen = 2;
}
  if (y > height) {
    screen = 2;
  }
  }
  if (screen == 2) {
    text("Your score was "+str(score), width/5, height/4);
    text("Press the screen to restart "+str(score), width/10, height/2);
    if (mouse_pressed) {
      screen = 1;
      x1 = 300;
      y1 = -130;
      x = width/4-(size/2);
      score = 0;
      y = height/2;
      l = 0;
      d = 0;
    }
    
  }
}
function keyReleased() {
  if (key == ' ') {
    pressed = false;
  }
}
function keyTyped() {
  if (key == ' ') {
    pressed = true;
  }
}
function mousePressed() {
  mouse_pressed = true;
}
function mouseReleased() {
  mouse_pressed = false;
}
