function hitme(){
    var randomNumber1=Math.floor(Math.random()*6) + 1;
    var randomImage1="./"+"Dice"+randomNumber1+".png"; 
    var image1=document.querySelectorAll("img")[0];
    image1.setAttribute("src",randomImage1);

    var randomNumber2=Math.floor(Math.random()*6) + 1;
    var randomImage2="./"+"Dice"+randomNumber2+".png"; 
    var image2=document.querySelectorAll("img")[1];
    image2.setAttribute("src",randomImage2);

    if(randomNumber1>randomNumber2){
        document.querySelector(".title_css").innerHTML="Player 1 Wins";
    }
    else if(randomNumber1<randomNumber2){
        document.querySelector(".title_css").innerHTML="Player 2 Wins";
    }
    else document.querySelector(".title_css").innerHTML="Match Draw";

}
