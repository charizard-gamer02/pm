/*class Mango{
	constructor(x,y,radius)
	{
		var options={
			isStatic:false,
			restitution :0.3,
            friction :1,
         
			}
		this.x=x;
		this.y=y;
		this.radius=radius
		this.image=loadImage("mango.png")
		this.body=Bodies.circle(this.x, this.y, this.radius, options)
		World.add(world, this.body);
	}

	display()
	{
		var mangoPos=this.body.position;	
		push()
		translate(mangoPos.x, mangoPos.y);
		rotate(this.body.angle)
		fill(255,0,255)
		imageMode(CENTER);
		ellipseMode(CENTER);
		image(this.image, 0,0,this.radius/2, this.radius/2)
		pop()
 }
}*/
class Mango{
    constructor(x,y,radius){
        var options = {
            isStatic: true
        }

        this.body=Bodies.circle(x,y,radius/2,options)
        World.add(world,this.body);
this.image=loadImage("mango.png");
}
display(){ 
    var pos =this.body.position; 

     push()

       translate(pos.x,pos.y)
     
         imageMode(CENTER);
        
           image(this.image,0, 0,50,50); 
           pop()
         
         
    }

}