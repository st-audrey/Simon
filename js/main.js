var start = document.getElementById("start");
start.addEventListener("click", function () {
    start.classList.add("start-fade");
    new Game(3,0);
});