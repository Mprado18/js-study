// replaceChild troca um elemento por outro

let novoElemento = document.createElement("p");
let texto = document.createTextNode("TEXTO INSERIDO VIA JS NO DOM");

novoElemento.appendChild(texto);

let heading = document.querySelector("#titulo-principal"); //identificamos o elemento a ser trocado
let paiHeading = heading.parentNode;

paiHeading.replaceChild(novoElemento, heading); //realizando a troca do h1 pelo p