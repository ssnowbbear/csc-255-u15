const timer = document.getElementById("timer")!
const startBtn = document.getElementById("start") as HTMLElement
const stopBtn = document.getElementById("stop")

let count = 0;
let timing = false;

startBtn.addEventListener('click',()=>{
    timing = true
})
stopBtn!.addEventListener('click',function(){
    timing = false
})

setInterval(function(){
    if (timing){
        count++
    }
    timer.innerHTML = count 
}, 10);

//have to look at video. something is missing