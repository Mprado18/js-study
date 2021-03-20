// Generator funcionam parecidos com promise, outras ações podem ser pausadas e continuadas
// Utilizando o function* e yield
// yield salva o estado da variável

function* criadorId(){
  let id = 0;
  while(true){
    yield id++;
  }
}

let criaId = criadorId();

console.log(criaId.next().value);
console.log(criaId.next().value);
console.log(criaId.next().value);
console.log(criaId.next().value);
console.log(criaId.next().value);

console.log(criaId.next());