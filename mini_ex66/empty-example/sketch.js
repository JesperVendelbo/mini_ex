function setup() {
   createCanvas(400, 400);
   angleMode(DEGREES);
 }

 function draw() {
   background(0);
   translate(200, 200);

   rotate(-90);

   let hr = hour();
   let mn = minute();
   let sc = second();

   strokeWeight(7);
   stroke(255, 0, 100);
   noFill();
   let secondAngle = map(sc, 0, 60, 0, 360);
if (sc>10){
   arc(0, 0, 300, 300, 0, secondAngle);
}
   stroke(0, 100, 255);
   let minuteAngle = map(mn, 0, 60, 0, 360);
if (sc>20){
  arc(0, 0, 280, 280, 0, minuteAngle);
}
   stroke(150, 255, 100);
   let hourAngle = map(hr % 12, 0, 12, 0, 360);
if (sc>30){
   arc(0, 0, 260, 260, 0, hourAngle);
   }

   push();
   rotate(secondAngle);
   stroke(255, 0, 100);
   line(0, 0, 100, 0);
   pop();

   push();
   rotate(minuteAngle);
   stroke(0, 100, 255);
   line(0, 0, 75, 0);
   pop();

   push();
   rotate(hourAngle);
   stroke(150, 255, 100);
   line(0, 0, 50, 0);
   pop();

   stroke(255);
   point(0, 0);

push()
rotate(90);
if (sc>10){
fill(255,10,155);
textSize(15);
  text('10',50,-50,50,50);
}   if (sc>20){

    text('20',60,30,50,50);
}
 if (sc>30){

    text('30',0,70,50,50);
}
 if (sc>40){

    text('40',-70,30,50,50);
}
 if (sc>50){

    text('50',-50,-50,50,50);
}
 if (sc>58){

    text('60',0,-70,50,50);
}
pop()
}
function mousePressed() {
    console.log(mouseX,mouseY);
    }
