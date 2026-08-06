//la idea es que le libro se pueda encontrar por el titulo indiferentemente la forma que lo escribieron mayusculas o minusculas

import dadosDeLivros from "./dadosDeLivro.js";

function buscarLivro(tituloBusca) {

    let livroEncontrado = null;

    const tituloNormalizado = tituloBusca.toLowerCase().trim();    //el método trim, remueve espacios em blanco o extras asi evito error cuando ingresen datos

    dadosDeLivros.forEach((livro) => {

        const tituloLivro = livro.titulo.toLowerCase().trim();

        if (tituloLivro === tituloNormalizado) {
            livroEncontrado = livro;
        }
    });

    if (livroEncontrado !== null) {

        console.log("~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~");
        console.log("       LIVRO ENCONTRADO");
        console.log("~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~");

        console.log(`Título: ${livroEncontrado.titulo}`);
        console.log(`Autor: ${livroEncontrado.autor}`);
        console.log(`Categoria: ${livroEncontrado.categoria}`);
        console.log(`Páginas: ${livroEncontrado.paginas}`)

        if (livroEncontrado.disponivel) {
            console.log("Disponível: Sim");
        } else {
            console.log("Disponível: Não");
        }
    } else {

        console.log("~~~~~~~~~~~~~~~~~~~~~~~~~~");
        console.log("     LIVRO NÃO ENCONTRADO");
        console.log("~~~~~~~~~~~~~~~~~~~~~~~~~~");
    }
}

export default buscarLivro;
