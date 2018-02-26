var words = ["click to load","click again", "now loading"];
var index = 0;
var angle = 0;

function setup() {
createCanvas(windowWidth, windowHeight)
frameRate(5);
background(10);

}

function draw() {

fill(100,254,50);
textSize (50);
textAlign(CENTER); //the text is in the middle of the canvas
text(words[index],windowWidth/2,windowHeight/2); //index refferring to my index in the top
noStroke();
fill(0,40);
rect(0,0,width,height);
if (index > 1){ //hvis det sidste ord i dexet bliver vist, så skal drawThrobber aktiveres
drawThrobber(20);

}
}

function drawThrobber(num) {
  push();
  translate(width/2, height/2);
  var cir = 360/num*(frameCount%num);
  rotate(radians(cir));
  noStroke();
  fill(100,254,50);
  rect(150,0,22,22);  //the rotating rect
  pop();





}

  function mousePressed() {
    index = index + 1;

      //console.log(mouseX,mouseY);
      }

    //  [ ]
    //  <>
      //{}
