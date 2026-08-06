//la idea es que se pueda ampliar la base de datos y se puedan registarr nuevos libros a disponibilidad de prestamo

import Livro from "./livro.js";
import dadosDeLivros from "./dadosDeLivro.js";


function cadastrarLivro(titulo, autor, categoria, paginas) {

    const novoLivro = new Livro(
        titulo,
        autor,
        categoria,
        paginas
    );

    dadosDeLivros.push(novoLivro);

    console.log("~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~");
    console.log(" LIVRO CADASTRADO COM SUCESSO ");
    console.log("~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~");

    console.log(`Título: ${novoLivro.titulo}`);
    console.log(`Autor: ${novoLivro.autor}`);
    console.log(`Categoria: ${novoLivro.categoria}`);
    console.log(`Páginas: ${novoLivro.paginas}`);
}
export default cadastrarLivro;



