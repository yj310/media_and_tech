///
/// [🎀실습] 배열 활용: 1차원 배열을 이용한 인터랙션
///
/// 문제: 아래와 같이 피아노 건반 형식으로 사각형들을 그리고, 해당 버튼이 마우스에 의해 클릭되면 색상을 반전하는 프로그램
///
///
///


/// values
let bricks = [];
let brickColumnCount = 10;
let brickRowCount = 6;
let brickStartX = 10;
let brickStartY = 20;
let brickWidth = 60;
let brickHeight = 20;
let rowPadding = 4;
let columnPadding = 4;

/// color
let backgroundColor = '#faf8f7';
let strokeColor = '#cccccc';
let turnOnColor = '#000000';
let turnOffColor = '#ffffff';
let brickColors = [
    '#ffe1e8', '#ffd8dd', '#ffd0d2', '#ffe8c7', '#fff1b6',
    '#fff6a8', '#e8f8c5', '#d4f7c8', '#c2f5d2', '#b8f3dd',
    '#b4f0e6', '#b7eced', '#bee6f4', '#c5e0f8', '#cbdcfb',
    '#d3d8fd', '#dbd5ff', '#e2d4ff', '#ecd5ff', '#f7d9ff'
];

/// --------------[Basic Action]--------------
function setup() {
    setData();
    setCanvas();
}

function draw() {
    background(backgroundColor);
    drawBricks();
}

/// --------------[Set Data]--------------
function setData() {
    /// 2차원 배열로 초기화
    for (let y = 0; y < brickRowCount; y++) {
        let row = [];
        let currentColor = getBrickColor(y);
        for (let x = 0; x < brickColumnCount; x++) {
            row[x] = currentColor;
        }
        bricks[y] = row;
    }
}

function setCanvas() {
    let paddingWidth = columnPadding * (brickColumnCount - 1);
    let outerPaddingWidth = brickStartX * 2;
    width = brickColumnCount * brickWidth + paddingWidth + outerPaddingWidth;
    // height = brickRowCount * brickHeight + brickStartY * 2;
    height = 700;
    createCanvas(width, height);
}

/// --------------[Interaction]--------------
function mousePressed() {
    brickPressed();
}

function brickPressed() {
    let xInBricks = mouseX - brickStartX;
    let yInBricks = mouseY - brickStartY;
    let x = int(xInBricks / (brickWidth + columnPadding));
    let y = int(yInBricks / (brickHeight + rowPadding));

    /// 패딩 영역 클릭 시 처리
    if (xInBricks > (brickWidth + columnPadding) * x + brickWidth) {
        return;
    }
    if (yInBricks > (brickHeight + rowPadding) * y + brickHeight) {
        return;
    }

    if (x < brickColumnCount && y < brickRowCount) {
        let currentColor = getBrickColor(y);
        bricks[y][x] = (bricks[y][x] === turnOffColor) ? currentColor : turnOffColor;
    }
}


/// --------------[Draw Entity]--------------
function drawBricks() {
    for (let y = 0; y < brickRowCount; y++) {
        for (let x = 0; x < brickColumnCount; x++) {
            stroke(strokeColor);
            fill(bricks[y][x]);
            brickX = brickStartX + x * brickWidth + x * columnPadding;
            brickY = brickStartY + y * brickHeight + y * rowPadding;
            rect(brickX, brickY, brickWidth, brickHeight);
        }
    }
    // for (let i = 0; i < bricks.length; i++) {
    //     stroke('#999999');
    //     fill(bricks[i]);
    //     brickX = brickStartX + i * brickWidth;
    //     brickY = brickStartY;
    //     rect(brickX, brickY, brickWidth, brickHeight);
    // }
}


/// --------------[Function]--------------
function getBrickColor(row) {
    return brickColors[row % brickColors.length];
}