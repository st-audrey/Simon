class Touche extends HTMLElement {

    constructor(i, game) {
        super();     
        this.game = game;
        this.createTouche(i);             
    }

    initListeners() {
        this.onclick = function () {
           if (this.game.clickable) {
                if(this.game.version == 2){
                    var allTouches = document.querySelectorAll(".touche-img");
                    for (let i = 0; i < allTouches.length; i++) {
                        allTouches[i].classList.remove("touche-active");
                    }  

                    this.isPlayed(this.firstChild);
                    this.game.userMelody.push(this);              
                    this.game.effectTab.push(this);
                    this.game.playGameEffect();
                    this.game.compareMelodies(this.game.userMelody); 

                }else{          
                    var allTouches = document.querySelectorAll(".touch-btn");
                    for (let i = 0; i < allTouches.length; i++) {
                        allTouches[i].classList.remove("touche-active");
                    }  
                    this.isPlayed();
                    this.game.userMelody.push(this);              
                    this.game.effectTab.push(this);               
                    this.game.compareMelodies(this.game.userMelody); 
                }   
            }
        }
    }

    createTouche(i) {
        if(this.game.version == 2){
            var touche = document.createElement("IMG");   
            touche.classList.add('touche-img');
            touche.setAttribute('id', 'touche'+i.toString());
            touche.setAttribute("src", "images/note" + i.toString() + ".png");        
            this.setAttribute("style", "--i:" + i.toString()+";");
            this.setAttribute("id", i.toString());
            this.appendChild(touche);  
        }else{
            this.classList.add('touch-btn');     
            this.setAttribute("id", "touche"+i.toString()); 
        }      
    }

    isPlayed(touche) {
        if(this.game.version == 2){
            touche.classList.add('touche-active');
            this.playSound(touche);   
            var allTouches= document.querySelectorAll(".touche-img");
            setTimeout(function () {
                for (let i = 0; i < allTouches.length; i++) {
                    allTouches[i].classList.remove("touche-active");
                }  
            }, 1000)
        }else{
            this.classList.add('touche-active');
            this.playSound();   
            var allTouches= document.querySelectorAll(".touch-btn");
            setTimeout(function () {
                for (let i = 0; i < allTouches.length; i++) {
                    allTouches[i].classList.remove("touche-active");
                }  
            }, 1000)
        }    
    }

    playSound(touche) {
        function playAudio(audio) {
            new Audio(audio).play();
        }

        if(this.game.version == 2){
            var soundToPlay = "sounds/" + touche.id + ".mp3";
            playAudio(soundToPlay); 
        }else{
            var soundToPlay = "sounds/" + this.id + ".mp3";
            playAudio(soundToPlay); 
        }          
    }
   
}
customElements.define('touche-simon', Touche);