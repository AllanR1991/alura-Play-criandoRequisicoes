import { conectaApi } from "./conectaApi.js";
import constroiCard from "./mostrarVideos.js";

const botaoDePesquisa = document.querySelector("[data-botao-pesquisa]");

async function buscarVideo(evento){
    const dadosDePesquisa = document.querySelector("[data-pesquisa]").value;

    const busca = await conectaApi.buscaVideo(dadosDePesquisa);

    evento.preventDefault();

    const lista = document.querySelector("[data-lista]");
    
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
}

botaoDePesquisa.addEventListener("click", evento => buscarVideo(evento))