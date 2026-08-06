//verificando la disponibilidad de libros dentro del sistema.
//Permite visualizar todas las informaciones de lobros registrados en el sistema.


import dadosDeLivros from "./dadosDeLivro.js";

function listarLivros() {

    console.log("~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~");    //por estética en la consola, para que sea mas dinamico el menu de usuario
    console.log("        LISTA DE LIVROS");                                             
    console.log("~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~");     

dadosDeLivros.forEach((livro, index) => { 
let disponibilidade; 
if (livro.disponivel) { 
disponibilidade = "Sim"; 
} else {
 disponibilidade = "Não"; 
} 
console.log(` Livro ${index + 1} 
Título: ${livro.titulo}
 Autor: ${livro.autor} 
Categoria: ${livro.categoria} 
Páginas: ${livro.paginas} 
Disponível: ${disponibilidade} 
--------------------------------- 
`);
 });
 } 
export default listarLivros;
