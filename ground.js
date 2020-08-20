class Ground{
    constructor(x,y,width,height){

var options={
    isSatitic:false,
    restitution:0.3,
    friction:0.5,
    density:1.2
}
this.body = Bodies.rectangle(x, y,width,height, options);
this.width=width;
this.height=height;
World.add(world, this.body);
    }
    display(){
        var Pos=this.body.position;		

			push()
			translate(Pos.x, Pos.y);
			rectMode(CENTER)
			strokeWeight(4);
			fill(255,255,0)
			rect(0,0,width, height);
			pop()
			
    }
}