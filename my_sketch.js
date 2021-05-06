function setup() {
  createCanvas(windowWidth, windowHeight);
  noStroke();
  cool_font = loadFont('KeeponTruckin.ttf');
}

function draw() {
  background(color(189, 230, 249));

  textSize(50);
  textFont(cool_font);
  textAlign(CENTER);
  fill(color(2, 53, 86));
  text("Lucy Laidlaw", width/2, height/2);
  fill(color(143, 206, 236));
  text("Lucy Laidlaw", width/2+2, height/2+2);

  let cent_dist = dist(mouseX, mouseY, width/2, height/2);
  if(cent_dist < 100) {
    background(color(2, 53, 86));
    fill(color(189, 230, 249));
    text("Lucy Laidlaw", width/2, height/2);
    fill(color(143, 206, 236));
    text("Lucy Laidlaw", width/2+2, height/2+2);
  }

}
