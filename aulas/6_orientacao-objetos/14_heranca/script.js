// Herança (inheritance)

// Classe Pai
class Mamifero {
    constructor(patas){
        this.patas = patas;
    }
}

let coiote = new Mamifero(4);

console.log(coiote.patas);

// Estamos herdando as propriedades da Classe Mamifero
class Cachorro extends Mamifero{
    constructor(patas, raca){
        super(patas);
        this.raca = raca;
    }

    latir(){
        console.log("Au Au");
    }
}

let pug = new Cachorro(4, "Pug");
console.log(pug.patas);
pug.latir();