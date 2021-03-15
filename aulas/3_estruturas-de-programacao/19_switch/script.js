let nome = "Marcos";

switch(nome){
    case "Marcos":
        console.log("O nome é Marcos");
        break;
    case "João":
        console.log("O nome é João");
        break;
    default:
        console.log("O nome não foi encontrado!");
        break;
}

//comparação do switch com if else

let nome2 = "Pedro";

if(nome2 == "Claudio"){
    console.log("O nome é Pedro");
}else if(nome2 == "João"){
    console.log("O nome é João");
}else{
    console.log("O nome não foi encontrado");
}
