// com o evento mousemove podemos capturar as coordenadas da tela do usuário
// deve-se tomar cuidado devido o js ficar capturando todo o movimento e consumindo memória

window.addEventListener('mousemove', function(e){
    console.log('x: ' + e.x);
    console.log('y: ' + e.y);
});