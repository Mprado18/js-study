let sku = "34";

console.log(sku.padStart(6, "0"));

let sku2 = "3456";

console.log(sku.padStart(6, "0"));

function num(number){
    if(number.length < 6){
        return number.padStart(6, 0);
    } 
}

console.log(num(34));

/* nos permite criar padrões, exemplo uma ID de produto que sempre inicia em 000xx, podemos definir desta forma, caso usuário não passe 000xx o sistema já estara padronizado
*/