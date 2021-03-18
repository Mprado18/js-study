let carros = ['BMW','Audi','VW','Fiat'];

let removerPrimeiroCarro = carros.shift(); //remove primeiro item do array

console.log(removerPrimeiroCarro);
console.log(carros);

carros.unshift('Gurgel'); //inclui um novo item ao inicio do array

console.log(carros);
console.log(carros[0]);