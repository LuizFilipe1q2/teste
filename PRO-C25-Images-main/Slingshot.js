class Slingshot {
    constructor(bodyA,pointB) {

        var options = {
            bodyA: bodyA,
            pointB: pointB,
            //rigidez
            stiffness: 0.08,
            //densidade
            length: 10
        }
        this.sling1 = loadImage('sprites/sling1.png');
        this.sling2 = loadImage('sprites/sling2.png');
        this.sling3 = loadImage('sprites/sling3.png');
        this.pointB = pointB
        this.Sling = Matter.Constraint.create(options);
        World.add(world, this.Sling);
    }
     fly() {

      this.Sling.bodyA = null


    
     }
     attach (body) {

         this.Sling.bodyA = body

     }
    
     display() {
        
        image(this.sling1, 180,20);
        image(this.sling2, 150,20)
        
        if (this.Sling.bodyA) {

        var pointA = this.Sling.bodyA.position;
        var pointB = this.pointB

        push()
        stroke("rgb(48, 22, 8)");
        if(pointA.x<220) {
 
        strokeWeight(10);
        line(pointA.x-20, pointA.y, pointB.x-10, pointB.y)
        line(pointA.x-20, pointA.y, pointB.x+30, pointB.y-3)
        image(this.sling3,pointA.x-30,pointA.y-10,15,15)
    }
       else {

        strokeWeight(5);
        line(pointA.x+25, pointA.y, pointB.x-10, pointB.y)
        line(pointA.x+25, pointA.y, pointB.x+30, pointB.y-3)
        image(this.sling3,pointA.x+25,pointA.y-10,15,15)


       }
    pop ();
        }
    
    }


}