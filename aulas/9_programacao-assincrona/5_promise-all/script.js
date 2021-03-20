// Método all nos permite resolver diversas promises de uma vez, passando via array

const p1 = new Promise(function(resolve, reject){
  setTimeout(function(){
    resolve(10);
  }, 3000);
});

const p2 = Promise.resolve(20);

const p3 = new Promise((resolve, reject) => {
  resolve(30);
});

Promise.all([p1,p2,p3]).then((values) => console.log(values));