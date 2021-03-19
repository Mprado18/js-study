const reg1 = new RegExp('bola');

console.log(reg1.test('Tem bola?'));
console.log(reg1.test('Não tem!'));

const reg2 = /bola/; //forma resumida para regex

let text = 'tem bola na cesta';

console.log(reg1.test('Tem bola?'));
console.log(reg1.test('Não tem!'));
console.log(reg2.test(text));

console.log(/quadrado/.test('Onde tem quadrado'));
console.log(/quadrado/.test('43892473892quadrado489389aaahjt'));