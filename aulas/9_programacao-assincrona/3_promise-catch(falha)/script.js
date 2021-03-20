// A Promise pode falhar e podemos reter seu erro com catch e exibir para user ou dev para tratarmos

let p = Promise.resolve(new Error("Não deu certo"));

console.log("Testando");

p.then(value => console.log(value))
 .catch(reason => console.log("Falhou: " + reason));

//código 2

 let p1 = new Promise(function(resolve, reject) {
    resolve('Teste');
  });
   
  p1.then(function(value) {
    if(true) {
        throw 'Erro encontrado!';
    }
  }).catch(function(e) {
    console.log(e);
  })