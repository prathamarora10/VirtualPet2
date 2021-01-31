class foods
{
    constructor(){
        this.foodstock = null;
        this.lastfed = 0;
        this.milk = loadImage("Milk.png")
    }

    getfood(){
        var foodref = database.ref('Food');
        foodref.on("value",(data)=>{
          food = data.val();
        })
      }

      updatefood(food){
        database.ref('Food').update({
         Food:food
        });
      }

      deductfood(food){
        database.ref('Food').update({
          Food:food-1
        })
      }

      display(){
          var x=80,y=100;

          imageMode(CENTER)
          image(this.milk,570,320,70,70)
          imageMode(CENTER)
          image(this.milk,120,320,70,70)
          imageMode(CENTER)
          image(this.milk,170,320,70,70)
          imageMode(CENTER)
          image(this.milk,220,320,70,70)
          imageMode(CENTER)
          image(this.milk,270,320,70,70)
          imageMode(CENTER)
          image(this.milk,320,320,70,70)
          imageMode(CENTER)
          image(this.milk,370,320,70,70)
          imageMode(CENTER)
          image(this.milk,420,320,70,70)
          imageMode(CENTER)
          image(this.milk,470,320,70,70)
          imageMode(CENTER)
          image(this.milk,520,320,70,70)

          imageMode(CENTER)
          image(this.milk,570,400,70,70)
          imageMode(CENTER)
          image(this.milk,120,400,70,70)
          imageMode(CENTER)
          image(this.milk,170,400,70,70)
          imageMode(CENTER)
          image(this.milk,220,400,70,70)
          imageMode(CENTER)
          image(this.milk,270,400,70,70)
          imageMode(CENTER)
          image(this.milk,320,400,70,70)
          imageMode(CENTER)
          image(this.milk,370,400,70,70)
          imageMode(CENTER)
          image(this.milk,420,400,70,70)
          imageMode(CENTER)
          image(this.milk,470,400,70,70)
          imageMode(CENTER)
          image(this.milk,520,400,70,70)

          if(this.foodstock!=null){
            for(var i=0;i<this.foodstock;i++){
              if(i%10==0){
                x=80;
                y=y+50;
              }
              image(this.milk,x,y,50,50)
              x=x+50;
            }
          }
      }
    
}