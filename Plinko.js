class Plinko {
    constructor(x, y, r) {
        var options = {
           isStatic:true, 
           density:1.2
        }
        this.x = x;
        this.y=y;
        this.r=r;
        this.body=Bodies.circle(this.x, this.y, 10, options);
        World.add(world, this.body);
    }
    display() {
        var plinkopos=this.body.position;

        push();
        translate(paperpos.x, paperpos.y);
        ellipseMode(RADIUS);
        ellipse(0,0,this.r, this.r);
        strokeWeight(3);
        fill("white");
        pop(); 
    }
}