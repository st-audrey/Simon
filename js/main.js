
var modal = document.getElementById("modal");
var modalBtn = document.getElementById("modal-btn");

// window.onclick = function(event) {
//   if (event.target == modal) {
//     modal.style.display = "none";
//   }
// } 

modalBtn.onclick = function(){   
    var invader = document.getElementById("modal-gif");
    invader.setAttribute("style","z-index:1;animation-name:invade");
    setTimeout(function () {
        new Game(3,0);
        modal.style.display = "none";
    }, 3550)       
}