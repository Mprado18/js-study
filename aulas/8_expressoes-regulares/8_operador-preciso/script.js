const cep = /\d{5}-\d{3}/; //limitamos a qtd de valores que deve ser inserido e padrão de inserção

console.log(cep.test("99999-999"));
console.log(cep.test("teste"));
console.log(cep.test("999-999"));

const data = /\d{2}-\d{2}-\d{4}/;

console.log(data.test("11/11/2011"));
console.log(data.test("11-11-2011"));

const tel = /\(\d{2}\)\d{4,5}-\d{4}/; //limitamos a qtd de valores que deve ser inserido e padrão de inserção

console.log(tel.test("(41)99999-9999"));
console.log(tel.test("(41)9999-9999"));
console.log(tel.test("41999999999"));