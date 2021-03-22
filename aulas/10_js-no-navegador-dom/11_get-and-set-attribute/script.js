// getAttribute pega um atributo de um elemento especifico
// setAttribute atribui um novo atributo especicifico de um elemento

let a = document.querySelector('footer a');

console.log(a.getAttribute('href'));

let link = 'https://horadecodar.com.br';
a.setAttribute('href', link);

console.log(a.getAttribute('href'));