var randomNum1 = Math.floor(Math.random()*6) + 1;
var img1Path = "images/dice"+randomNum1+".png";
var img1 = document.querySelector(".img1");
img1.setAttribute("src", img1Path);

var randomNum2 = Math.floor(Math.random()*6) + 1;
var img2Path = "images/dice"+randomNum2+".png";
var img2 = document.querySelector(".img2");
img2.setAttribute("src", img2Path);

h1 = document.querySelector("h1");
if(randomNum1 > randomNum2){
    h1.textContent = "Player 1 Wins!"
}
else if(randomNum1 < randomNum2){
    h1.textContent = "Player 2 Wins!"
}
else{
    h1.textContent = "Draw!"
}