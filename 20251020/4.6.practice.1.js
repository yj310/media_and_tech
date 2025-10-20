/// [🎀실습] 함수를 이용한 그림 그리기(1) 

/// 문제:
/// 함수의 개념을 설명하기 위해서, 마우스를 이용해서 화면의 중간에 원을 그리고 
// 원의 중심에서 마우스까지의 거리를 반지름으로 하는 원을 계속적으로 그려주는 프로그램을 만들어 보자.
/// 즉, 마우스의 위치에 따라 원의 크기가 계속 변경되어야한다. 
/// 이를 위해서 원의 중심에서 마우스 위치까지의 거리를 계산해야하는데, 이 부분을 사용자 정의 함수로 구현해보자.


/// values
let circleX;
let circleY;
let circleRadius;

/// --------------[Basic Action]--------------
function setup() {
    setData();
    createCanvas(windowWidth, windowHeight);
}

function draw() {
    background(220);
    update();
    drawEntity();
}

/// --------------[Set Data]--------------
function setData() {
    /// 데이터 초기화
    circleRadius = 20;
    circleX = windowWidth / 2;
    circleY = windowHeight / 2;
}

/// --------------[Interaction]--------------
function mousePressed() {
    /// 마우스 입력
    /// mouseX, mouseY
}

function keyPressed() {
    /// 키보드 입력
    // if (key === '') { }
    // if (keyCode === LEFT_ARROW) {}
}

/// --------------[Update]--------------
function update() {
    circleRadius = Math.sqrt(
        Math.pow(mouseX - circleX, 2) +
        Math.pow(mouseY - circleY, 2)
    );
}

/// --------------[Draw Entity]--------------
function drawEntity() {
    circle(circleX, circleY, circleRadius * 2
        
    );
}
