// Nessa forma estamos passando os parametros como valor da propriedade

function criarCachorro(raca, patas, cor){
    let cachorro = Object.create({});
    cachorro.raca = raca;
    cachorro.patas = patas;
    cachorro.cor = cor;
    cachorro.latir = function(){
        console.log("Au Au");
    }
    return cachorro;
}

let doberman = criarCachorro("Doberman", 4, "Marrom");

console.log(doberman);

doberman.latir();