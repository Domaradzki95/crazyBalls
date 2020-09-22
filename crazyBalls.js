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


function rand(val){
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
ballsCreation(1);
console.log(crazyBallsStorage)


function draw() {

    for(let i=0; i< crazyBallsStorage.length; i++) {
        let cbs= crazyBallsStorage[i];
        ctx.fillStyle= cbs.color;
        ctx.beginPath();
        ctx.arc(cbs.pos.x,cbs.pos.y,cbs.r,0, 2* Math.PI);
        ctx.fill(); 
        console.log('dd')
    }

}



function animate(){
    crazyBallsStorage[0].pos.x++;
    draw();
    requestAnimationFrame(animate);
}

animate();