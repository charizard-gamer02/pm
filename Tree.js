class Tree{
    constructor(x,y){
        var options = {
            isStatic: true
        }

        
        this.body = Bodies.rectangle(x, y, 10, 10,options);
        World.add(world, this.body);
this.image=loadImage("tree.png");
}
display(){ 
    var pos =this.body.position; 

     push()

       translate(pos.x,pos.y)
     
         imageMode(CENTER);
        
           image(this.image,0, 0, 500, 500); 
           pop()
         
         
    }

}