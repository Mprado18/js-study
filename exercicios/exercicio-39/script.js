// Crie uma classe que simule um carro;
// Propriedades:
/*
    - Marca;
    - Cor;
    - Gasolina restante
*/
// Crie um método de dirigir o carro, que vá diminuindo a gasolina gradativamente;
// Crie um método para abastecer a gasolina quando necessário

class Carro{
    constructor(marca, cor, gasolina){
        this.marca = marca;
        this.cor = cor;
        this.gasolina = gasolina;
    }

    diminuir(gasosa){
        this.gasolina -= gasosa;
    }

    abastecer(gasosa){
        if(this.gasolina <= 5){
            this.gasolina += gasosa;
        }
    }
}

let caranga = new Carro("Impala", "Preto", 20);
console.log(caranga);

console.log("Caranga está andando");
console.log("Caranga está andando");
console.log("Caranga está andando");
caranga.diminuir(15);
console.log(caranga.gasolina + " litros restando no tanque");

console.log("Caranga precisa abastecer")
caranga.abastecer(25);
console.log(caranga.gasolina + " litros, ok ok já podemos prosseguir");

console.log("Caranga está andando");
console.log("Caranga está andando");
console.log("Caranga está andando");
caranga.diminuir(2);
console.log(caranga.gasolina + " litros restando no tanque");
console.log("Ainda tem gasosa, podemos seguir")