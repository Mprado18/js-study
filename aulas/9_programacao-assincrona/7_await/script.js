// Await irá esperar uma promise ser resolvida para ser executado

function somaComDelay(a,b){
  return new Promise(resolve =>{
    setTimeout(function(){
      resolve(a+b);
    }, 3000);
  })
}

async function resSoma(a,b,c){
  let x = somaComDelay(a,b);
  let y = c;

  return await x + y;
}

resSoma(10,15,20).then(value => console.log(value));