let score = 0; //control water height
let score2 = 0; // control water opacity

//rain drop
class Drop {
  //   cx = x position    cy = y position
  constructor(cx, cy, radius, color) {
    this.x = cx;
    this.y = cy;
    this.radius = radius;
    this.color = color;
    // changes the speed of every rain drop
    this.speed = Math.random() * 9;
  }
  //   function that updates rain drop
  update() {
    this.y = this.y + this.speed; //changes the y position each frame. drop moves down
    //if water hits ground
    if (this.y > 400) {
      this.y = random(-150, -50); //spawn water at the top
      this.speed = 0; //reset speed
      score = score + 1;
      score2 = score2 + 1;

      //water level go up
      if (score == 500) {
        score = 0;
        ry = ry - 10;
        ry2 = ry2 + 10;
      }
      //increase opacity
      if (score2 == 10) {
        score2 = 0;
        op = op + 5;
      }
    }
    this.speed = this.speed + 0.1; //each frame the rain drop speed increases
    fill(this.color); //color
    circle(this.x, this.y, this.radius); //circle position and size
  }
}
//array holding circles
var myCircles = [];
//create 150 drops
for (let i = 0; i < 150; i++) {
  //math.random * 400 changes the x position of the drop making all drops start in a different position
  //create drop (x, y, radius, color)
  myCircles[i] = new Drop(
    Math.random() * 400,
    Math.random() * -500,
    10,
    [145, 207, 255]
  );
}

//creating canvas
function setup() {
  createCanvas(400, 300);
}

let ry = 290; // move up --beginning position
let ry2 = 10; // make taller -- beginning height
let op = 5; // opacity  -- beginning opacity
//updating each frame
function draw() {
  background(255, 255, 255);
  fill(145, 207, 255, op);
  noStroke();
  rect(0, ry, 400, ry2);

  //updating each drop
  for (let i = 0; i < 150; i++) {
    myCircles[i].update();
  }
}
