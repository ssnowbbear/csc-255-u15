//amount of circles
var numCircles = 100;
//generate random number
function randomNum(min, max) {
    return Math.random() * (max - min) + min;
}
//hexadecimal color
function randomColor() {
    var letters = '0123456789ABCDEF';
    var color = '#';
    for (var i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}
//drawing circles!
function circleDraw() {
    //get the canvas and check it
    var canvas = document.getElementById('circles');
    if (!canvas) {
        console.error("Canvas element not found!");
        return;
    }
    //canvas set to window size
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    var ctx = canvas.getContext('2d');
    if (!ctx) {
        console.error("2D context not available!");
        return;
    }
    for (var i = 0; i < numCircles; i++) {
        //randoms
        var x = randomNum(0, canvas.width);
        var y = randomNum(0, canvas.height);
        var radius = randomNum(10, 150);
        var color = randomColor();
        var opacity = randomNum(0.3, 0.9);
        //path
        ctx.beginPath();
        //circle (arc takes x,y,radius,startAngle,endAngle,counterclockwise) measured in radians
        ctx.arc(x, y, radius, 0, Math.PI * 2, false);
        //fill the paint balls!
        ctx.fillStyle = color;
        ctx.globalAlpha = opacity;
        ctx.fill();
        //borders
        ctx.strokeStyle = '#FFFFFF';
        ctx.lineWidth = randomNum(1, 3);
        ctx.globalAlpha = 0.2;
        ctx.stroke();
    }
}
//call on page load
circleDraw();
//re draw on resize
window.addEventListener('resize', circleDraw);
