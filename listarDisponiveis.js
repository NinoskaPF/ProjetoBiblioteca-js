//debemos mostrar solo los libros que se encuentran disponibles para ser prestados.

import dadosDeLivros from "./dadosDeLivro.js";

function listarDisponiveis() {

    console.log("~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~");
    console.log("     LIVROS DISPONÍVEIS");
    console.log("~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~");

let encontrouLivro = false;         //esta sera mi Variable de control, para indicarme cuando la salida debe ser negativa

    dadosDeLivros.forEach((livro) => {

        if (livro.disponivel) {

            encontrouLivro = true;

            console.log(`
Título: ${livro.titulo}
Autor: ${livro.autor}
Categoria: ${livro.categoria}
Páginas: ${livro.paginas}
---------------------------------
            `);

        }

    });

    if (!encontrouLivro) {

        console.log("Não existem livros disponíveis no momento.");
    }
}

export default listarDisponiveis;
