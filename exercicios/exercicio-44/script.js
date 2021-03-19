// Crie uma regex que valide endereços de IP;
// Ex: 127.0.0.1
// Realize teste validando a regex

const validaIP = /[0-9][.][0-9][.][0-9][.][0-9]/;

console.log(validaIP.test("127.0.0.1"));
console.log(validaIP.test("1271.02.01.11"));
console.log(validaIP.test("127001"));
console.log(validaIP.test("127.001"));
console.log(validaIP.test("aaa.a.a.a"));
console.log(validaIP.test("127.1.a.1"));
console.log(validaIP.test("8.8.8.8"));

const validaIP2 = /[0-254]{1,3}[.][0-254]{1,3}[.][0-254]{1,3}[.][0-254]{1,3}/ //irá validar de forma mais correta o IP