import { conectaApi } from "./conectaApi.js"; //Obrigatorio passar alem do caminho o tipo do arquivo.

const lista = document.querySelector("[data-lista]");

function constroiCard(titulo, descricao, url, imagem) {
    const video = document.createElement('lis');
    video.className = 'videos__item';
    video.innerHTML = `
    <li class="videos__item">
        <iframe width="100%" height="72%" src="${url}"
            title="${titulo}" frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowfullscreen></iframe>
        <div class="descricao-video">
            <img src="${imagem}" alt="logo canal alura">
            <h3>${titulo}</h3>
            <p>${descricao}</p>
        </div>
    </li>
    `

    return video;
}

async function listaVideos(){    
    const listaApi = await conectaApi.listaVideos();    
    listaApi.forEach(itenLista => {
        lista.appendChild(constroiCard(itenLista.titulo, itenLista.descricao, itenLista.url, itenLista.imagem))
    });
}

listaVideos();