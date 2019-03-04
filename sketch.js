function setup() {
  createCanvas(400, 400);
  background(220);
}

function draw() {
  //cabeça inicio
  push();
  translate(width/2,80)
  rotate(radians(180))
  rect(-30,0,60,60)
  rect(-4,0,8,8)
  pop()
  //cabeça fim
  ///tronco inicio
  push();
	translate(width/2,90)
  rect(-60,0,120,120)
  pop();
	//tronco fim
  push();
  translate(width/3,110);
  rotate(radians(180))
  rect(0,-17,90,35);
  rect(0,-2.5,5,5)
  
  pop();
  
}