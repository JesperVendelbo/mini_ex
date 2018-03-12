let firkanter = [];
let bubbles = [];

function setup () {
createCanvas(600,400);
background (200);

}


function mousePressed() {
let b = new firkant (mouseX, mouseY, 30, 30);
firkanter.push(b);
background (random(50,200),0,0);
}


//function mousePressed() {
  //let r = random(10, 50);
  //let b = new Bubble(mouseX, mouseY, r);
  //bubbles.push(b);

//}
function draw () {


for (let firkant of firkanter) {
  firkant.placement();
  firkant.display();
}

for(let i = 0; i < firkanter.length; i++){
firkanter[i].placement();
firkanter[i].display();
}

for (let bubble of bubbles) {
   bubble.move();
   bubble.show();
 }

 for (let i = 0; i < bubbles.length; i++) {
   bubbles[i].move();
   bubbles[i].show();
 }

}



class firkant {
constructor (x,y,w,h){
  this.x = x;
  this.y = y;
  this.w = w;
  this.h = h;

}

placement () {
  this.x = this.x ;
  this.y = this.y ;
}



 display () {
 stroke (155);
 fill (30,100,20);
 rect(this.x, this.y, this.w, this.h);
 }


}


class Bubble {
  constructor(x, y, r) {
    this.x = x;
    this.y = y;
    this.r = r;
  }

  move() {
    this.x = this.x;
    this.y = this.y;
  }

  show() {
    stroke(255);
    strokeWeight(4);
    noFill();
    ellipse(this.x, this.y, this.r * 2);
  }
}
