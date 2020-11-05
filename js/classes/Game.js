class Game {

    constructor() {
        this.effectTab =[];
        this.initBoard();
        this.clickable = false;
        
    }

    lineEffect(tab){

        //developer.mozilla.org/fr/docs/Web/API/Element/getBoundingClientRect
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

        //récup coordonnées du centre du premier el du tableau
        //récup coordonnées du centre du deuxième el du tableau
        var touche0 = tab[0];
        var touche1 = tab[1];

        var yCenterTouche0 = (getOffset(touche0).top + (getOffset(touche0).height/2));
        var xCenterTouche0 = (getOffset(touche0).left + (getOffset(touche0).width/2));
        var yCenterTouche1 = (getOffset(touche1).top + (getOffset(touche1).height/2));
        var xCenterTouche1 = (getOffset(touche1).left + (getOffset(touche1).width/2));

        console.log(yCenterTouche0);
        console.log(xCenterTouche0);
        console.log(yCenterTouche1);
        console.log(xCenterTouche1);
        

        var c = document.getElementById("canvas");
        var ctx = c.getContext("2d");
        ctx.canvas.width  = window.innerWidth;
        ctx.canvas.height = window.innerHeight;

        var lineargradient = ctx.createLinearGradient(xCenterTouche0, yCenterTouche0, xCenterTouche1, yCenterTouche1);
        lineargradient.addColorStop(0, 'red');
        lineargradient.addColorStop(1, 'blue');  
        ctx.strokeStyle = lineargradient; 

        ctx.beginPath();
        ctx.moveTo(xCenterTouche0, yCenterTouche0);
        ctx.lineTo(xCenterTouche1, yCenterTouche1);
        ctx.stroke();

    }

    playGame(){
        let effectTab = this.effectTab;
        if(effectTab.length >= 2){  
            var touche = this.effectTab[0];          
            this.lineEffect(this.effectTab);
            this.effectTab.shift();          
        }
    }

    initBoard() {
        let container = document.getElementById('container');
        for (let i = 0; i < 8; i++) {
            let touche = new Touche(i,this);           
            container.appendChild(touche);
        }
        
    }


   
}
