var timer = document.getElementById("timer");
var startBtn = document.getElementById("start");
var stopBtn = document.getElementById("stop");
var count = 0;
var timing = false;
startBtn.addEVentListener('click', function () {
    timing = true;
});
stopBtn.addEVentListener('click', function () {
    timing = false;
});
setInterval(function () {
    if (timing) {
        count++;
    }
    timer.innerHTML = count;
}, 10);
