/* debounce nos permite executar algo e determinados momentos para eventos continuos, dessa forma não sobrecarregando a página */

let timeout;

window.addEventListener('mousemove', function(e){
    clearTimeout(timeout);
    timeout = setTimeout(function(){
        console.log(e.x);
    }, 500); //executa a cada meio segundo
});