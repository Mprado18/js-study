let btn = document.querySelector('button');

console.log(btn);

// addEventListener nos permite adicionar um evento após a execução de um comando no navegador

btn.addEventListener('click', () =>{
    console.log('Clicou em mim');
}); // após clicar no botão criado irá gerar o evento do console