class Block{
    constructor(x,y,width,height){
        var options={
            'isStatic':false,
            'friction':0.3,
            'restitution':0.8,
            'density':1.0
        }
        this.Visibility=225
        this.body=Bodies.rectangle(x,y,width,height,options);
        this.width=width;
        this.height=height;
        World.add(world,this.body);
    }
    score(){
        if(this.Visibility<0 && this.Visibility>-1005){
            score++;
        }
    }
    display(){
        if(this.body.speed<3){
        var pos= this.body.position;
        var angle=this.body.angle
        push();
        translate(pos.x,pos.y)
        rotate(angle);
        rectMode(CENTER);
        // fill("violet");
        rect(0,0,this.width,this.height);
        pop();
        }
        else{
            World.remove(world,this.body);
            push();
            this.Visibility=this.Visibility-5;
            pop();
        }
    }
}