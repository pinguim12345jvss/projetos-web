function showChapter(chapter) {
    const img = document.getElementById("capitulo-img");
    const desc = document.getElementById("capitulo-desc");
    const body = document.body;

    const chapters = {
        ultramarines: {
            fundo: "url('imagens/ultramarines.jpg')",
            imagem: "imagens/Guilliman.png",
            descricao: "Ultramarines, the XIIIº legion, the sons of Guilliman, masters of strategy, discipline, control and might, Courage and Honor brothers!",

        },
        bloodangels: {
            fundo: "url('imagens/bloodangels.jpg')",
            imagem: "imagens/sanguinius.jpg",
            descricao: "Blood Angels, the IXº legion, the sons of Sanguinius, masters of brutality, skill and power. Be bloody, bold and resolute brothers!",

        },
        darkangels: {
            fundo: "url('imagens/darkangels.jpg')",
            imagem: "imagens/lion.webp",
            descricao: "Dark Angels, the Iº legion, the sons of Lion, masters of victory, duels and mistery, Repent! For tomorrow you die!",
        },
        imperialfists: {
            fundo: "url('imagens/imperialfists.jpg')",
            imagem: "imagens/rogaldorn.webp",
            descricao: "Imperial Fists, the VIIº legion, the sons of Dorn, masters of defence, guard and construction, Primarch-Progenitor, to your glory and the glory of Him on Earth!",
        },
        salamanders: {
            fundo: "url('imagens/salamanders.jpg')",
            imagem: "imagens/Vulkan.jpg",
            descricao: "Salamanders, the XVIIIº legion, the sons of Vulkan, masters of protection, strength, compassion and fire, Vulkan lives brothers!",
        }
    };

    if (chapters[chapter]) {
        body.style.backgroundImage = chapters[chapter].fundo;
        body.style.backgroundSize = "cover"; // Adiciona a propriedade de redimensionamento para cobrir a tela
        body.style.backgroundPosition = "center";

        // imagem central
        img.src = chapters[chapter].imagem;

        // descrição
        desc.textContent = chapters[chapter].descricao;
    }
}
