async function listaVideos(){
    const conexao = await fetch("http://localhost:3000/videos");
    const conexaoConvertida = await conexao.json();    
    return conexaoConvertida;
}

//Função para enviar os videos através do metodo post.
async function criaVideo(titulo,descricao,url,imagem){
    //No fectch se passarmos apenas a url, estaremos sempre fazendo requições get
    const conexao = await fetch("http://localhost:3000/videos", {
        method: "POST", //Informamos o tipo de requisição
        headers: {
            //Content-type especifica que tipo de arquivo esta sendo enviado/recebido.
            //no nosso caso JSON
            "Content-type": "application/json"
        },
        //JSON.stringify é um método em JavaScript que converte um objeto JavaScript em uma string JSON
        body: JSON.stringify({
            titulo,
            descricao,
            url,
            imagem
        })
    });
    if(!conexao.ok){
        throw new Error("Não foi possivel enviar o vídeo");
    }

    const conexaoConvertida = await conexao.json();

    return conexaoConvertida;
}

async function buscaVideo(termoDeBusca){
    /**
     *  o aplicativo da web poderia usar o valor de q (que contém "gatos engraçados") para buscar e mostrar vídeos relacionados a gatos engraçados, está busca é uma busca generalizada e nao especificamente somente nos titulos.
     */
    const conexao =await fetch(`http://localhost:3000/videos?q=${termoDeBusca}`);
    const conexaoConvertida = conexao.json();

    return conexaoConvertida;
}

export const conectaApi = {
    listaVideos,
    criaVideo,
    buscaVideo,
}