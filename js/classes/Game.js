class Game {

    constructor() {
        this.initBoard();
        this.clickable = false;
    }

    initBoard() {
        let container = document.getElementById('container');
        for (let i = 0; i < 8; i++) {
            let touche = new Touche(i,this);           
            container.appendChild(touche);
        }
    }
}
