let win = 0;
let score = document.getElementById("score");
let cards = document.getElementsByClassName("case");
let randomCards = cards[Math.floor(Math.random() * cards.length)]; //Supprime ???????????????????
let cardss = ["case1", "case2", "case3", "case4", "case5", "case6", "case7", "case8", "case9", "case10", "case11", "case12"];
let randomCardss;
let image = document.getElementsByTagName("img");
let nbClick = 0;



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
function imageCards(URL){
    randomCardss = cardss[Math.floor(Math.random() * cardss.length)];
    let createimg = document.createElement("img");
    createimg.src = URL;
    let index = cardss.indexOf(randomCardss);
    document.getElementById(randomCardss).append(createimg);
    //delete the word on array cardss
    cardss.splice(index, 1);
}

// when you click on a card, its image appears
function clickCards(index){
    for (let i = index; i < cards.length; i++){
        cards[index].addEventListener("click", function () {
            for (let i = index; i < image.length; i++) {
                if (event = "click") {
                    image[index].style.display = "block";
                }
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