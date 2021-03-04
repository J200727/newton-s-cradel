class roof{
    
    constructor(x,y,w,h){
        
        this.x=x;
		this.y=y;
		this.w=w
		this.h=h
		this.body=Bodies.rectangle(x, y, w, h,{isStatic:true});
 		World.add(world, this.body); 
    }
    display(){
        push()
        var groundposition=this.body.position;
        
    
        rectMode(CENTER)
        //strokeWeight(4);
        fill(128,128,128)
        rect(groundposition.x,groundposition.y,this.w,this.h);
        pop()
    }

    
    }