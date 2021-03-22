let elemento = document.querySelector('#titulo-principal');

console.log('Largura: ' + elemento.offsetWidth); //verifica largura, considera bordas
console.log('Altura: ' + elemento.offsetHeight); //verifica altura, considera bordas

console.log('Largura: ' + elemento.clientWidth); //verifica largura, não considera bordas
console.log('Altura: ' + elemento.clientHeight); //verifica altura, não considera bordas