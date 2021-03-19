function Cachorro(raca, patas, cor){
    this.raca = raca;
    this.patas = patas;
    this.cor = cor;
}

Cachorro.prototype.uivar = function(){
    console.log("Auuuu");
}

Cachorro.prototype.latir = function(){
    console.log("Au au");
}

let husky = new Cachorro("Husky", 4, "Cinza");
husky.uivar();
husky.latir();

// Dessa forma estamos criando metódos especificos de forma separada a Classe do Objeto Cachorro