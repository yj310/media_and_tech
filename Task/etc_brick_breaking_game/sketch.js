let color = {
    background: "#ffbeb3",
    ball: "#ffffff",
    ballOutLine: "#999999",
    pad: "#ffffff",
    padOutLine: "#999999",
};

let ballX;
let ballY;
let ballWidth = 50;
let ballHeight = 50;
let ballXDir;
let ballYDir;
let speed;

let padY;
let padWidth = 80;
let padHeight = 20;


function setup() {
    createCanvas(windowWidth, windowHeight);

    ballX = windowWidth / 2;
    ballY = windowHeight / 2;

    speed = 4;
    ballXDir = speed;
    ballYDir = speed;

    padY = windowHeight - 50;

    background(color.background);
}

function draw() {
    background(color.background);

    moveBall();
    drawBall();
    drawPad();
}


function keyPressed() {
    if (key === 's') {
        saveGif('mySketch', 5);
    }
}


function moveBall() {
    ballX = ballX + ballXDir;
    ballY = ballY + ballYDir;



    /// 볼이 양옆에 닿았을 때 X 방향 전환
    if (ballX - ballWidth / 2 < 0 ||
        ballX + ballWidth / 2 > width) {
        ballXDir *= -1;
    }

    /// 볼이 위아래에 닿았을 때 Y 방향 전환
    if (ballY - ballHeight / 2 < 0 ||
        ballY + ballHeight / 2 > height) {
        ballYDir *= -1;
    }


}

function drawBall() {
    fill(color.ball);
    stroke(color.ballOutLine);


    ellipse(ballX, ballY, ballWidth, ballHeight);
}

function drawPad() {
    fill(color.pad);
    stroke(color.padOutLine);

    if (mouseIsPressed) {
        rect(
            mouseX, padY,
            padWidth, padHeight
        );
    }
}







