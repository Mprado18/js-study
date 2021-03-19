// Crie uma regex que valide nome de usuários no sistema;
// Deve aceitar;
/*
    * letras a-z
    * _ (underline)
    * - (traço)
    * números 0-9
    * mínimo 3 caracteres
    * máximo 16 caracteres
*/
// Realize testes validando a regex

let validarUser = /^(?=.{3,16}$)[a-z0-9_-]/;

console.log(validarUser.test('yulhin_123'));
console.log(validarUser.test('yulhin_'));
console.log(validarUser.test('_123'));
console.log(validarUser.test('yulhin123'));
console.log(validarUser.test('yulhin-123'));
console.log(validarUser.test('yulhin_1-23'));
console.log(validarUser.test('yu'));
console.log(validarUser.test('yulhin_1-23aaaaaaaa'));