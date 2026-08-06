//tenemos que verificar que se pueda prestar y registrar que el libro ya no estar mas disponible.

import dadosDeLivros from "./dadosDeLivro.js";


function realizarEmprestimo(tituloBusca) {

    let livroEncontrado = null;

    const tituloNormalizado = tituloBusca.toLowerCase().trim();


    dadosDeLivros.forEach((livro) => {

        const tituloLivro = livro.titulo.toLowerCase().trim();


        if (tituloLivro === tituloNormalizado) {

            livroEncontrado = livro;

        }

    });


    if (livroEncontrado === null) {

        console.log("~~~~~~~~~~~~~~~~~~~~~~~~~~");
        console.log(" LIVRO NÃO ENCONTRADO ");
        console.log("~~~~~~~~~~~~~~~~~~~~~~~~~~");

    } else {


        if (livroEncontrado.disponivel) {

            livroEncontrado.disponivel = false;


            console.log("~~~~~~~~~~~~~~~~~~~~~~~~~~");
            console.log(" EMPRÉSTIMO REALIZADO ");
            console.log("~~~~~~~~~~~~~~~~~~~~~~~~~~");

            console.log(`Livro: ${livroEncontrado.titulo}`);
            console.log(`Autor: ${livroEncontrado.autor}`);
            console.log("Status: Emprestado");


        } else {

            console.log("~~~~~~~~~~~~~~~~~~~~~~~~~~");
            console.log(" LIVRO INDISPONÍVEL ");
            console.log("~~~~~~~~~~~~~~~~~~~~~~~~~~");

            console.log(
                `O livro "${livroEncontrado.titulo}" já está emprestado.`
            );

        }

    }

}


export default realizarEmprestimo;
