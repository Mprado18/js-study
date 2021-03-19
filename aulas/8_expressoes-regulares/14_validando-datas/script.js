const validarData = /[0-31]{2}[/][0-12]{2}[/][1920-2020]{4}/; //dessa forma limita um pouco a questão de data incorretas

console.log(validarData.test('10/10/2010'));
console.log(validarData.test('1/1/2010'));
console.log(validarData.test('10-10-2010'));
console.log(validarData.test('10/10/10'));
console.log(validarData.test('99/99/2010'));
console.log(validarData.test('10/02/2021'));  