let novoElemento = document.createElement("p"); //cria elemento p
let text = document.createTextNode("TEXTO INSERIDO VIA JS NO DOM"); //cria texto novo

novoElemento.appendChild(text); //insere texto dentro do novo elemento p

let elementoAlvo = document.querySelector("#titulo-principal");
let elementoPai = document.querySelector("#container-principal");

elementoPai.insertBefore(novoElemento, elementoAlvo); //insere o p com o texto dentro a frente do primeiro container