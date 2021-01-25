//Create variables here
var dog , dogImg , h_dog, h_dogImg;
var database , position;
var foodS , foodStock;
function preload()
{
  //load images here
  dogImg = loadImage("images/dogImg.png")
  h_dogImg = loadImage("images/dogImg1.png");
}

function setup() {
  database = firebase.database();
  createCanvas(500, 500);
  dog = createSprite(250,410,40,40);
  dog.addImage(dogImg);
  dog.scale = 0.2;
  foodStock = database.ref('food');
  foodStock.on('value',readStock);
  
  
}


function draw() {  
  background(46,139,87);

  if(keyDown(UP_ARROW)){
    writeStock(foodS);
    dog.addImage(h_dogImg);
    
  }

  drawSprites();
  //add styles here
textSize(30);
text("food remaining:"+ foodS,150,200)
;}

function readStock(data){
  foodS = data.val();
}

function writeStock(x){
if(x<=0){
x=0;
}
else{
  x=x-1;
}
  database.ref('/').update({
  food:x
  })
}





