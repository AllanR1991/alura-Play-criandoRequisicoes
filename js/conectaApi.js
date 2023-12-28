async function listaVideos(){
    const conexao = await fetch("http://localhost:3000/videos");
    const conexaoConvertida = await conexao.json();    
    return conexaoConvertida;
}

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
    })

    const conexaoConvertida = await conexao.json();

    return conexaoConvertida;
}



export const conectaApi = {
    listaVideos,
    criaVideo
}