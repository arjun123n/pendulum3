class bob
{

    constructor(x,y,r)
    {

var options =
 {
isStatic:false,
restitution:1,
friction:0,
density:0.5
}
this.x = x;
this.y = y;
this.r = r;
//var body = this.body;

this.body=Bodies.circle(this.x,this.y,r,options);
World.add(world,this.body);
    }
    display()
    {
var paperpos=this.body.position;
push()
translate(paperpos.x,paperpos.y);
ellipseMode(RADIUS);
fill(255,0,255);
ellipse(0,0,this.r,this.r);
pop()



    }



}