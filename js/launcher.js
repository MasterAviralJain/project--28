class Launcher{
    constructor(bodyA,pointB){
        var options={
            bodyA:bodyA,
            pointB:pointB,
            stiffness:0.09,
            length:10,
        }
        this.launcher=Constraint.create(options);
       
        World.add(world,this.launcher);
    }
    attach(body){
        this.launcher.bodyA=body
    }
    fly(){
        this.launcher.bodyA=null;
    }


    display(){
        if (this.launcher.bodyA){
        var pointA=this.launcher.bodyA.position;
        var pointB=this.launcher.pointB;
      push ();
        stroke("#301608")
        
            strokeWeight(3);
        line (pointA.x,pointA.y,pointB.x,pointB.y);
       
        
            }
       
    pop ();
    }
}