function setup() {
  createCanvas(windowWidth, windowHeight);
  noStroke();
  cool_font = loadFont('KeeponTruckin.ttf');
}

function draw() {
  background(color(189, 230, 249));

  textFont(cool_font);
  text("Lucy Laidlaw", width/2, height/2);
}
