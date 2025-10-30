//amount of circles
const numCircles = 100

//generate random number
function randomNum(min: number,max: number): number {
    return Math.random() * (max - min) + min;
}

//hexadecimal color
function randomColor(): string {
    const letters = '0123456789ABCDEF';
    let color = '#';
    for(let i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}

//drawing circles!
function circleDraw() {
    //get the canvas and check it
    const canvas = document.getElementById('circles') as HTMLCanvasElement
    if(!canvas){
        console.error("Canvas element not found!");
        return;
    }

    //canvas set to window size
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    const ctx = canvas.getContext('2d');
    if (!ctx) {
        console.error("2D context not available!");
        return;
    }

    for(let i = 0; i < numCircles; i++) {
        //randoms
        const x = randomNum(0,canvas.width);
        const y = randomNum(0,canvas.height);
        const radius = randomNum(10,150);
        const color = randomColor();
        const opacity = randomNum(0.3, 0.9);
        
        //path
        ctx.beginPath();
    
        //circle (arc takes x,y,radius,startAngle,endAngle,counterclockwise) measured in radians
        ctx.arc(x, y, radius, 0, Math.PI * 2, false)

        //fill the paint balls!
        ctx.fillStyle = color;
        ctx.globalAlpha = opacity;
        ctx.fill();

        //borders
        ctx.strokeStyle = '#FFFFFF';
        ctx.lineWidth = randomNum(1,3);
        ctx.globalAlpha = 0.2;
        ctx.stroke();
    }
}

//call on page load
circleDraw();

//re draw on resize
window.addEventListener('resize', circleDraw);