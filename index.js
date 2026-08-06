

import readline from "readline";

import listarLivros from "./listarLivros.js";
import buscarLivro from "./buscarLivro.js";
import listarDisponiveis from "./listarDisponiveis.js";
import cadastrarLivro from "./cadastrarLivro.js";
import cadastrarNovoLivro from "./cadastrarNovoLivro.js";
import realizarEmprestimo from "./realizarEmprestimo.js";
import realizarDevolucao from "./realizarDevolucao.js";
import exibirEstatisticas from "./exibirEstatisticas.js";


const teclado = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});


function mostrarMenu() {

    console.log("\n~~~~~~~~~~~~~~~~~~~~~~~~~~~~");
    console.log("       SISTEMA BIBLIOTECA");
    console.log("~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~");

    console.log("1 - Listar todos os livros");
    console.log("2 - Buscar livro");
    console.log("3 - Listar livros disponíveis");
    console.log("4 - Cadastrar novo livro");
    console.log("5 - Realizar empréstimo");
    console.log("6 - Realizar devolução");
    console.log("7 - Exibir estatísticas");
    console.log("0 - Sair");

}


function iniciarSistema() {

    mostrarMenu();

    teclado.question("\nEscolha uma opção: ", (opcao) => {


        switch(opcao) {


            case "1":

                listarLivros();
                iniciarSistema();

                break;


            case "2":

                teclado.question(
                    "Digite o título do livro: ",
                    (titulo) => {

                        buscarLivro(titulo);

                        iniciarSistema();

                    }
                );

                break;


            case "3":

                listarDisponiveis();
                iniciarSistema();

                break;


            case "4": 
cadastrarNovoLivro(teclado, iniciarSistema); 

                break;

            case "5":

                teclado.question(
                    "Digite o título do livro para empréstimo: ",
                    (titulo) => {

                        realizarEmprestimo(titulo);

                        iniciarSistema();

                    }
                );

                break;


            case "6":

                teclado.question(
                    "Digite o título do livro para devolução: ",
                    (titulo) => {

                        realizarDevolucao(titulo);

                        iniciarSistema();

                    }
                );

                break;


            case "7":

                exibirEstatisticas();
                iniciarSistema();

                break;


            case "0":

                console.log("Sistema encerrado.");
                teclado.close();

                break;


            default:

                console.log("Opção inválida.");
                iniciarSistema();

        }

    });

}


