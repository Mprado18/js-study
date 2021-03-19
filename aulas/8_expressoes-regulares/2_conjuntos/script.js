const reg1 = /[12345]/;

console.log(reg1.test('Temos o número 6'));
console.log(reg1.test('Temos o número 2'));
console.log(reg1.test('Temos o número 23')); //vai retornar true devido começar com 2 e este ter no conjunto
console.log(reg1.test('Temos o número 60')); //vai retornar false devido não ter 6 no conjunto

const reg2 = /[0-9]/; //vai verificar se uma frase tem números de 0 a 9;

console.log(reg1.test('Temos o número 2453857834'));
console.log(reg1.test('Temos o número'));