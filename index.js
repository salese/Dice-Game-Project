var randomNumber = Math.floor(Math.random() * 6) + 1;
var randomNumber2 = Math.floor(Math.random() * 6) + 1;

var dice1 = document.getElementsByClassName("img1")[0].setAttribute("src", "images/dice"+randomNumber+".png");
var dice2 = document.getElementsByClassName("img2")[0].setAttribute("src", "images/dice"+randomNumber2+".png");

if(randomNumber > randomNumber2){
  document.querySelector("h1").textContent = "😁 Player 1 Wins";
} else if(randomNumber < randomNumber2){
  document.querySelector("h1").textContent = "Player 2 Wins 😁";
} else if(randomNumber === randomNumber2){
  document.querySelector("h1").textContent = "Draw 😱";
}
