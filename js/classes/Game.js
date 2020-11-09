class Game {

    constructor(life, playerScore) {
        this.playerScore = playerScore;
        this.life=life;
        this.tabToRandomise =[];
        this.effectTab =[];
        this.melody = [];       
        this.userMelody = [];
        this.initBoard();
        this.clickable = false; 

    }

    initScore(playerScore){
        var scoreContainer = document.getElementById("score-container");
        scoreContainer.innerHTML = playerScore;       
    }

    initLife(life){
        var lifeContainer = document.getElementById("life-container");
        for (let i = 0; i <life; i++) {           
            var lifeImg = document.createElement("IMG");
            lifeImg.className = "life-img";
            lifeImg.setAttribute("src", "images/life.png");
            lifeContainer.appendChild(lifeImg);
        }
    }

    randomise(tab) {
        var i, j, tmp;
        for (i = tab.length - 1; i > 0; i--) {
            j = Math.floor(Math.random() * (i + 1));
            tmp = tab[i];
            tab[i] = tab[j];
            tab[j] = tmp;
        }
        return tab;
    }

    lineEffect(tab){
        function getOffset(touche) {
            const rect = touche.getBoundingClientRect();
            return {
            left: Math.round(rect.left),
            top: Math.round(rect.top),
            right:rect.right, 
            bottom: rect.bottom, 
            width: rect.width, 
            height:rect.height
            };
        }

        var touche0 = tab[0];
        var touche1 = tab[1];

        var yCenterTouche0 = (getOffset(touche0).top + (getOffset(touche0).height/2));
        var xCenterTouche0 = (getOffset(touche0).left + (getOffset(touche0).width/2));
        var yCenterTouche1 = (getOffset(touche1).top + (getOffset(touche1).height/2));
        var xCenterTouche1 = (getOffset(touche1).left + (getOffset(touche1).width/2));

        var color;

        function getColor(id){
            if(id == 0){
                color = "yellow";
            }else  if(id == 1){
                color = "orange";
            }else  if(id == 2){
                color = "red";
            }else  if(id == 3){
                color = "pink";
            }else  if(id == 4){
                color = "#c441b3";
            }else  if(id == 5){
                color = "blue";
            }else  if(id == 6){
                color = "#41c4b7";
            }else  if(id == 7){
                color = "green";
            }else{
                color = "black";
            }
            return color;
        }
       
        var color0 = touche0.id;
        var color1 = touche1.id;
        var color0 = getColor(color0);
        var color1 = getColor(color1);

        var c = document.getElementById("canvas");
        var ctx = c.getContext("2d");
        ctx.canvas.width  = window.innerWidth;
        ctx.canvas.height = window.innerHeight;

        var lineargradient = ctx.createLinearGradient(xCenterTouche0, yCenterTouche0, xCenterTouche1, yCenterTouche1);
        lineargradient.addColorStop(0, color0);
        lineargradient.addColorStop(1, color1);  
        ctx.strokeStyle = lineargradient; 
        ctx.lineWidth = 4;

        ctx.beginPath();
        ctx.moveTo(xCenterTouche0, yCenterTouche0);
        ctx.lineTo(xCenterTouche1, yCenterTouche1);
        ctx.stroke();
    }

    playGameEffect(){
        let effectTab = this.effectTab;
        if(effectTab.length >= 2){          
            this.lineEffect(this.effectTab);
            this.effectTab.shift();          
        }       
    }

    playGameMelody() {
        function playSingleNote(touche) {
            return new Promise(function (resolve, reject) {
                touche.isPlayed(touche.firstChild);
                setTimeout(function () {                   
                    resolve();
                }, 1000);
            });
        }

        function playMelody(melody, game) {
            return new Promise(function (resolve, reject) {
                var i = 0;
                function playNoteByNote(j) {
                    var note = melody[j];
                    if (!note) {
                        return resolve(game);
                    }
                    setTimeout(function () {    
                        playSingleNote(note).then(function () {
                            j++;
                            playNoteByNote(j);
                        });
                    }, 1000);
                }
                playNoteByNote(i);
            });
        }

        playMelody(this.melody, this).then(function (game) {
            game.clickable = true;
        });
    }

    compareMelodies(userMelodyToCompare) {
        var melodyLength = this.melody.length;
        var userMelodyLength = userMelodyToCompare.length;

        for (let i = 0; i < userMelodyLength; i++) {
            var noteUser = userMelodyToCompare[i];
            var noteGame = this.melody[i];           

            if (noteUser === noteGame) {
                if ((userMelodyLength == melodyLength) && (i == melodyLength - 1)) {
                    //joueur gagne -> ajoute une touche a la melodie                                   
                    this.addNewTouche();                                    
                    //TODO = ajouter 1win au score
                }
            } else {
                this.clickable = false;
                function playAudio(audio) {
                    new Audio(audio).play();
                }    
                var soundToPlay = "sounds/aww.mp3";
                playAudio(soundToPlay); 
                var gameOverModal=document.getElementById("gameover-modal");
                gameOverModal.style.display = "block";     
                break;
                //TODO = recuperer le score du joueur =>localStorage
            }
        }
    }

    addNewTouche() {
        this.userMelody = [];
        this.clickable = false;
        this.randomise(this.tabToRandomise);
        this.melody.push(this.tabToRandomise[0]);
        this.playGameMelody();
    }

    initBoard() {
        this.initLife(this.life);
        this.initScore(this.playerScore);
        let container = document.getElementById('container');
        for (let i = 0; i < 8; i++) {
            let touche = new Touche(i,this); 
            touche.initListeners(); 
            this.tabToRandomise.push(touche);       
            container.appendChild(touche);
        }
        var touches = document.getElementsByTagName("touche-simon");
        for (let i = 0; i < touches.length; i++) {
            touches[i].classList.add("touche");                        
        } 
        this.addNewTouche();      
    }  
}
