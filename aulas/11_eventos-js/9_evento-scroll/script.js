// com o evento de scroll podemos atrelar eventos de animação ao rolar a página

window.addEventListener('scroll', function(e){

    if(window.pageYOffset > 1000){
        console.log('Ativou o evento do scroll');
    }

});