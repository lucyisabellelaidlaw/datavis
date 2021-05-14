function setup() {
  createCanvas(windowWidth, windowHeight);
  noStroke();
  cool_font = loadFont('KeeponTruckin.ttf');
}

function draw() {
  background(color(189, 230, 249));

  drawSquares();
  printText();

  

  let pink_dist = dist(mouseX, mouseY, 20+20, 20+20);
  let green_dist = dist(mouseX, mouseY, 20+40+20, 20+20);

  if(pink_dist <= 25) {
    changeTheme("Pink");
  }

  if(green_dist <= 25) {
    changeTheme("Green");
  }

}

function printText() {
  //Prints the text of my name in the middle of the screen
  textSize(50);
  textFont(cool_font);
  textAlign(CENTER);
  fill(color(2, 53, 86));
  text("Lucy Laidlaw", width/2, height/2);
  fill(color(143, 206, 236));
  text("Lucy Laidlaw", width/2+2, height/2+2);
}

function changeTheme(colString) {
  if(colString=="Pink") {

    background(color(251, 204, 232));

    drawSquares();

    fill(color(252, 146, 32));
    text("Lucy Laidlaw", width/2, height/2);
    fill(color(247, 168, 207));
    text("Lucy Laidlaw", width/2+2, height/2+2);

  } else if(colString=="Green") {

    background(color(192, 254, 169));

    drawSquares();

    fill(color(1, 137, 34));
    text("Lucy Laidlaw", width/2, height/2);
    fill(color(89, 249, 94));
    text("Lucy Laidlaw", width/2+2, height/2+2);

  }
}

function drawSquares() {
  //Pink square
  fill(color(255, 187, 227))
  square(20, 20, 40);

  //Green square
  fill(color(173, 255, 143));
  square(60, 20, 40);

  //Blue square
  fill(color(165, 225, 254));
  square(100, 20, 40);
}
