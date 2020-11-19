var randomNumber1 = Math.floor(Math.random() * 6) + 1;
var randomNumber2 = Math.floor(Math.random() * 6) + 1;

img1src = "images/dice"+randomNumber1+".png";
img2src = "images/dice"+randomNumber2+".png";


document.querySelector(".img1").setAttribute("src",img1src);
document.querySelector(".img2").setAttribute("src",img2src);

if(randomNumber1 > randomNumber2)
{
  document.querySelector("h1").innerText = "⛳ Player1 Wins";
}

else if (randomNumber2 > randomNumber1) {

  document.querySelector("h1").innerText = "Player2 Wins ⛳";

}

else {
  document.querySelector("h1").innerText = "Try Again!!";

}
