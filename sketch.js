var dog, happydog;
var database;
var foods, foodstock;
var gameState;
var PLAY, PICTURE;

function preload()
{
  //load images here
  DogImage = loadImage("images/dogImg.png");
  HappyDogImage = loadImage("images/dogImg1.png");
  BedRoomImage = loadImage("virtual pet images/Bed Room.png");
  deadDogImage = loadImage("virtual pet images/deadDog.png");
  StandingDogImage = loadImage("virtual pet images/Dog.png");
  VaccineDogImage = loadImage("virtual pet images/dogVaccination.png");
  FoodStockImage = loadImage("virtual pet images/Food Stock.png");
  GardenImage = loadImage("virtual pet images/Garden.png");
  HappydogImage = loadImage("virtual pet images/happy dog.png");
  HappyImage = loadImage("virtual pet images/Happy.png");
  InjectionImage = loadImage("virtual pet images/Injection.png");
  LazyImage = loadImage("virtual pet images/Lazy.png");
  LivingRoomImage = loadImage("virtual pet images/Living Room.png");
  milkImage = loadImage("virtual pet images/milk.png");
  runningImage = loadImage("virtual pet images/running.png");
  runningLeftImage = loadImage("virtual pet images/runningLeft.png");
  VaccinationImage = loadImage("virtual pet images/Vaccination.png");
  WashRoomImage = loadImage("virtual pet images/Wash Room.png");
}

function setup() {
  createCanvas(500, 500);
  
  dog = createSprite(250,250);
  dog.addImage(deadDogImage);
  foodstock=database.ref('Food');
  foodstock.on("value", readstock);
  database = firebase.database();

  gameState;
}


function draw() { 
  
  background(46,139,87);

if(keyWentDown(UP_ARROW)){
  writeStock(foodS);
  dog.addImage(HappyDogImage);

}

  drawSprites();
  //add styles here
  textSize(25);
  text("Food Left : " + foodstock , 10, 10);
  text("Note : Press UP_ARROW to feed your dog !", 450, 200);

}

function readstock(data){
  foodS = data.val();
}

function writeStock(x){

if(x<=0){
 x = 0;
}else{
  x=x-1;
}

readState=database.ref('gameState');
readState.on("value",function(data){
  gameState = data.val();
});

database.ref('/').update({
  Food:x
})

}



