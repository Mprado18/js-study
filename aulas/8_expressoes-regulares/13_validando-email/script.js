const validarEmail = /\w+@\w+\.\w+/;

console.log(validarEmail.test("marcosprado@yahoo.com"));
console.log(validarEmail.test("marcosprado@yahoo"));
console.log(validarEmail.test("yahoo.com"));
console.log(validarEmail.test("marcosprado@yahoo.com.br"));
console.log(validarEmail.test("marcosprado@yahoo.com.com.com.com")); /* aqui temos um problema que pode ocorrer, como atendeu o último caso com o primeiro .com, se for colocado mais, irá passar */