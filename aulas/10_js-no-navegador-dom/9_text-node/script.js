// com o appendChild podemos inserir um nó de texto em um elemento vazio

let pSemTexto = document.getElementById("sem-texto");

let texto = document.createTextNode("Texto inserido no p");

pSemTexto.appendChild(texto);