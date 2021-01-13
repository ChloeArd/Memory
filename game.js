let win = 0;
let image = [
    "https://cdn.discordapp.com/attachments/689017273050202134/798839709166075925/unknown.png", //image spider-man
    "https://cdn.discordapp.com/attachments/689017273050202134/798845534882234368/unknown.png", //image iron man
    "https://cdn.discordapp.com/attachments/689017273050202134/798846022863814696/unknown.png", //image captain america
    "https://cdn.discordapp.com/attachments/689017273050202134/798846246017695764/unknown.png", //image thor
    "https://cdn.discordapp.com/attachments/689017273050202134/798846526813110302/unknown.png", //image hawkeye
    "https://cdn.discordapp.com/attachments/689017273050202134/798847407563079720/unknown.png", //image black widow
];

let randomImage = image[Math.floor(Math.random() * image.length)];
let cards = document.getElementsByClassName("case");
let randomCards = cards[Math.floor(Math.random() * cards.length)];


function imageCards(){
    randomCards = cards[Math.floor(Math.random() * cards.length)];
    createimg = document.createElement("img");
    createimg.src = randomImage;
    randomCards.append(createimg);
    console.log(randomCards);
}

//faire que i <= 1 mettre 2 cartes identiques dans une case différentes
for(let i = 0; i < 12; i++){
    if (i === 0){
        let createimg = document.createElement("img");
        createimg.src = randomImage;
        randomCards.append(createimg);
        console.log(randomCards);
    }
    else if (i === 1){
        imageCards();
    }


}
