// Crie uma regex que só aceitará strings terminando com ID;
// Realize testes para validar a regex

const contemID = /[0-9]-\ID/; //irá validar se apenas contém ID ao final da frase

console.log(contemID.test("12345"));
console.log(contemID.test("12345-ID"));
console.log(contemID.test("123-ID-ID"));
console.log(contemID.test("123-IDAAA"));
console.log(contemID.test("123ID7hgy"));

const validarID = /\d+ID\b/; //irá validar se tem ID apenas

console.log(validarID.test("12345"));
console.log(validarID.test("12345ID"));
console.log(validarID.test("ahahaID"));
console.log(validarID.test("12345I"));