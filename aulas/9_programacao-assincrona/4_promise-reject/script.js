// O método reject podem rejeitar a promise ao invés de resolve-lá

function validarNum(num){
  return new Promise((resolve, reject) =>{
    if(num === 2){
      resolve(console.log(`O número é ${num}`));
    } else {
      reject(new Error("Falhou"));
    }
  });
}

validarNum(2);
validarNum(3);