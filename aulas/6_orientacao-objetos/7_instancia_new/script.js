// Primeira letra maiúscula da função significa que é uma classe
// Essa forma é de instanciar com new, deixando de forma mais padronizada que o exemplo anterior

function Cachorro(raca, patas, cor){
    this.raca = raca;
    this.patas = patas;
    this.cor = cor;
    this.uivar = function(){
        console.log("aauuu");
    }
}

let husky = new Cachorro("Husky", 4, "Cinza");
husky.uivar();