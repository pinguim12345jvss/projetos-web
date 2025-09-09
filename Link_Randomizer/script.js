let musicaAtual = null;

//Função para o sorteio
function sortearLink() {
    const herois = [
        {
            nome: "Hero of the Wild",
            imagem:"imagens/Link_TOTK.png",
            mensagem: "You received the Hero of the Wild!",
            musica: "musicas/Zelda_TOTK_Theme.mp3"
        },
        {
            nome: "Hero of Time",
            imagem:"imagens/Link_OOT.png",
            mensagem: "You received the Hero of Time!",
            musica: "musicas/Zelda_OOT_Theme.mp3"
        },
        {
            nome: "Hero of the Sky",
            imagem:"imagens/Link_SS.png",
            mensagem: "You received the Hero of the Sky!",
            musica: "musicas/Zelda_SS_Theme.mp3"
        },
        {
            nome: "Hero of the Twilight",
            imagem:"imagens/Link_TP.png",
            mensagem: "You received the Hero of the Twilight!",
            musica: "musicas/Zelda_TP_Theme.mp3"
        },
        {
            nome: "Hero of the Wind",
            imagem:"imagens/Link_WW.png",
            mensagem: "You received the Hero of the Wind!",
            musica: "musicas/Zelda_WW_Theme.mp3"
        },
    ];

    //Sorteio
    const sorteado = herois[Math.floor(Math.random() * herois.length)];

    const imagemLink = document.getElementById("imagemLink");
    const mensagem = document.getElementById("mensagem");

    imagemLink.src = sorteado.imagem;
    imagemLink.style.display = "block";
    mensagem.textContent = sorteado.mensagem;

    //Musica
if (musicaAtual) {
    musicaAtual.pause();
    musicaAtual.currentTime = 0;
}

musicaAtual = new Audio(sorteado.musica);
musicaAtual.loop = true;
musicaAtual.play();
}