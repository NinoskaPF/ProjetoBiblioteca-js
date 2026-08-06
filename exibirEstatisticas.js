

import dadosDeLivros from "./dadosDeLivro.js";


function exibirEstatisticas() {

    let totalLivros = dadosDeLivros.length;
    let livrosDisponiveis = 0;
    let livrosEmprestados = 0;
    let totalPaginas = 0;


    dadosDeLivros.forEach((livro) => {


        totalPaginas += livro.paginas;


        if (livro.disponivel) {

            livrosDisponiveis++;

        } else {

            livrosEmprestados++;

        }

    });


    let mediaPaginas = totalPaginas / totalLivros;


    console.log("~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~");
    console.log("     ESTATÍSTICAS DA BIBLIOTECA");
    console.log("~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~");

    console.log(`Total de livros: ${totalLivros}`);
    console.log(`Livros disponíveis: ${livrosDisponiveis}`);
    console.log(`Livros emprestados: ${livrosEmprestados}`);
    console.log(`Total de páginas: ${totalPaginas}`);
    console.log(`Média de páginas por livro: ${mediaPaginas.toFixed(2)}`);

}


export default exibirEstatisticas;
