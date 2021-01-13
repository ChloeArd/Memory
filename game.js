let win = 0;
let score = document.getElementById("score");
let cards = document.getElementsByClassName("case");
let randomCards = cards[Math.floor(Math.random() * cards.length)]; //Supprime ???????????????????
let cardss = ["case1", "case2", "case3", "case4", "case5", "case6", "case7", "case8", "case9", "case10", "case11", "case12"]
let images = [
    "https://cdn.discordapp.com/attachments/689017273050202134/798839709166075925/unknown.png", //image spider-man
    "https://cdn.discordapp.com/attachments/689017273050202134/798839709166075925/unknown.png", //image spider-man
    "https://cdn.discordapp.com/attachments/689017273050202134/798845534882234368/unknown.png", //image iron man
    "https://cdn.discordapp.com/attachments/689017273050202134/798845534882234368/unknown.png", //image iron man
    "https://cdn.discordapp.com/attachments/689017273050202134/798846022863814696/unknown.png", //image captain america
    "https://cdn.discordapp.com/attachments/689017273050202134/798846022863814696/unknown.png", //image captain america
    "https://cdn.discordapp.com/attachments/689017273050202134/798846246017695764/unknown.png", //image thor
    "https://cdn.discordapp.com/attachments/689017273050202134/798846246017695764/unknown.png", //image thor
    "https://cdn.discordapp.com/attachments/689017273050202134/798846526813110302/unknown.png", //image hawkeye
    "https://cdn.discordapp.com/attachments/689017273050202134/798846526813110302/unknown.png", //image hawkeye
    "https://cdn.discordapp.com/attachments/689017273050202134/798847407563079720/unknown.png", //image black widow
    "https://cdn.discordapp.com/attachments/689017273050202134/798847407563079720/unknown.png"  //image black widow
]
let randomCardss;
let randomImages;
let image = document.getElementsByTagName("img");
let nbClick = 0;
let flippedCards = [];

//place the pictures randomly in the 12 cards
for(let i = 0; i < 12; i++){
    if (i === 0){
        imageCards();
    }
    else if (i === 1){
        imageCards();
    }
    else if (i === 2){
        imageCards();
    }
    else if (i === 3){
        imageCards();
    }
    else if (i === 4){
        imageCards();
    }
    else if (i === 5){
        imageCards();
    }
    else if (i === 6){
        imageCards();
    }
    else if (i === 7){
        imageCards();
    }
    else if (i === 8){
        imageCards();
    }
    else if (i === 9){
        imageCards();
    }
    else if (i === 10){
        imageCards();
    }
    else if (i === 11){
        imageCards();
    }
}

clickCards(0);
clickCards(1);
clickCards(2);
clickCards(3);
clickCards(4);
clickCards(5);
clickCards(6);
clickCards(7);
clickCards(8);
clickCards(9);
clickCards(10);
clickCards(11);

// limite
for (let i = 0; i < cards.length; i++){
    cards[i].addEventListener("click", function () {
        if (nbClick < 2){
            clickCards(0);
            clickCards(1);
            clickCards(2);
            clickCards(3);
            clickCards(4);
            clickCards(5);
            clickCards(6);
            clickCards(7);
            clickCards(8);
            clickCards(9);
            clickCards(10);
            clickCards(11);
            nbClick++;
            flippedCards.push(clickCards(i));
        }
        else if(nbClick === 2 ){
            for (let i = 0; i < image.length; i++) {
                image[i].style.display = "none";
                nbClick = 1;
            }
        }
    });
}

//create an image with a url in a cards randomly and delete the id on cardss, for no repeat
function imageCards(){
    randomCardss = cardss[Math.floor(Math.random() * cardss.length)];
    randomImages = images[Math.floor(Math.random() * images.length)];
    let createimg = document.createElement("img");
    createimg.src = randomImages;
    let indexCardss = cardss.indexOf(randomCardss);
    let indexImages = images.indexOf(randomImages);
    document.getElementById(randomCardss).append(createimg);
    //delete the word on array cardss
    cardss.splice(indexCardss, 1);
    images.splice(indexImages, 1)
}

// when you click on a card, its image appears
function clickCards(index){
    for (let i = index; i < cards.length; i++){
        cards[index].addEventListener("click", function () {
            for (let i = index; i < image.length; i++) {
                    image[index].style.display = "block";
            }
        });
    }
}

// score ajout 1 when click on cards
for (let i = 0; i < cards.length; i++){
    cards[i].addEventListener("click", function () {
        // a mettre si 2 cartes sont identiques !!!!!!!!!!!!!!!!!!
        win++;
        score.innerHTML =win;
        //faire une condition que si elles ont les meme url alors monter score sinon rien on recommence !!!!!!!!!!!!!!
    })
}
//Check if the 2 images have the same URL and if so, we gain a point in the score, if they are not the same, no points, we start again
function verifyURLIdentical(){

}