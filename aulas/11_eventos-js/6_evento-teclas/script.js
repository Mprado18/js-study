window.addEventListener('keydown', function(e){ /* keydown se ficar pressionando a tecla o evento ficará executando infinitamente */

    if(e.key === 'q'){
        console.log('Apertou a letra q');
    } else if(e.key === 'Enter'){
        console.log('Apertou a tecla enter');
    }

});

window.addEventListener('keyup', function(e){ /* keyup, esse evento talvez seja melhor, pois se a pessoa ficar pressionando a tecla não ficará executando o evento infinitamente */

    if(e.key === 'f'){
        console.log('Soltou o f');
    }

});