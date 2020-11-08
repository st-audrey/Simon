class Touche extends HTMLElement {

    constructor(i, game) {
        super();     
        this.game = game;
        this.createTouche(i);
        this.initListeners();         
    }

    initListeners() {
        this.onclick = function () {
        //    if (this.game.clickable) {
                var allTouches = document.querySelectorAll(".touche-img");
                    for (let i = 0; i < allTouches.length; i++) {
                    allTouches[i].classList.remove("touche-active");
                    }      

                this.isPlayed(this.firstChild);
                this.game.effectTab.push(this);
                this.game.playGame();
                //this.game.compareMelodies(this.game.userMelody); 
           //}
        }
    }

    createTouche(i) {
        var touche = document.createElement("IMG");   
        touche.classList.add('touche-img');
        touche.setAttribute('id', 'touche'+i.toString());
        touche.setAttribute("src", "images/note" + i.toString() + ".png");        
        this.setAttribute("style", "--i:" + i.toString()+";");
        this.setAttribute("id", i.toString());
        this.appendChild(touche);  
    }

    isPlayed(touche) {
        touche.classList.add('touche-active');

        this.playSound(touche);
    
        var allTouches= document.querySelectorAll(".touche-img");
        setTimeout(function () {
            for (let i = 0; i < allTouches.length; i++) {
                allTouches[i].classList.remove("touche-active");
            }  
        }, 1000)
    }

    playSound(touche) {
        function playAudio(audio) {
            new Audio(audio).play();
        }

        var soundToPlay = "sounds/" + touche.id + ".mp3";
        playAudio(soundToPlay);      
    }
   
}
customElements.define('touche-simon', Touche);