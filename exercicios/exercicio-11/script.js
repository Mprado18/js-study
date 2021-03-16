// Crie uma estrutura if/else para verificar se um usuário pode dirigir;
// Armazene em variáveis algumas informações sobre o usuário: idade, se tem CNH;
// Caso a idade seja maior que 18 e não possuir CNH, exiba uma msg;
// Caso a idade seja menor que 18 e possui CNH, exiba uma msg;
// Caso a idade seja menor que 18 e não possui CNH, exiba uma msg.

let idade = 15;
let cnh = false;

if(idade >= 18 && cnh == true){
    console.log("Pode dirigir!");
} else if(idade >=18 && cnh == false){
    console.log("Não pode dirigir, mas pode tirar a CNH!");
} else{
    console.log("Menor de idade não pode dirigir!");
}