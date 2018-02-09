var y = 100;
var x = 100;

function setup() {
 createCanvas(600,400);
 background(95,34,100);
}

function draw() {



  textSize(100);
  text('Mathijsen', 100,200 );


  noStroke();
  fill(240,20,50,50);
  ellipse(mouseX, mouseY, 50,50);

  stroke (100);
  y=y-5;
  if(y<0){
    y=500;
    }

    x=x-5;
    if(x<0){
      x=500;
}

    ellipse(350,350,x,y)

}
function mousePressed() {
  background(95,34,100);

  }
