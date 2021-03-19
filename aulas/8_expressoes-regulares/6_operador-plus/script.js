const umOuMaisNumeros = /\d/;

console.log(umOuMaisNumeros.test('1234'));
console.log(umOuMaisNumeros.test('')); //só passa se tiver um ou mais números
console.log(umOuMaisNumeros.test('asdfsa'));
console.log(umOuMaisNumeros.test('1234asd'));
console.log(umOuMaisNumeros.test('1'));