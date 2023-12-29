import { conectaApi } from "./conectaApi.js";

const formulario = document.querySelector("[data-formulario]");

async function criarVideo(evento) {
    const imagem = document.querySelector("[data-imagem]").value;
    const url = document.querySelector("[data-url]").value;
    const titulo = document.querySelector("[data-titulo]").value;
    const descricao = Math.floor(Math.random() * 10).toString();

    evento.preventDefault();

    try {
        await conectaApi.criaVideo(titulo, descricao, url, imagem);

        //Este comando faz com que a pagina de envio concluido seja exibida;
        window.location.href = "../pages/envio-concluido.html"
    } catch (e) {
        alert(e)
    }
}

formulario.addEventListener("submit", evento => criarVideo(evento));