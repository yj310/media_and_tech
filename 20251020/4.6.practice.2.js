/// [🎀실습] 함수를 이용한 그림 그리기(2)
/// 문제: 얼굴을 그리는 함수를 만들어보자.


function setup() {
    createCanvas(600, 600);
    drawFace(100, 100);
    drawFace(300, 100);
}

function draw() {
    if (mouseIsPressed) {
        drawFace(mouseX, mouseY);
    }
}

function drawFace(x, y) {
    push(); // push(), pop() 함수는 곧 설명된다.

    // face
    fill("#FFFF00");
    stroke(0);
    strokeWeight(10);
    ellipse(x, y, 200, 200);

    // eyes
    fill("#000000");
    ellipse(x - 35, y - 20, 30, 30);
    ellipse(x + 35, y - 20, 30, 30);
    fill("#FFFFAA");
    noStroke();
    ellipse(x - 40, y - 25, 15, 15);
    ellipse(x + 30, y - 25, 15, 15);

    // mouth
    noFill();
    stroke(0);
    arc(x, y, 100, 100, 0 + 0.8, PI - 0.8);

    pop();
}

/// --------------[Basic Action]--------------
// function setup() {
//     setData();
//     createCanvas(400, 400);
// }

// function draw() {
//     background(220);
//     drawEntity();
// }



/// --------------[Set Data]--------------
function setData() {
    /// 데이터 초기화
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

/// --------------[Draw Entity]--------------
function drawEntity() {
    rect(0, 0, 100, 100);
}
