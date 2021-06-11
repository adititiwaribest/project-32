const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var backgroundImg;

var bg ;

function preload() {
    // create getBackgroundImg( ) here
    getBackgroundImg();
}

function setup(){
    var canvas = createCanvas(1200,700);
    engine = Engine.create();
    world = engine.world;

}

function draw(){

    // add condition to check if any background image is there to add
if (backgroundImg){
    background(backgroundImg)
}

    Engine.update(engine);

    // write code to display time in correct format here


}

async function getBackgroundImg(){

    // write code to fetch time from API
    var responce = await fetch ("http://worldtimeapi.org/api/timezone/Asia/Kolkata")
    //change the data in JSON format
var json= await responce.json()
    // write code slice the datetime
var datetime= json.datetime;
var hour  = datetime.slice(11,13)
console.log (hour)
    // add conditions to change the background images from sunrise to sunset

if (hour>=6&&hour<=12){
bg=("sunrise1.png")
} else if (hour>=12&&hour<=14){
    bg=("sunrise4.png")
}else if (hour>=14&&hour<=17){
    bg=("sunrise5.png")
}
else{
    bg=("sunset7.png")
}
    //load the image in backgroundImg variable here
backgroungImg=loadImage(bg);
}
