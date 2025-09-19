//Games Description

const games = {
    oot: {
        title: "The Legend of Zelda: Ocarina of Time",
        img: "images/oot_img.jpeg",
        desc: "Released on November 21, 1998 for the Nintendo 64 Console. The first 3d Zelda game, revolutionary in a lot of aspects, the game is full of Dungeons, Puzzles, creative Boss Fights and a great storyline with great soundtrack, influential in a lot of ways to a lot of diferente games, Ocarina of Time is considered one of the most important games in the history of videogames."
    },
    mm: {
        title: "The Legend of Zelda: Majora's Mask",
        img: "images/mm_img.jpg",
        desc: "Released on April 27, 2000 for the Nintendo 64 Console. The direct sequel of Ocarina of Time, using the same timeline and characters, the game follows the story of The Hero of Time, in a more story focused game with a lot of creative Dungeons and Puzzles, the game is known for it's unique aura and its picturesque style."
    },
    ww: {
        title: "The Legend of Zelda: Wind Waker",
        img: "images/ww_img.jpg",
        desc: "Released on December 13, 2002 for the Nintendo Game Cube Console. The very unique and loved Zelda game, the game is known for it's different cell-shading cartoonistic style, Wind Waker brings a different map than most of the games where Hyrule is flooded and your main sort of transport is a boat, the game is loved by it's unique style, it's amazing soundtrack and great story."
    },
    tp: {
        title: "The Legend of Zelda: Twilight Princess",
        img: "images/tp_img.webp",
        desc: "Released on November 19, 2006 for the Nintendo Game Cube Console. The game loved amongst a lot of Zelda fans, is known for it serious story and more realistic graphics, the game is praised for it's combat and gameplay, it added a lot of unique characteristics in the Zelda franchise and a lot of loveable characters in the universe."
    },
    ss: {
        title: "The Legend of Zelda: Skyward Sword",
        img: "images/ss_img.webp",
        desc: "Released on November 18, 2011 for the Nintendo wii Console. The game that explained where The Master Sword comes from, Introductory on Zelda story, the game is packed with a beautiful visual, fun gameplay and the unique Nintendo Wii motion capture controls for the sword, it has great gameplay, puzzles and soundtrack, loved by it's beautiful visuals and characters."
    },
    botw: {
        title: "The Legend of Zelda: Breath of the Wild",
        img: "images/botw_img.webp",
        desc: "Released on March 3, 2017 for the Nintendo Wii U Console. The open worlded Zelda, loved by a lot of the fans, considered one of the most popular Zelda games and most popular games in the world, the freedom that it provides is surreal, being revolutionary for the whole genre of open worlded games, filled with collectibles, puzzles, monsters to slay and a great story."
    },
    totk: {
        title: "The Legend of Zelda: Tears of the Kingdom",
        img: "images/totk_img.jpg",
        desc: "Released on May 12, 2023 for the Nintendo Switch Console. The direct sequel of Breath of the Wild, the game provides even more freedom, even more possibilities to explore and have fun with it's original mechanics, a game filled with beauty, story, challenges and exploration, it expands the story of Breath of the Wild adding even more characters loved by fans, an amazing art experience as a whole."
    }
};

//Menu
const dropdownBtn = document.getElementById("dropdownBtn");
const dropdownContent = document.querySelector(".dropdown-content");

dropdownBtn.addEventListener('click', (event) => {
    event.preventDefault();
    dropdownContent.classList.toggle("show-dropdown");
})

window.addEventListener('click', (event) => {
    const dropdown = document.querySelector(".dropdown");
    if (!dropdown.contains(event.target)) {
        document.querySelector(".dropdown-content").classList.remove("show-dropdown");
    }
});

const modal = document.getElementById("gameModal");
window.addEventListener('click', (event) => {
    if (event.target == modal) {
        modal.style.display = "none";
    }
});

//Function
function openGame(key) {
    const game = games[key];
    document.getElementById("gameImage").src = game.img;
    document.getElementById("gameTitle").textContent = game.title;
    document.getElementById("gameDescription").textContent = game.desc;
    document.getElementById("gameModal").style.display = "block";
    document.querySelector(".dropdown-content").classList.remove("show-dropdown");
}

//Close
function closeModal() {
    document.getElementById("gameModal").style.display = "none";
}