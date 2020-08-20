class Drager{
    constructor(bodyA, pointB){
        var options = {
            bodyA: bodyA,
            pointB: pointB,
            stiffness: 0.04,
            length: 1
        }
        this.drag = Constraint.create(options);
        this.pointB=pointB;
        World.add(world, this.drag);

    }
    fly(){
        this.drag.bodyA =null;
    }
    attach(body){
        this.drag.bodyA=body;
    }
    display(){
        if(this.drag.bodyA){
        var pointA = this.drag.bodyA.position;
        var pointB = this.pointB;
        
        strokeWeight(4);
        stroke("turquoise");
        line(pointA.x, pointA.y, pointB.x, pointB.y);
        }
        }
    
}