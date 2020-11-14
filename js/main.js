// var start = document.getElementById("start");
// start.addEventListener("click", function () {
//     start.classList.add("start-fade");
//     new Game(3,0);
// });

var btnOnOff = document.getElementById("btn-on-off");
btnStart = document.getElementById("btn-start");

btnStart.onclick = function(){ 
    if (btnOnOff.checked == true){
        new Game(3,0);
    }   
} 