class Bob{
    constructor(x,y,r){
        var option={
            isStatic:false,
            restitution:0.3,
            friction:0.5,
            density:1.2
        }
        this.bob=Bodies.circle(x,y,r/2,option);
        this.x=x;
        this.y=y;
        this.r=r;
        World.add(world, this.bob);
    }
    display(){
        var paperpos=this.bob.position;
        
        push();
        ellipseMode(RADIUS);
        strokeWeight(3);
        fill(255,0,255);
        ellipse(paperpos.x,paperpos.y,this.r,this.r);
        pop();

    }
}