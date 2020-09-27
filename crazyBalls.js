const canvas = document.getElementById('crazy_balls');
const ctx = canvas.getContext('2d');



//render canvas
let size = {
    width: window.innerWidth,
    height: window.innerHeight
}
canvas.width= size.width;
canvas.height = size.height;

console.log('inner'+ window.innerWidth)
ctx.fillStyle="#ecf0f1";
ctx.fillRect(0,0,canvas.width,canvas.height);


let mouse = {
    x: undefined,
    y: undefined
}

const maxRadius = 40;


let colorArray = [
    '#9b59b6',
    '#f8fa90',
    '#AC9969',
    '#9DCDC0',
    '#28112B'
];


window.addEventListener('mousemove', function(event) {
    
    mouse.x = event.x;
    mouse.y = event.y;
})

window.addEventListener('resize',function(e){
    console.log(e);
    canvas.width=size.width;
    canvas.height = size.height;
    init();
})

class Circle{
    constructor(x,y, dx, dy, radius){
        this.x=x;
        this.y=y;
        this.dx = dx;
        this.dy = dy;
        this.radius = radius;
        this.minRadius = radius;
        this.color = Math.floor(Math.random()*colorArray.length);
    }
    draw() {
        ctx.beginPath();
        ctx.arc(this.x,this.y, this.radius, 0,2*Math.PI);
        ctx.fillStyle = colorArray[this.color];
        
        ctx.fill();
        
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
       // interactivity
      
        if  (mouse.x - this.x < 50 && mouse.x -this.x > -50 
            && mouse.y - this.y < 50 && mouse.y - this.y >-50          
            ){
            if (this.radius < maxRadius){this.radius +=1;}
            
        } else if (this.radius >  this.minRadius) {this.radius-=1;} ;

       this.draw();

    }

};


let ballsArr = [];



function init() {
    ballsArr = [];

    for (let i = 0; i < 1000; i++) {
    let radius = Math.floor(Math.random() * 5 + 1);
    let x = Math.random() * (canvas.width - radius * 2) + radius;
    let dx = (Math.random() -0.5);
    let y= Math.random() * (canvas.height - radius *2) + radius;
    let dy = (Math.random() -0.5);
    
    ballsArr.push(new Circle(x,y,dx,dy,radius))
    
}
}


function animate() {
    requestAnimationFrame(animate);
    ctx.clearRect(0,0,canvas.width,canvas.height)
    ctx.fillStyle="#ecf0f1";
    ctx.fillRect(0,0,canvas.width,canvas.height);
    
    for (let i=0; i< ballsArr.length; i++){
        ballsArr[i].update();
    }
 
}

animate();

init();