///
/// [🎀실습] 배열 활용: 1차원 배열을 이용한 인터랙션
///
/// 문제: 아래와 같이 피아노 건반 형식으로 사각형들을 그리고, 해당 버튼이 마우스에 의해 클릭되면 색상을 반전하는 프로그램
///
///
///

let bricks = [];
let brickCount = 10;
let brickStartX = 10;
let brickStartY = 50;
let brickWidth = 40;
let brickHeight = 100;
let turnOnColor = '#ffffff';
let turnOffColor = '#000000';

function setup() {
    setData();
    createCanvas(windowWidth, windowHeight);
}

function draw() {
    background(220);
    drawBricks();
}

/// --------------[Set Data]--------------
function setData() {
    for (let i = 0; i < brickCount; i++) {
        bricks[i] = turnOffColor;
    }
}

/// --------------[Interaction]--------------
function mousePressed() {
    let location = int(mouseX / brickWidth);
    if (location < bricks.length) {
        bricks[location] = (bricks[location] === turnOnColor) ? turnOffColor : turnOnColor;
    }
}


/// --------------[Draw Entity]--------------
function drawBricks() {
    for (let i = 0; i < bricks.length; i++) {
        stroke('#999999');
        fill(bricks[i]);
        brickX = brickStartX + i * brickWidth;
        brickY = brickStartY;
        rect(brickX, brickY, brickWidth, brickHeight);
    }
}
