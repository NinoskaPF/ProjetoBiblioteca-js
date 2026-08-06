//creo una clase para poder usuarla en diferente archivos del sistema

class Livro {
    constructor(titulo, autor, categoria, paginas, disponivel = true) {
        this.titulo = titulo;
        this.autor = autor;
        this.categoria = categoria;
        this.paginas = paginas;
        this.disponivel = disponivel;
    }
}

export default Livro;
