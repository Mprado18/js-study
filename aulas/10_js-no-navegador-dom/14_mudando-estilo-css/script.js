// É possível estilizar elementos com css ou alterar um elemento do css via js no DOM

let elemento = document.querySelector('#titulo-principal');

// após um tempo definido a estilização será alterada
setTimeout(function(){
    elemento.style.color = 'red';
    elemento.style.backgroundColor = 'yellow';
    elemento.style.width = '400px';
}, 2000);