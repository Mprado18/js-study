// Método exec faz a mesma validação no test
// Porém teremos um retorno de objeto com mais informações e não só true ou false
// Caso não seja encontrado, retorna null ao invés de false

const digitos = /\d+/;

console.log(digitos.exec('Tem o número 100 aqui'));
console.log(digitos.exec("tem o número aqui"));