var hunter ,hunterimg;
var bgImg;
var bg;
function preload(){
	hunterimg=loadImage("hunter2.png");
bgImg=loadImage("bg4.gif");

}
function setup (){
	createCanvas(displayWidth,displayHeight);
 
bg=createSprite(displayWidth/2,displayHeight/2,displayWidth,displayHeight)
bg.addImage(bgImg)
bg.scale=2.5;
hunter = createSprite(50,displayHeight-70,40,40);
hunter.addImage(hunterimg);
hunter.scale=0.5;
}
function draw(){
	background(0)
	drawSprites();
}