let idade = 19;

if(idade == 19){
    console.log('A idade é igual a ' + idade);
}

if(idade < 25){
    console.log('A idade é menor que ' + idade);
}

let nome = 'Marcos';

if(nome == 'Marcos' && idade > 10){
    console.log('Liberado');
}

let passaporte = true;

if((nome == 'Marcos' && idade > 30) || passaporte == true){
    console.log('Liberado2');
}
