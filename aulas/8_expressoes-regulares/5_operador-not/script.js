const notAB = /[^ab]/;

console.log(notAB.test('a'));
console.log(notAB.test('Aqui tem a')); //irá passar devido ter mais outros caracteres e não só o a

const notToAZ = /[^a-z]/;

console.log(notToAZ.test('123 as')); //irá passar devido não ter apenas o as
console.log(notToAZ.test('asasasasasa4fdfdfdfd'));
console.log(notToAZ.test('asasasasdsdsds'));
