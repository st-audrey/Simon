
function startOriginal(){ 
    var btnOnOff = document.getElementById("btn-on-off");
    if (btnOnOff.checked == true){
        new Game(1,3,0);
    }   
} 

function startVapor() {
    start.classList.add("start-fade");
    new Game(2,3,0);
}
