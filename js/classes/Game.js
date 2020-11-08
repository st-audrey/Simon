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

    playGame(){
        let effectTab = this.effectTab;
        if(effectTab.length >= 2){          
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
        var touches = document.getElementsByTagName("touche-simon");
        for (let i = 0; i < touches.length; i++) {
            touches[i].classList.add("touche");
        }       
    }  
}
