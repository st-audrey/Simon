var touche0 = document.getElementById("touche0");
touche0.addEventListener("click", addEffectClass);

function addEffectClass() {
    this.classList.add("click-animate");
}