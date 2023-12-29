import { conectaApi } from "./conectaApi.js";
import constroiCard from "./mostrarVideos.js";

const botaoDePesquisa = document.querySelector("[data-botao-pesquisa]");

async function buscarVideo(evento){
    const dadosDePesquisa = document.querySelector("[data-pesquisa]").value;

    const busca = await conectaApi.buscaVideo(dadosDePesquisa);
    
    const lista = document.querySelector("[data-lista]");
    
    evento.preventDefault();

    /**
     * Removendo elementos filhos de elemento pai
     */
    /*
    while(lista.firstChild){
        lista.removeChild(lista.firstChild);
    }
    */
   lista.innerHTML = '';
    
    busca.forEach(itenmLista => {
        lista.appendChild(
            constroiCard(itenmLista.titulo,itenmLista.descricao,itenmLista.url,itenmLista.imagem)
        )
    });

    if(busca.length == 0 ){
        lista.innerHTML = `<h2 class="mensagem__titulo">Não existem vídeos com esse termo</h2>`;
    }
}

botaoDePesquisa.addEventListener("click", evento => buscarVideo(evento))