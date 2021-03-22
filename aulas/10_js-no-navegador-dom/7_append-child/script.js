let novoElemento = document.createElement("p"); //cria novo elemento p
let texto = document.createTextNode("NOVO ELEMENTO INSERIDO VIA JS NO DOM"); //novo texto criado

novoElemento.appendChild(texto);

let p = document.querySelector("#paragrafo"); //selecionamos o elemento Pai
let pai = p.parentNode; //atribuimos o p (elemento pai) a parentNode

pai.appendChild(novoElemento);