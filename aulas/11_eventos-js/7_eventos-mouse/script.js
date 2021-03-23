let btn1 = document.querySelector('#btn1');

// captura o clique do mouse, não fica contando inifinatamente se ficar pressionando
btn1.addEventListener('mousedown', function(){
    console.log('Apertou o botão do mouse');
});

// captura quando soltamos o botão do mouse
btn1.addEventListener('mouseup', function(){
    console.log('Soltou o botão do mouse');
});

// captura quando dando um duplo clique
btn2.addEventListener('dblclick', function(){
    console.log('Apertou duas vezes o botão do mouse');
});

// captura quando clicamos com botão direito do mouse
btn2.addEventListener('contextmenu', function(e){

    // não abre a tela de opções do clique direito
    e.preventDefault();
    console.log('Clicou no botão direito do mouse');

});