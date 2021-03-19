// Podemos definir uma instrução no regex que funciona como um || (or) das condicionais

const reg = /\w+: (Marcos|Angie|Winky)/;

console.log(reg.test("Nome: Marcos"));
console.log(reg.test("Nome: Angie"));
console.log(reg.test("Nome: Winky"));
console.log(reg.test("Nome Marcos")); /* sem o padrão definido na regex teremos retorno false, mesmo valor estando certo*/
console.log(reg.test("Nome: Pedrão"));