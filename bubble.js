class Bubble{
    constructor(x,y,color){

        var option = {restitution:0.8}
        this.body = Bodies.circle(x,y,30,option);
        this.r = 30;
        this.color = color
 World.add(world,this.body)
    }
display(){
var pos = this.body.position
fill(this.color)
ellipseMode(RADIUS);
ellipse(pos.x,pos.y,this.r,this.r);
}
}