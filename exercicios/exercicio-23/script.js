// Escreva uma função que recebe uma string;
// Caso o texto conter mais que 10 caracteres, imprima "Texto muito longo";
// Caso contenha menos, imprima "Texto dentro do limite"

function validarTexto(texto){
    if(texto.length > 10){
        console.log("Texto muito longo");
    } else{
        console.log("Texto dentro do limite!");
    }
    console.log(texto.length);
}

validarTexto("Esse texto é o texto muito longo");
validarTexto("Texto ok");