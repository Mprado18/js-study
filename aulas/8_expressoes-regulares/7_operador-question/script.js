const padrao = /Abacax?i/; //criamos uma condição de opcional para onde definirmos a question

console.log(padrao.test('Abacaxi'));
console.log(padrao.test('Abacai'));

const padrao2 = /\d+\w?/;

console.log(padrao2.test('123'));
console.log(padrao2.test('1223asd'));
console.log(padrao2.test('1223 '));