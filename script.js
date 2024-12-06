// Exercício 5 BallCustomize //

function changeColor() {
    let ball = document.getElementById('ball');
    let currentColor = window.getComputedStyle(ball).backgroundColor;
    
    if ( currentColor === 'rgb(255, 255, 255)') {
        ball.style.backgroundColor = 'rgb(100, 100 ,100)';
    } else if ( currentColor === 'rgb(100, 100, 100)') {
        ball.style.backgroundColor = 'rgb(150, 150, 150)';
    } else if ( currentColor === 'rgb(150, 150, 150)') {
        ball.style.backgroundColor = 'rgb(0, 0, 150)';
    } else {
        ball.style.backgroundColor = 'rgb(255, 255, 255)'
    }
}
    
let ballShadow = 0;

function changeShadow() {
    let ball = document.getElementById('ball');
    
    ballShadow++;

    if (ballShadow > 2){
        ballShadow = 0;
    }
    if (ballShadow == 0){
        ball.style.boxShadow = '10px 10px 15px rgba(0, 0, 0, 0.3)'
        ball.style.filter = 'none'
    } else if (ballShadow == 1) {
        ball.style.boxShadow = '15px 15px 30px rgba(0, 0, 0, 0.5)';
        ball.style.filter = 'brightness(1.2)';
    } else if (ballShadow == 2) {
        ball.style.boxShadow = '5px 5px 20px rgba(0, 0, 0, 0.2)';
        ball.style.filter = 'blur(2px)';
    }
}

function changeBackgroundColor() {
let body = document.getElementById('body');
let currentBodyColor = window.getComputedStyle(body).backgroundColor;

if (currentBodyColor === 'rgb(255, 255, 255)') {
    body.style.backgroundColor = 'rgb(55, 55, 55)';
} else if (currentBodyColor == 'rgb(55, 55, 55)') {
    body.style.backgroundColor = 'rgb(0, 55, 0)';
} else if (currentBodyColor == 'rgb(0, 55, 0)') {
    body.style.backgroundColor = 'rgb(255, 255, 255)';
} else {
    body.style.backgroundColor = 'rgb(0, 55, 0)';
}
}

// FIM EXERCICIO 5 BALL CUSTOMIZE //

// INIT RANDOM NUMBER //

function rng() {
    console.log(randomNum)
    let mainP = document.getElementById("mainP");
    let inputNum = prompt("Choose your number (1-10)");
    let loseSound = document.getElementById("loseSound");
    let winSound = document.getElementById("winSound");
    

    if (randomNum == inputNum) {
        mainP.innerHTML="You Winn";
        winSound.play();
    } else {
        mainP.innerHTML="You Losee";
        loseSound.play();

    }

}

// RANDOM NUM 2

let randomNum = Math.floor(Math.random() * 11);

function initGame() {
    let display = document.getElementById("divGame").style.display;
    let initButton = document.getElementById("initGame").style.display;
    if (display === 'block'){
        document.getElementById("divGame").style.display = 'none';
    } else {
        document.getElementById("divGame").style.display = 'block';
        document.getElementById("divInit").style.display = 'none';
    }
}

let count = 0
function myTry(){
    let tip = parseInt(document.getElementById("userTip").value);
    console.log(tip);

    if (tip == randomNum) {
        alert("sucess");
    } else {
        count ++;
        console.log("count", count);

    }
    
    if (count >= 3) {
        alert("Cabooo SEuruim");
        return
    }
}

