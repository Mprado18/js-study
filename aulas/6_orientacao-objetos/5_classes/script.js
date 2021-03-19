let cachorro = {
    patas: 4,
    raca: 'SRD',
    latir: function(){
        console.log("Au Au");
    }
}

let labrador = Object.create(cachorro); //atribuido a está variável as propriedades do objeto cachorro

labrador.latir(); //usando uma propriedade do objeto cachorro

labrador.raca = 'Labrador'; //atribuindo um novo valor a propriedade raca do objeto cachorro

console.log(labrador.raca); //labrador
console.log(cachorro.raca); //SRD

let pastor = Object.create(cachorro);

pastor.raca = 'Pator Alemão';

console.log(pastor.raca);