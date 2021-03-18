let pessoa = {
    "nome": "Marcos",
    "idade": 24,
    "linguagens": ["Javascript", "PHP"],
    "hobbies": ["Video-game", "Séries", "Filmes", "Cursos"]
}

let pessoaTexto = JSON.stringify(pessoa);
console.log(pessoaTexto);

let pessoaJSON = JSON.parse(pessoaTexto);
console.log(pessoaJSON);
console.log(pessoaJSON.hobbies[0]);