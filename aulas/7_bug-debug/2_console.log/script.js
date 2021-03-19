// Podemos usar o console.log em locais estratégicos do código para saber quais os resultados estão dando

let a = 1;
let b = 2;
let c = 3;

if(c > a){
    a = b;
    console.log(a)
}

for(let i = 5; i > 0; i--){
    b++;
    a = a + c + 1;
    c += 2;
    console.log(a);
}

if(b == a){
    a++;
} else{
    a = a + b + c;
}

console.log(a);

a = a * b;

console.log(a);

/*
sempre deletar os console.log quando código for para produção, para não escapar informações importantes ou testes de dev
*/