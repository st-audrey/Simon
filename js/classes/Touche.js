class Touche extends HTMLElement {

    constructor(i, game) {
        super();     
        this.game = game;
        this.createTouche(i);
        this.initListeners();         
    }

    initListeners() {
        this.onclick = function () {
           // if (this.game.clickable) {
                // var allTouches = document.querySelectorAll(".touche");
                // for (let i = 0; i < allTouches.length; i++) {
                //     allTouches[i].classList.remove("click-anime");
                // }      
                //this.isPlayed();
                this.game.effectTab.push(this);
                console.log(this.game.effectTab);
                this.game.playGame();
                //this.game.compareMelodies(this.game.userMelody); 
           // }
        }
    }

    createTouche(i) {
        var touche = document.createElement("IMG");
        touche.classList.add('touche-img');
        touche.setAttribute('id', 'touche'+i.toString());
        touche.setAttribute("src", "images/" + i.toString() + ".png");        
        this.setAttribute("style", "--i:" + i.toString());
        this.appendChild(touche);  
    }
}
customElements.define('touche-simon', Touche);