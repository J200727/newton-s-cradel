class bob{

    constructor(alyssa,angela,r){

        var options={
            isStatic:false,
            restitution:1,
            friction:0,
            density:1
        }
        this.alyssa=alyssa;
        this.angela=angela;
        this.r=r

        this.body=Bodies.circle(this.alyssa,this.angela,
            this.r,options)
        World.add(world,this.body);

    }
    display(){
        push()
            var paperposition=this.body.position;
            
            rectMode(CENTER)
            
            fill(255,0,255)
        
            ellipse(this.body.position.x, this.body.position.y, this.r*2, this.r*2)
            pop()
    }
    
    }
          