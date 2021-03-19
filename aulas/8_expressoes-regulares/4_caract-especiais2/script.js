const dia = /\d\d/;

console.log(dia.test('2020') && '2020'.length ==2);
console.log(dia.test('a'));
console.log(dia.test('aaaa'));
console.log(dia.test('12') && '12'.length ==2);
console.log(dia.test('aa12aa'));

const palavraTresLetras = /\w\w\w/;

console.log(palavraTresLetras.test('aa12aa'));
console.log(palavraTresLetras.test('asdf'));
console.log(palavraTresLetras.test('a'));
