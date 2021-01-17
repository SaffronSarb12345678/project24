class ball {
constructor(x,y,r){
    var b_option={

        restitution:0.3,
        friction:0.5,
        density:1.2
	
	  }

	this.body=Bodies.circle(x,y,r,b_option)
    World.add(world,this.body);

}
  display()
  {
    ellipseMode(RADIUS);
    ellipse(this.body.position.x,this.body.position.y,10,10)

  }


}