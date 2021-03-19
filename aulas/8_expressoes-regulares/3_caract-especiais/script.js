console.log('.');
const pontoRegex = /./; //irá aceitar tudo

console.log(pontoRegex.test('texto'));
console.log(pontoRegex.test(' '));
console.log(pontoRegex.test('1213'));
console.log(pontoRegex.test('texto1234'));

console.log('d');
const dRegex = /\d/; //irá aceitar [0-9]

console.log(dRegex.test('texto'));
console.log(dRegex.test(' '));
console.log(dRegex.test('1213'));
console.log(dRegex.test('texto1234'));

console.log('D');
const dRegex2 = /\D/; //irá aceitar [^0-9], serve de negação, lógica aplica-se para as outras letas maiusculas

console.log(dRegex2.test('texto'));
console.log(dRegex2.test(' '));
console.log(dRegex2.test('1213'));
console.log(dRegex2.test('texto1234'));

console.log('s');
const sRegex = /\s/; //irá aceitar espaço em branco

console.log(sRegex.test('tex to'));
console.log(sRegex.test(' '));
console.log(sRegex.test('1213'));
console.log(sRegex.test('texto1234'));

console.log('w');
const wRegex = /\w/; //irá aceitar apenas alfanumericos

console.log(wRegex.test('texto'));
console.log(wRegex.test(' '));
console.log(wRegex.test('1213'));
console.log(wRegex.test('texto1234'));