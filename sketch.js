//Create variables here

var Dog,happyDog,database,foodS,foodStock;
var DogImage1,DogImage2;
var food;

var feedpet,addfood,fedtime,lastfed;
var foodobj;

function preload()
{
  //load images here
  DogImage1 = loadImage("dogImg.png")
  DogImage2 = loadImage("dogImg1.png")
}

function setup() {
  createCanvas(1000,500);
  
  database = firebase.database()

  Dog = createSprite(750,325)
  Dog.addImage(DogImage2)
  Dog.scale = 0.2

  foodobj = new foods()

  feedpet = createButton("Feed the Pet")
  feedpet.position(700,95)

  addfood = createButton("Add Food")
  addfood.position(800,95)
  
}


function draw() {  

  background(46,139,87)

  fedtime=database.ref("feedTime")
  fedtime.on("value",function(data){
    lastfed = data.val();
  })
 
  fill(255,255,254)
  textSize(15)
  if(lastfed>=12){
    text("Last Feed : "+lastfed%12 + " PM",350,30)
  }else if(lastfed==0){
    text("Last Feed : 12 AM",350,30)
  }else{
    text("Last Feed : "+lastfed+" AM",350,30)
  }

  foodobj.getfood();
  
  fill('black')
  textSize(20)
  stroke(20)
  text("Food : "+food,200,200)

  foodobj.display();

  feedpet.mousePressed(feedDog)
  addfood.mousePressed(addfoods)

  drawSprites();

}

function showError(){
  console.log('Error!!')
}

function feedDog(){
  Dog.addImage(DogImage1)
  
  foodobj.updatefood(foodobj.getfood()-1)
  foodobj.updatefood(foodobj.deductfood()-1)
}

function addfoods(){
  foodS++;
  database.ref('/').update({
    Food:foodS
  })
}