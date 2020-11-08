
var modal = document.getElementById("modal");
var modalBtn = document.getElementById("modal-btn");

window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
} 

modalBtn.onclick = function(){
    new Game;
    modal.style.display = "none";
}