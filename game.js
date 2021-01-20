let win = 0;
let score = document.getElementById("score");
let cards = document.getElementsByClassName("case");
let cardss = ["case1", "case2", "case3", "case4", "case5", "case6"];
let cardss2 = ["case7", "case8", "case9", "case10", "case11", "case12"];
let images = [
    "https://cdn.discordapp.com/attachments/689017273050202134/801375680847806495/unknown.png", //image spider-man
    "https://cdn.discordapp.com/attachments/689017273050202134/801375680847806495/unknown.png", //image spider-man
    "https://cdn.discordapp.com/attachments/689017273050202134/801376526783742019/unknown.png", //image iron man
    "https://cdn.discordapp.com/attachments/689017273050202134/801376526783742019/unknown.png", //image iron man
    "https://cdn.discordapp.com/attachments/689017273050202134/801376807310852136/unknown.png", //image captain america
    "https://cdn.discordapp.com/attachments/689017273050202134/801376807310852136/unknown.png", //image captain america
    "https://cdn.discordapp.com/attachments/689017273050202134/801377011380912148/unknown.png", //image thor
    "https://cdn.discordapp.com/attachments/689017273050202134/801377011380912148/unknown.png", //image thor
    "https://cdn.discordapp.com/attachments/689017273050202134/801377517776535602/unknown.png", //image black panther
    "https://cdn.discordapp.com/attachments/689017273050202134/801377517776535602/unknown.png", //image black panther
    "https://cdn.discordapp.com/attachments/689017273050202134/801377849071370250/unknown.png", //image scarlet witch
    "https://cdn.discordapp.com/attachments/689017273050202134/801377849071370250/unknown.png"  //image scarlet witch
];
let images2 = [
    "https://cdn.discordapp.com/attachments/689017273050202134/801375680847806495/unknown.png", //image spider-man
    "https://cdn.discordapp.com/attachments/689017273050202134/798839709166075925/unknown.png", //image spider-man
    "https://cdn.discordapp.com/attachments/689017273050202134/801376526783742019/unknown.png", //image iron man
    "https://cdn.discordapp.com/attachments/689017273050202134/801376526783742019/unknown.png", //image iron man
    "https://cdn.discordapp.com/attachments/689017273050202134/801376807310852136/unknown.png", //image captain america
    "https://cdn.discordapp.com/attachments/689017273050202134/801376807310852136/unknown.png", //image captain america
    "https://cdn.discordapp.com/attachments/689017273050202134/801377011380912148/unknown.png", //image thor
    "https://cdn.discordapp.com/attachments/689017273050202134/801377011380912148/unknown.png", //image thor
    "https://cdn.discordapp.com/attachments/689017273050202134/801377517776535602/unknown.png", //image black panther
    "https://cdn.discordapp.com/attachments/689017273050202134/801377517776535602/unknown.png", //image black panther
    "https://cdn.discordapp.com/attachments/689017273050202134/801377849071370250/unknown.png", //image scarlet witch
    "https://cdn.discordapp.com/attachments/689017273050202134/801377849071370250/unknown.png"  //image scarlet witch
];
let randomCardss;
let randomImages;
let randomCardss2;
let randomImages2;
let image = document.getElementsByTagName("img");
let nbClick = 0;

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

//place the pictures randomly in the 12 cards
//create an image with a url in a cards randomly and delete the id on cardss, for no repeat
for(let i = 0; i < 6; i++) {
    randomCardss = cardss[Math.floor(Math.random() * cardss.length)];
    randomImages = images[i];
    let createimg = document.createElement("img");
    createimg.src = randomImages;
    createimg.id = "imageMarvel" + [i];
    let indexCardss = cardss.indexOf(randomCardss);
    let indexImages = images.indexOf(randomImages);
    document.getElementById(randomCardss).append(createimg);
    //delete the word on array cardss
    cardss.splice(indexCardss, 1);
    images.splice(indexImages, 1);

    randomCardss2 = cardss2[Math.floor(Math.random() * cardss2.length)];
    randomImages2 = images2[i];
    let createimg2 = document.createElement("img");
    createimg2.src = randomImages2;
    createimg2.id = "imageMarvelDouble" + [i];
    let indexCardss2 = cardss2.indexOf(randomCardss2);
    let indexImages2 = images2.indexOf(randomImages2);
    document.getElementById(randomCardss2).append(createimg2);
    //delete the word on array cardss
    cardss2.splice(indexCardss2, 1);
    images2.splice(indexImages2, 1);
}
for(let i = 0; i < 12; i++) {
    cards[i].addEventListener("click", function () {
        if (nbClick < 2) {
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
        } else if (nbClick === 2) {
            nbClick = 1;
            conditions();
        }
        else {
            image[i].style.display = "none";
            nbClick = 1;
        }
    });
}


scoreDubleCase("imageMarvel0", "imageMarvelDouble0");
scoreDubleCase("imageMarvel1", "imageMarvelDouble1");
scoreDubleCase("imageMarvel2", "imageMarvelDouble2");
scoreDubleCase("imageMarvel3", "imageMarvelDouble3");
scoreDubleCase("imageMarvel4", "imageMarvelDouble4");
scoreDubleCase("imageMarvel5", "imageMarvelDouble5");

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
/**for (let i = 0; i < cards.length; i++){
    cards[i].addEventListener("click", function () {
        // a mettre si 2 cartes sont identiques !!!!!!!!!!!!!!!!!!
        win++;
        score.innerHTML = win;
    })
}
*/
function conditions (){
    for (let i = 0; i < image.length; i++) {
        //Check if the 2 images have the same URL and if so, we gain a point in the score, if they are not the same, no points, we start again
        conditionDubleCase("imageMarvel0", "imageMarvelDouble0");
        conditionDubleCase("imageMarvel1", "imageMarvelDouble1");
        conditionDubleCase("imageMarvel2", "imageMarvelDouble2");
        conditionDubleCase("imageMarvel3", "imageMarvelDouble3");
        conditionDubleCase("imageMarvel4", "imageMarvelDouble4");
        conditionDubleCase("imageMarvel5", "imageMarvelDouble5");
    }
}

function conditionDubleCase(id1, id2){
    for (let i = 0; i < image.length; i++) {
        if (document.getElementById(id1).style.display === "block" && document.getElementById(id2).style.display === "block") {
            image[i].style.display = "none";
            document.getElementById(id1).style.display = "block";
            document.getElementById(id2).style.display = "block";
            setTimeout(function () {
                document.getElementById(id1).style.visibility = "hidden";
                document.getElementById(id2).style.visibility = "hidden";
            }, 3000);
            nbClick = 1;
        }
        else {
            nbClick = 1;
        }
    }
}


function scoreDubleCase (id1, id2) {
    if (document.getElementById(id1).style.display === "block" && document.getElementById(id2).style.display === "block") {
        win++;
        score.innerHTML = win;
    }
}


//Il me reste a faire que 2 cartes avec la meme images reste en "block" ou disparaisse et fasse gg 1 point
//Faire qu'à la fin on puisse rejouer
//