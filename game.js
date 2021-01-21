let win = 0;
let score = document.getElementById("score");
let cards = document.getElementsByClassName("case");
let cardss = ["case1", "case2", "case3", "case4", "case5", "case6", "case7", "case8", "case9", "case10", "case11", "case12"];
let images = [
    "https://cdn.discordapp.com/attachments/689017273050202134/801764218411941918/cvgbhyun.png", //image spider-man
    "https://cdn.discordapp.com/attachments/689017273050202134/801764218411941918/cvgbhyun.png", //image spider-man
    "https://cdn.discordapp.com/attachments/689017273050202134/801764218411941918/cvgbhyun.png", //image spider-man
    "https://cdn.discordapp.com/attachments/689017273050202134/801764218411941918/cvgbhyun.png", //image spider-man
    "https://cdn.discordapp.com/attachments/689017273050202134/801764301467287562/vhjk.png", //image iron man
    "https://cdn.discordapp.com/attachments/689017273050202134/801764301467287562/vhjk.png", //image iron man
    "https://cdn.discordapp.com/attachments/689017273050202134/801764301467287562/vhjk.png", //image iron man
    "https://cdn.discordapp.com/attachments/689017273050202134/801764301467287562/vhjk.png", //image iron man
    "https://cdn.discordapp.com/attachments/689017273050202134/801764328281866310/hhjk.png", //image captain america
    "https://cdn.discordapp.com/attachments/689017273050202134/801764328281866310/hhjk.png", //image captain america
    "https://cdn.discordapp.com/attachments/689017273050202134/801764328281866310/hhjk.png", //image captain america
    "https://cdn.discordapp.com/attachments/689017273050202134/801764328281866310/hhjk.png", //image captain america
    "https://cdn.discordapp.com/attachments/689017273050202134/801764350074683412/bhjkl.png", //image thor
    "https://cdn.discordapp.com/attachments/689017273050202134/801764350074683412/bhjkl.png", //image thor
    "https://cdn.discordapp.com/attachments/689017273050202134/801764350074683412/bhjkl.png", //image thor
    "https://cdn.discordapp.com/attachments/689017273050202134/801764350074683412/bhjkl.png", //image thor
    "https://cdn.discordapp.com/attachments/689017273050202134/801764389753061416/xrt.png", //image black panther
    "https://cdn.discordapp.com/attachments/689017273050202134/801764389753061416/xrt.png", //image black panther
    "https://cdn.discordapp.com/attachments/689017273050202134/801764389753061416/xrt.png", //image black panther
    "https://cdn.discordapp.com/attachments/689017273050202134/801764389753061416/xrt.png", //image black panther
    "https://cdn.discordapp.com/attachments/689017273050202134/801764435944931338/sdfg.png", //image scarlet witch
    "https://cdn.discordapp.com/attachments/689017273050202134/801764435944931338/sdfg.png", //image scarlet witch
    "https://cdn.discordapp.com/attachments/689017273050202134/801764435944931338/sdfg.png",  //image scarlet witch
    "https://cdn.discordapp.com/attachments/689017273050202134/801764435944931338/sdfg.png"  //image scarlet witch
];
let randomCardss;
let randomImages;
let image = document.getElementsByTagName("img");
let nbClick = 1;

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
for(let i = 0; i < cards.length; i++){
    randomCardss = cardss[Math.floor(Math.random() * cardss.length)];
    randomImages = images[i];
    let createimg = document.createElement("img");
    createimg.src = randomImages;
    createimg.id = "imageMarvel"+[i];
    let indexCardss = cardss.indexOf(randomCardss);
    let indexImages = images.indexOf(randomImages);
    document.getElementById(randomCardss).append(createimg);
    //delete the word on array cardss
    cardss.splice(indexCardss, 1);
    images.splice(indexImages, 1);

    //You can click on all the cards
    cards[i].addEventListener("click", function () {
        //if all the images are in display = "block", then we make the game disappear, we display the score, and the replay button
        if (document.getElementById("imageMarvel0").style.display === "block" && document.getElementById("imageMarvel1").style.display === "block" && document.getElementById("imageMarvel2").style.display === "block" && document.getElementById("imageMarvel3").style.display === "block" && document.getElementById("imageMarvel4").style.display === "block" && document.getElementById("imageMarvel5").style.display === "block" && document.getElementById("imageMarvel6").style.display === "block" && document.getElementById("imageMarvel7").style.display === "block" && document.getElementById("imageMarvel8").style.display === "block" && document.getElementById("imageMarvel9").style.display === "block" && document.getElementById("imageMarvel10").style.display === "block" && document.getElementById("imageMarvel11").style.display === "block"){
            setTimeout(function () {
                document.getElementById("game").style.display = "none";
                document.getElementById("window").style.display = "flex";
                score.innerHTML = 6;
            }, 2000);
        }
        if (nbClick < 2){
            nbClick++;
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
        }
        else if(nbClick === 2 ) {
            for (let i = 0; i < image.length; i++) {
                // Check if the 2 images are in display = "block" and if so, they disappear definitively, if they are not the same, they disappear but not definitively.
                if (document.getElementById("imageMarvel0").style.display === "block" && document.getElementById("imageMarvel1").style.display === "block") {
                    conditionDubleCase("imageMarvel0", "imageMarvel1");
                }
                if (document.getElementById("imageMarvel2").style.display === "block" && document.getElementById("imageMarvel3").style.display === "block") {
                    conditionDubleCase("imageMarvel2", "imageMarvel3");
                }
                if (document.getElementById("imageMarvel4").style.display === "block" && document.getElementById("imageMarvel5").style.display === "block") {
                    conditionDubleCase("imageMarvel4", "imageMarvel5");
                }
                if (document.getElementById("imageMarvel6").style.display === "block" && document.getElementById("imageMarvel7").style.display === "block") {
                    conditionDubleCase("imageMarvel6", "imageMarvel7");
                }
                if (document.getElementById("imageMarvel8").style.display === "block" && document.getElementById("imageMarvel9").style.display === "block") {
                    conditionDubleCase("imageMarvel8", "imageMarvel9");
                }
                if (document.getElementById("imageMarvel10").style.display === "block" && document.getElementById("imageMarvel11").style.display === "block") {
                    image[i].style.display = "none";
                    conditionDubleCase("imageMarvel10", "imageMarvel11");
                }
                //Otherwise the images will disappear in 1s
                else {
                    setTimeout(function () {
                        image[i].style.display = "none";
                        nbClick = 1;
                    }, 1000);
                }
            }
        }
    });
}

//replay the memory
document.getElementById("replay").addEventListener("click", function (){
    window.location.reload();
})

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

//if 2 images are identical then they remain displayed, ie in display = "block".
//I put a time interval of 1ms so that my images always remain displayed
function conditionDubleCase(id1, id2) {
        setInterval(function () {
            document.getElementById(id1).style.display = "block";
            document.getElementById(id2).style.display = "block";
        }, 1);
}