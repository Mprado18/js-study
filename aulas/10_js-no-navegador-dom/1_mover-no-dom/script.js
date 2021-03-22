// Estamos selecionando toda estrutura HTML do document
console.log(document);

console.log(document.body.childNodes); //aqui estamos vendo todos os nodes do body
console.log(document.body.childNodes[1]); //aqui estamos vendo o primeiro node do bode (div)
console.log(document.body.childNodes[1].childNodes); //aqui estamos vendo todos os elementos do node 1 (div)
console.log(document.body.childNodes[1].childNodes[1]); //estamos vendo o elemento 1 do node 1 (div)
console.log(document.body.childNodes[1].childNodes[1].innerText); /*aqui estamos pegando um leaf node do elemento 1 e node 1*/