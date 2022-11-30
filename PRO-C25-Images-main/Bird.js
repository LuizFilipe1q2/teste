class Bird extends BaseClass{
  constructor(x,y){
    super(x,y,50,50);
    this.image = loadImage("sprites/bird.png");
    this.imageSmoke = loadImage ('sprites/smoke.png');
    this.trajetoria = [];
  }
  display(){
    
    super.display();
    if(this.body.velocity.x>2&&this.body.position.x>100) {

     var position = [this.body.position.x,this.body.position.y];

     this.trajetoria.push(position);

     console.log (this.trajetoria);


    }
    for(var i = 0;i<this.trajetoria.length;i++) {

     image(this.imageSmoke,this.trajetoria[i][0],this.trajetoria[i][1],10,15,15)

      
    }
  }
}