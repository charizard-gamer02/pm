class SlingShot{
    constructor(bodyA, pointB){
        var options = {
            bodyA: bodyA,
            pointB: pointB,
            stiffness: 0.07,
            length: 10
        }
        this.sling1 = loadImage('boy.png');
        this.pointB = pointB
        this.sling = Matter.Constraint.create(options);
        World.add(world, this.sling);
    }
    attach(body){
        this.sling.bodyA = body;
        
    }
    
    fly(){
        this.sling.bodyA = null;
    }

    display(){
        image(this.sling1,400,550,200,200);
        
        if(this.sling.bodyA){
            var bodyA = this.sling.bodyA.position;
            var pointB = this.pointB;
            line(bodyA.x, bodyA.y, pointB.x, pointB.y);
           
            
        }
    }
}
             