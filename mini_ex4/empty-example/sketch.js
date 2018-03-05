var button;
var button2;
var button3;
var button4;
var img;
var img2;
function setup() {
img = loadImage ("mathilde.jpg");
img2 = loadImage ("cocio.png");
createCanvas(600,400);
background (200,100,50);
textSize (40);
fill(200);
text('You thirsty?',170,84);



button2 = createButton ('very');
button2.position(width/2, height/2);
button2.mousePressed(thirsty); // calls the thirsty function

button = createButton ('yes');
button.position (width/2 - 100, height/2);
button.mousePressed(thirsty); // calls the thirsty function
}
function draw() {

}

function thirsty (){
background(200,10,90);
image (img,0,0, height/2, width/2);
image (img2,400,0, height/2, width/2);
button.remove();
button2.remove();

textSize(40);
fill(200);

button3 = createButton ('cocio');
button3.position(width/2, height/2);
button3.mousePressed(cociolover); // calls the cociolover function

button4 = createButton ('mathilde');
button4.position(width/2 -70, height/2);
button4.mousePressed(mathildelover); // calls the mathildelover

  }

  function cociolover () {
    background (255);
    textSize(20);
    fill(20,130,200);
    text('According to our data you are a giant cocio lover', 50,200);
    button3.remove();
    button4.remove();


}

function mathildelover() {
  background (255);
  textSize(20);
  fill(20,130,200);
  text('According to our data you are a giant mathilde lover', 50,200);
  button3.remove();
  button4.remove();
}
