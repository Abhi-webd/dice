var randomNUmber1 = Math.random();
randomNUmber1 = randomNUmber1 * 6;
randomNUmber1 = Math.floor(randomNUmber1) + 1;

function imageSetter(){
  if(randomNUmber1 === 1){
    document.querySelector("img").setAttribute("src","images/dice1.png");
  }
  else if(randomNUmber1 === 2){
    document.querySelector("img").setAttribute("src","images/dice2.png");
  }
  else if(randomNUmber1 === 3){
    document.querySelector("img").setAttribute("src","images/dice3.png");
  }
  else if(randomNUmber1 === 4){
    document.querySelector("img").setAttribute("src","images/dice4.png");
  }
  else if(randomNUmber1 === 5){
    document.querySelector("img").setAttribute("src","images/dice5.png");
  }
  else {
    document.querySelector("img").setAttribute("src","images/dice6.png");
  }
}

imageSetter();

var randomNUmber2 = Math.random();
randomNUmber2 = randomNUmber2 * 6;
randomNUmber2 = Math.floor(randomNUmber2) + 1;
function imageSetter2(){
  if(randomNUmber2 === 1){
    document.querySelector(".img2").setAttribute("src","images/dice1.png");
  }
  else if(randomNUmber2 === 2){
    document.querySelector(".img2").setAttribute("src","images/dice2.png");
  }
  else if(randomNUmber2 === 3){
    document.querySelector(".img2").setAttribute("src","images/dice3.png");
  }
  else if(randomNUmber2 === 4){
    document.querySelector(".img2").setAttribute("src","images/dice4.png");
  }
  else if(randomNUmber2 === 5){
    document.querySelector(".img2").setAttribute("src","images/dice5.png");
  }
  else {
    document.querySelector(".img2").setAttribute("src","images/dice6.png");
  }
}

imageSetter2();

function headingSetter(){
  if(randomNUmber1 === randomNUmber2){
    document.querySelector("h1").innerHTML = "Draw!";
  }
  else   if(randomNUmber1 > randomNUmber2){
      document.querySelector("h1").innerHTML = "🚩Player1 Wins!";
    }

  else   if(randomNUmber1 < randomNUmber2){
      document.querySelector("h1").innerHTML = "Player2 Wins!🚩";
    }
}

headingSetter();
