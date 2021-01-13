let win = 0;
let score = document.getElementById("score");
let cards = document.getElementsByClassName("case");
let image = [
    "https://cdn.discordapp.com/attachments/689017273050202134/798839709166075925/unknown.png",
    "https://cdn.discordapp.com/attachments/689017273050202134/798845534882234368/unknown.png",
    "https://cdn.discordapp.com/attachments/689017273050202134/798846022863814696/unknown.png",
    "https://cdn.discordapp.com/attachments/689017273050202134/798846246017695764/unknown.png",
    "https://cdn.discordapp.com/attachments/689017273050202134/798846526813110302/unknown.png",
    "https://cdn.discordapp.com/attachments/689017273050202134/798847407563079720/unknown.png"
]
let randomImage = image[Math.floor(Math.random() * image.length)];
let randomCards = cards[Math.floor(Math.random() * cards.length)];

let selectImage = [];
for(let i = 0; i < 6; i++){
    let selectImage2 = selectImage[randomImage];
    selectImage.push(selectImage);
    selectImage.push(selectImage);
    selectImage2.splice(randomImage, 1);
}



//place the pictures randomly in the 12 cards
for(let i = 0; i < 12; i++){
    if (i === 0){
        imageCards("https://cdn.discordapp.com/attachments/689017273050202134/798839709166075925/unknown.png"); //image spider-man
    }
    else if (i === 1){
        imageCards("https://cdn.discordapp.com/attachments/689017273050202134/798839709166075925/unknown.png"); //image spider-man
    }
    else if (i === 2){
        imageCards("https://cdn.discordapp.com/attachments/689017273050202134/798845534882234368/unknown.png"); //image iron man
    }
    else if (i === 3){
        imageCards("https://cdn.discordapp.com/attachments/689017273050202134/798845534882234368/unknown.png"); //image iron man
    }
    else if (i === 4){
        imageCards("https://cdn.discordapp.com/attachments/689017273050202134/798846022863814696/unknown.png" ); //image captain america
    }
    else if (i === 5){
        imageCards("https://cdn.discordapp.com/attachments/689017273050202134/798846022863814696/unknown.png" ); //image captain america
    }
    else if (i === 6){
        imageCards("https://cdn.discordapp.com/attachments/689017273050202134/798846246017695764/unknown.png" ); //image thor
    }
    else if (i === 7){
        imageCards("https://cdn.discordapp.com/attachments/689017273050202134/798846246017695764/unknown.png" ); //image thor
    }
    else if (i === 8){
        imageCards("https://cdn.discordapp.com/attachments/689017273050202134/798846526813110302/unknown.png" ); //image hawkeye
    }
    else if (i === 9){
        imageCards("https://cdn.discordapp.com/attachments/689017273050202134/798846526813110302/unknown.png" ); //image hawkeye
    }
    else if (i === 10){
        imageCards("https://cdn.discordapp.com/attachments/689017273050202134/798847407563079720/unknown.png" ); //image black widow
    }
    else if (i === 11){
        imageCards("https://cdn.discordapp.com/attachments/689017273050202134/798847407563079720/unknown.png" ); //image black widow
    }
    //faire un condition pour qu'ils n'ont pas la meme cartes !!!!!!!!!!!!!!!!!!
}
// click on cards
for (let i = 0; i < cards.length; i++){
    cards[i].addEventListener("click", function () {
        // a mettre si 2 cartes sont identiques !!!!!!!!!!!!!!!!!!
        win++;
        score.innerHTML =win;
        //faire une condition que si elles ont les meme url alors monter score sinon rien on recommence !!!!!!!!!!!!!!
    })
}


//create an image with a url in a cards randomly
function imageCards(URL){
    randomCards = cards[Math.floor(Math.random() * cards.length)];
    let createimg = document.createElement("img");
    createimg.src = URL;
    randomCards.append(createimg);
    console.log(randomCards);
}

//Check if the 2 images have the same URL and if so, we gain a point in the score, if they are not the same, no points, we start again
function verifyURLIdentical(){

}