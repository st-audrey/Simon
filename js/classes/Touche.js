class Touche extends HTMLElement {

    constructor(i, game) {
        super();     
        this.game = game;
        this.createTouche(i);             
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