
import dadosDeLivros from "./dadosDeLivro.js";


function realizarDevolucao(tituloBusca) {

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


        if (!livroEncontrado.disponivel) {


            livroEncontrado.disponivel = true;


            console.log("~~~~~~~~~~~~~~~~~~~~~~~~~~");
            console.log(" DEVOLUÇÃO REALIZADA ");
            console.log("~~~~~~~~~~~~~~~~~~~~~~~~~~");

            console.log(`Livro: ${livroEncontrado.titulo}`);
            console.log(`Autor: ${livroEncontrado.autor}`);
            console.log("Status: Disponível novamente");


        } else {


            console.log("~~~~~~~~~~~~~~~~~~~~~~~~~~");
            console.log(" LIVRO JÁ DISPONÍVEL ");
            console.log("~~~~~~~~~~~~~~~~~~~~~~~~~~");

            console.log(
                `O livro "${livroEncontrado.titulo}" não está emprestado.`
            );

        }

    }

}

export default realizarDevolucao;
