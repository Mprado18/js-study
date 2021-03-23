let btn1 = document.querySelector('#btn1');
let btn2 = document.querySelector('#btn2');
let p = document.querySelector('p');
let a = document.querySelector('a');

function msg(e){
    console.log('Clicou no button');
    e.stopPropagation(); //se não tiver essa função, quando for clicado no button irá ativar o evento do p também
}

btn1.addEventListener('click', msg);

btn2.addEventListener('click', function(event){
    console.log(event);
});

p.addEventListener('click', function(){
    console.log('Clicou no paragrafo');
});

// preventDefault nos previne de ações padrões, exemplo clicar em um elemento a não direcionar ao link da mesma
// podemos definir novos eventos a os eventos default

a.addEventListener('click', function(e){
    e.preventDefault();
    console.log('Não vai mudar de link');
});