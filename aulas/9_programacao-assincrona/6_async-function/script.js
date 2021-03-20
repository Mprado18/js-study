// Podemos definir funções assincronas com a palavra reservadas async
// Caso a função seja realizada teremos sucesso na promise, caso não, a rejeição

async function somar(a, b){
  return a + b;
}

console.log(somar(2,4));

somar(2,4).then(value => console.log(value));