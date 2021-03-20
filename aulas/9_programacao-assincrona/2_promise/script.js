// Promises são ações assíncronas que nos permitem produzir um valor em algum momento futuro do código;
/* Temos o objeto Promise que guarda um valor, o método resolve para resolver uma promisse e o then que faz a execução e determinado ponto. */

let p = Promise.resolve(5 + 10);

console.log("Outros códigos");

console.log(p); //objeto

p.then((value) => {console.log(`O valor de p é ${value}`)});
p.then((value) => {console.log(`O valor de p é ${value}` + 5)});
p.then((value) => {return value * 5})
 .then((value) => {console.log(`O valor de p é ${value}`)});