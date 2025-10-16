/// 
/// [💼 과제 6] 자신의 벽돌 깨기 게임을 완성하자.
/// 
///
///
/// # 요구 사항
///
/// 1. 스타일 개선
/// - 공, 패드, 벽돌의 색상과 스타일을 변경하여 시각적으로 매력적으로 만드세요.
/// - 공의 색상과 스타일을 더 다채롭고 매력적으로 만드세요.
/// - 패드와 벽돌의 스타일을 개선하여 더 현대적이고 시각적으로 즐거운 디자인을 만들어 보세요.
///
/// 2. 추가 기능
/// - 점수 시스템: 공이 벽돌을 깨면 점수가 증가하고, 화면에 점수를 표시합니다.
/// - 레벨 시스템: 모든 벽돌이 제거되면 레벨이 올라가고 벽돌의 배열이 변경됩니다.
/// - 배경 음악: 게임 플레이 중 배경 음악을 추가하고, 벽돌이 깨질 때 효과음을 추가합니다.
/// - 애니메이션: 공이 벽돌에 부딪힐 때 애니메이션 효과를 추가하여 게임을 더 동적으로 만들어 보세요.
///
/// 3. 버그 수정 및 개선
/// - 현재 코드에서 발생할 수 있는 버그를 수정하고, 공과 벽돌의 충돌을 더욱 정밀하게 조정하세요.
/// - 패드와 공의 상호작용을 개선하여 게임이 더 재미있고 도전적이게 만드세요.
///
/// 4. 디자인 개선
/// - 패드와 공의 움직임을 부드럽고 자연스럽게 보이도록 개선합니다.
/// - 벽돌의 배치를 더 다양한 형태로 변경하거나, 다양한 크기의 벽돌을 추가해 보세요.
///
///
///
/// # 작성 방법
///
/// 1. 스타일 개선
/// - ballDrawingMovement(), padDrawingMovement(), bricksDrawing() 함수에서 색상, 테두리 스타일 등을 변경하여 시각적으로 매력적인 디자인을 만드세요.
/// - 예를 들어, 공에 그라데이션 색상을 추가하거나 벽돌에 텍스처를 적용해 보세요.
///
/// 2. 점수 시스템 구현
/// - 전역 변수로 score를 추가하고, 벽돌이 깨질 때마다 점수를 증가시킵니다.
/// - draw() 함수에 점수를 화면에 표시하는 코드를 추가합니다.
///
/// 3. 레벨 시스템 구현
/// - 모든 벽돌이 제거되면 새로운 레벨로 넘어가고, 벽돌의 배치를 변경합니다.
/// - 레벨이 오를 때 벽돌의 색상이나 배치 패턴을 다르게 설정합니다.
///
/// 4. 배경 음악 및 효과음 추가
/// - p5.js의 p5.sound 라이브러리를 사용하여 배경 음악과 효과음을 추가합니다.
/// - 공이 벽돌에 부딪힐 때 효과음을 재생합니다.
///
/// 5. 애니메이션 추가
/// - 공이 벽돌에 부딪힐 때 애니메이션 효과를 추가하여 게임을 더 동적으로 만듭니다.
/// - 예를 들어, 벽돌이 깨질 때 애니메이션 효과를 구현하거나 공의 반응을 시각적으로 강화합니다.
///
///
///



/// values
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


/// color
let color = {
    background: "#ffbeb3",
    ball: "#ffffff",
    ballOutLine: "#999999",
    pad: "#ffffff",
    padOutLine: "#999999",
};

/// --------------[Basic Action]--------------
function setup() {
    setData();
    createCanvas(windowWidth, windowHeight);
}

function draw() {
    background(color.background);

    moveBall();
    drawBall();
    drawPad();
}


/// --------------[Set Data]--------------
function setData() {
    ballX = windowWidth / 2;
    ballY = windowHeight / 2;

    speed = 4;
    ballXDir = speed;
    ballYDir = speed;

    padY = windowHeight - 50;
}

/// --------------[Interaction]--------------
function keyPressed() {
    if (key === 's') {
        saveGif('mySketch', 5);
    }
}

/// --------------[Move Entity]--------------
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

/// --------------[Draw Entity]--------------
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






/// --------------[Function]--------------

