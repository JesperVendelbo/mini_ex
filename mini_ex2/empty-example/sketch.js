var slide = 500; //var for ellipsen
var increase = 10;//var for forstørrelse af tekst

function setup() {
  createCanvas(600,450);

  }
 function draw() {
    background(150,100,0);
    fill(30,200,30);
    rect(64,360,20,20);
    rect(64,400,20,20);
    rect(64,320,20,20);
    rect(102,383,20,20);
    rect(102,342,20,20);
    rect(140,363,20,20);

    ellipse(slide,370,50,50); //indsætter slide på x-aksens plads, da den er deklæret som 500

      slide = slide - 1,5; //hvor hurtigt ellipsen skal rykke sig
if(slide < 140) {  //hvis ellipsen under 140 på x-aksen

  textSize(increase); // increse på størrelsen af teksten, da den er deklæret som 10
  text('STRIIIKE!!',100,100,100,100);
  increase = increase + 1; // teksten forstørrer hele tiden

  }

      }



function mousePressed() {
    console.log(mouseX,mouseY); // se hvor på y og x-aksen musen befinder sig



  }
