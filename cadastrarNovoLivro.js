

import cadastrarLivro from "./cadastrarLivro.js"; 
function cadastrarNovoLivro(teclado, iniciarSistema) {

teclado.question("Digite o título: ", (titulo) => { 
teclado.question("Digite o autor: ", (autor) => { 
teclado.question("Digite a categoria: ", (categoria) => { 
teclado.question("Digite o número de páginas: ", (paginas) => { 

    cadastrarLivro(
titulo, 
autor, 
categoria, 
Number(paginas) 
); 
iniciarSistema(); 
});
 }); 
}); 
});
 } 
export default cadastrarNovoLivro;
