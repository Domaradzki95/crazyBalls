const canvas = document.getElementById('crazy_balls');
const ctx = canvas.getContext('2d');


//render canvas

canvas.width= 500;
canvas.height = 500;
ctx.fillRect(0,0,500,500);



/* class crazyBalls {
    constructor(){

    }


} */


/* function rand(val){
    return Math.floor(Math.random()*val);
}

class Vec {
    constructor(x=0,y=0) {
        this.x=x;
        this.y=y;
    }
}

class Arc {
    constructor(r){
        this.pos = new Vec;
        this.r=r;
    }
}


class CrazyBall extends Arc {
    constructor(){
        super(rand(30))
        this.color= `rgb(${rand(256)},${rand(256)},${rand(256)})`;
        this.pos.x = rand(canvas.width);
        this.pos.y = rand(canvas.height);
    }
}




//draw circle


let crazyBallsStorage = [];
function ballsCreation (numb) {
    let ball;
      for(let i=0;i<numb;i++) {
        ball = new CrazyBall;
        crazyBallsStorage.push(ball);
    }
}
ballsCreation(10);
console.log(crazyBallsStorage.length)


function draw() {
    ctx.clearRect(0,0,canvas.width, canvas.height);

    for(let i=0; i< crazyBallsStorage.length; i++) {
        
        let cbs= crazyBallsStorage[i];
        ctx.fillStyle= cbs.color;
        ctx.beginPath();
        ctx.arc(cbs.pos.x,cbs.pos.y,cbs.r,0, 2* Math.PI);
        ctx.fill(); 
        
    }

    
}



function animate(){
    dx=1;
    crazyBallsStorage.forEach(element => { element.pos.x+=dx;
        if (element.pos.x > canvas.width) {dx= -dx}
        
    });
    draw();
    
    requestAnimationFrame(animate);
}

animate(); */


/* class Circle{
    constructor(x,y, dx, dy, radius){
        this.x=x;
        this.y=y;
        this.dx = dx;
        this.dy = dy;
        this.radius = radius;
        this.draw = () => {
            ctx.beginPath();
            ctx.arc(this.x,this.y, this.radius, 0,2*Math.PI);
            ctx.strokeStyle= "blue";
            ctx.stroke();
        }
        this.update = function() {
            if ( this.x + this.radius> canvas.width || this.x - this.radius<0) {
                this.dx = -this.dx;
            }
        
            if ( this.y + this.radius> canvas.height || this.y - this.radius<0) {
                this.dy = -this.dy;
            }
        
            this.x+=this.dx;
           this.y +=this.dy;
           this.draw();

        }
    }

} */



class Circle{
    constructor(x,y, dx, dy, radius){
        this.x=x;
        this.y=y;
        this.dx = dx;
        this.dy = dy;
        this.radius = radius;
    }
    draw() {
        ctx.beginPath();
        ctx.arc(this.x,this.y, this.radius, 0,2*Math.PI);
        ctx.strokeStyle= "blue";
        ctx.stroke();
        
    }
    update () {
        if ( this.x + this.radius> canvas.width || this.x - this.radius<0) {
            this.dx = -this.dx;
        }
    
        if ( this.y + this.radius> canvas.height || this.y - this.radius<0) {
            this.dy = -this.dy;
        }
    
        this.x+=this.dx;
       this.y +=this.dy;
       this.draw();

    }

};




let ballsArr = [];

for (let i = 0; i < 100; i++) {
    let radius = 30
    let x = Math.random() * (canvas.width - radius * 2) + radius;
    let dx = (Math.random() -0.5);
    let y= Math.random() * (canvas.height - radius *2) + radius;
    let dy = (Math.random() -0.5);
    
    ballsArr.push(new Circle(x,y,dx,dy,radius))
    
}



console.log(ballsArr);



function animete() {
    requestAnimationFrame(animete);
    ctx.clearRect(0,0,canvas.width,canvas.height)
    
    for (let i=0; i< ballsArr.length; i++){
        ballsArr[i].update();
    }
 
}

animete();