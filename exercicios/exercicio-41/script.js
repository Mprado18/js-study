// Cire uma regex que aceite apenas letras maiúsculas
// Realize testes para validar a regex

const letrasMaisculas = /\b[A-Z]+\b/; //irá aceitar somente se tudo for maiscúlo

console.log(letrasMaisculas.test('teste'));
console.log(letrasMaisculas.test('TESTE'));
console.log(letrasMaisculas.test('testE'));
console.log(letrasMaisculas.test('TEste'));

const letrasMaisculas2 = /[A-Z]/; //irá aceitar contando que tenha uma letra maiúscula

console.log(letrasMaisculas2.test('teste'));
console.log(letrasMaisculas2.test('TESTE'));
console.log(letrasMaisculas2.test('testE'));
console.log(letrasMaisculas2.test('TEste'));