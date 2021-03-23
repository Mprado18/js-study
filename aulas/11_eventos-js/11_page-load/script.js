// evento de load nos permite realizar alguma ação após o carregamento da página
window.addEventListener('load', function(){
    alert('Assine nossos termos de uso');
});

// evento beforeunload quando usuário vai fechar a página damos um aviso de possível perca dos dados não salvos
window.addEventListener('beforeunload', function(e){
    e.returnValue = null;
});