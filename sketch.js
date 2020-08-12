function setup() {
  createCanvas(575, 250);
}

function draw() {
  background(0, 122, 77);
  
  //Black triangle
  fill(0);
  noStroke();
  triangle(0,42.5,0,207.5,191.66,125);

  
  //Yellow line
  stroke(255, 182, 18);
  strokeWeight(15);  
  line(0,42.5,191.66,125)
  line(0,207.5,191.66,125);
  
  
  //Red
  fill(222, 56, 49);
  noStroke();
  triangle(90,0,250,0,250,90);
  rect(250,0,575,90);
  
  //Blue
  fill(0, 35, 149);
  triangle(90,250,250,250,250,160);
  rect(250,160,575,90);
  
  stroke(255);
  strokeWeight(20);
  
  //White line of Red
  line(90,0,250,90);
  line(250,90,575,90);
  
  //White line of Blue
  line(90,250,250,160);
  line(250,160,575,160);
  
  
  
  
  
}