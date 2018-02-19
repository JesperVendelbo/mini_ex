var slide = 500;
var increase = 10;

function setup() {
  createCanvas(600,450);

  }



  function draw() {
    background(150,100,0);


    if(slide < 140) {
    fill(150,200,40);
    }

    fill(30,200,30);
    rect(64,360,20,20);
    rect(64,400,20,20);
    rect(64,320,20,20);

    rect(102,383,20,20);
    rect(102,342,20,20);
    rect(140,363,20,20); //forreste rect

    ellipse(slide,370,50,50);

      slide = slide - 1,5;
if(slide < 140) {

  textSize(increase);
  text('STRIIIKE!!',100,100,100,100);
  increase = increase + 1;

  }
  if(slide < 140){

  }


      }








    function mousePressed() {
    console.log(mouseX,mouseY);



  }
