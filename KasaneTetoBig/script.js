let tamanho = 50;

function aumentarImagem() {
    if (tamanho < 5000) {
        tamanho += 30;
        const img = document.getElementById("imagem");
        img.style.width = tamanho + "px";
        img.style.height = tamanho + "px";
    }
}