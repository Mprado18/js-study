let btn1 = document.querySelector('#btn1');
let btn2 = document.querySelector('#btn2');

function msg(e){
    console.log(e);
}

btn1.addEventListener('click', msg);

btn2.addEventListener('click', function(event){
    console.log(event);
});

// objeto evento podemos utilizar tanto como e ou event
// Isso nos permite receber diversas propriedades quando acionamos o evento
// Exemplo saber a posição do clique no elemento do evento