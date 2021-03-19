// Forma mais atualizada de criar Classes no JS ES6
// Devemos analisar se esse padrão rodará no escolhido

class Cachorro {
    constructor(raca, patas, cor){
        this.raca = raca;
        this.patas = patas;
        this.cor = cor;
    }
}

let labrador = new Cachorro('Labrador', 4, 'Dourador');
console.log(labrador);