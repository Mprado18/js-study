let input = document.querySelector('#input1');

// focus quando clicamos ou entramos no input
input.addEventListener('focus', function(){
    console.log('Entrou no input');
});

// blur quando saimos ou clicamos fora do input
input.addEventListener('blur', function(){
    console.log('Saiu do input');
});

// OBS: quando trocamos de guia no navegador o input entende que saimos dele e isso pode gerar erro