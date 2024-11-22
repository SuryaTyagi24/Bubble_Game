var timer = 60;
var score = 0;
var hitrn = 0;
function increaseScore(){
   score += 10;
   document.querySelector("#scoreval").innerHTML = score;
}
function get_NewHit(){
     hitrn = Math.floor(Math.random()*10);
    document.querySelector("#Hitval").innerHTML = hitrn;
}
function makeBubble(){
    var clutter ="";

for(var i=1; i<=168; i++){
    var rn = Math.floor(Math.random()*10)
    clutter += `<div class="bubble">${rn}</div>`;
}
document.querySelector("#panel_bottom").innerHTML = clutter;
}
function runTimer(){
 var timer_interval = setInterval(function() {
    if(timer>0){
    timer --;
    document.querySelector("#timerval").textContent = timer;
    }
 else{
    clearInterval(timer_interval);
    document.querySelector("#panel_bottom").innerHTML = `<h1>Game Over</h1>`;
 }
 }, 1000);
}
document.querySelector("#panel_bottom").addEventListener("click",function (details){
 var clickednum = (Number(details.target.textContent));
    if(clickednum === hitrn){
       increaseScore();
       makeBubble(); 
       get_NewHit();
    }
});
get_NewHit();
runTimer();
makeBubble();

