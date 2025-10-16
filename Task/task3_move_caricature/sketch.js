///
/// [💼 과제 3] 자신의 캐리커쳐에게 움직임을 부여하자
///
///
/// 
/// 키보드와 마우스를 사용한 인터랙션을 추가하자.
/// - 키보드와 마우스를 모두 사용해야 합니다.
/// - 교재에서 설명되지 않은 마우스와 키보드 인터랙션 기능도 사용할 수 있다.
///
///
///

let color = {
  background: "#15183d",
  moonColor: "#f6ffb3",
  hairColor: "fceeb1",
  hairColor2: "fceeb1",
  hairColor3: "f2e4ac",
  hairColor4: "fff6cf",
  skinColor: "fff7f7",
  skinColor2: "f7f0f0",
  eyeColor: "403b39",
  skinLineColor: "5e5451",
  blushColor: "fc9595",
  lipColor: "fc9595",
  necklaceJewelColor: "ffffff"
};

let size = {
  // 얼굴 크기
  faceWidth: 270,
  faceHeight: 295,

  /// 머리카락 크기
  hairWidth: 300,

  /// 몸통 크기
  bodyWidth: 330,
  bodyHeight: 500
};

/// 얼굴 위치
let faceX;
let faceY;
let faceStartY;
/// 캐릭터 움직임
let charBobY = 0;

/// 고양이 위치
let catX;
let catY;

// 고양이 꼬리 움직임
let tailPhase = 0;

/// 눈 라인 위치 (마우스에 따른 위치 이동을 제어하기 위한 변수)
let eyeLineCloseY = 0;

/// 달 위치
let movingMoonY = 120;
let moonDirection = 1;
let tick = 0;

/// 별 위치
// let star1X = null;
// let star1Y = null;
// let star2X = null;
// let star2Y = null;
// let star3X = null;
// let star3Y = null;
// let star4X = null;
// let star4Y = null;
// let star5X = null;
// let star5Y = null;
// let star6X = null;
// let star6Y = null;
// let star7X = null;
// let star7Y = null;
// let star8X = null;
// let star8Y = null;
// let star9X = null;
// let star9Y = null;
// let star10X = null; 
// let star10Y = null;
// 배열을 사용할 수 없어 주석처리
let starLocation = [
  { x: 20, y: 330 },
  { x: 50, y: 50 },
  { x: 100, y: 500 },
  { x: 180, y: 200 },
  { x: 500, y: 100 },
  { x: 570, y: 330 },
  { x: 600, y: 600 },


];


/// 별 색상
// let starColor1 = '#f6ffb390';
// let starColor2 = '#ffffff80';
// let starColor3 = '#ffffff';
// let starColor4 = '#ffffff50';
// let starColor5 = '#ffffff20';
// let starColor6 = '#e3faff';
// let starColor7 = '#f6ffb390';
// let starColor8 = '#ffffff80';
// let starColor9 = '#ffffff';
// let starColor10 = '#ffffff50';
// 배열을 사용할 수 없어 주석처리
let starColors = [
  '#f6ffb390',
  '#ffffff80',
  '#ffffff',
  '#ffffff50',
  '#ffffff20',
  '#e3faff',
];

/// 초기 세팅
function setup() {
  faceX = 350;
  faceStartY = 200;
  faceY = faceStartY;
  catX = faceX + 80;
  catY = faceY + 300;

  createCanvas(700, 700);
}

/// update
function draw() {
  setTick();

  background(color.background);

  /// 요소 움직임
  moveMoon();
  moveCharactor();

  /// 달
  drawMoon(600, movingMoonY, color.moonColor);

  /// 별 
  drawStars();

  /// 별똥별
  drawShootingStar();

  /// 뒷머리
  drawBackHair();

  /// 목
  drawNack();

  /// 몸
  drawBody();

  /// 얼굴
  drawHead();

  /// 눈
  drawEye();

  /// 블러셔
  drawBlush();

  /// 입
  drawMouse();

  /// 코
  drawNose();

  /// 앞머리
  drawFrontHair();

  /// 눈썹
  drawEyeBraw();

  /// 목걸이
  drawNecklace();

  /// 귀
  drawEar();

  /// 고양이
  drawCat();
}

/// 키보드 입력 이벤트 처리
/// 
/// 1. 키보드 좌 우 입력에 따라 캐릭터 전체 이동
function keyPressed() {
  if (keyCode === LEFT_ARROW) {
    catX = catX - 10;
    faceX = faceX - 10;
  }
  if (keyCode === RIGHT_ARROW) {
    catX = catX + 10;
    faceX = faceX + 10;
  }
  if (keyCode === UP_ARROW) {
    // catY = catY - 10;
  }
  if (keyCode === DOWN_ARROW) {
    // catY = catY + 10;
  }

  /// 하늘 색상 변화
  if (key === '1') {
    color.background = '#141B2D';
  }
  if (key === '2') {
    color.background = '#1E2E46';
  }
  if (key === '3') {
    color.background = '#4A5A7F';
  }
  if (key === '4') {
    color.background = '#b0b5d6';
  }
  if (key === '5') {
    color.background = '#cbe6f7';
  }
  if (key === '6') {
    color.background = '#B5E4F9';
  }
  if (key === '7') {
    color.background = '#A9D6F1';
  }
  if (key === '8') {
    color.background = '#e8cae4';
  }
  if (key === '9') {
    color.background = '#6C7293';
  }
  if (key === '0') {
    color.background = '#222845';
  }



  /// 영상 녹화
  if (key === 's') {
    saveGif('mySketch', 5);
  }
}

/// 마우스 드래그 이벤트 처리
/// 
/// 1. 마우스 포인터가 얼굴 안에 들어왔다면
///    마우스 위 아래 움직임에 따라 눈 모양 변경
///
/// 2. 마우스 포인터가 몸통 안에 들어왔다면
///    마우스 움직임에 따라 고양이 움직임
function mouseDragged() {
  /// 마우스 포인터가 얼굴 안에 들어왔는지 확인
  if (mouseX > faceX - (size.faceWidth / 2) &&
    mouseX < faceX + (size.faceWidth / 2) &&
    mouseY > faceY - (size.faceHeight / 2) &&
    mouseY < faceY + (size.faceHeight / 2)) {
    eyeLineCloseY += mouseY - pmouseY;

    /// 눈 움직임 최대/최소값 제어
    if (eyeLineCloseY > 22) {
      eyeLineCloseY = 22;
    }
    if (eyeLineCloseY < 0) {
      eyeLineCloseY = 0;
    }

    /// 마우스 움직임에 따라 눈 라인 움직임
    // if (mouseY > pmouseY && eyeLineCloseY < 22) {
    //   eyeLineCloseY = eyeLineCloseY + 2;
    // }
    // if (mouseY < pmouseY && eyeLineCloseY > 0) {
    //   eyeLineCloseY = eyeLineCloseY - 2;
    // }
  }

  /// 마우스 포인터가 몸통 안에 들어왔는지 확인
  if (mouseX > faceX - (size.bodyWidth / 2) &&
    mouseX < faceX + (size.bodyWidth / 2) &&
    mouseY > bodyY &&
    mouseY < bodyY + size.bodyHeight) {
    /// 마우스 움직임에 따라 고양이 움직임
    catX += mouseX - pmouseX;
    catY += mouseY - pmouseY;
  }
}

/// 마우스 클릭 이벤트
function mouseClicked() {
  // if (star1X == null || star1Y == null) {
  //   star1X = mouseX;
  //   star1Y = mouseY;
  //   return;
  // }
  // if (star2X == null || star2Y == null) {
  //   star2X = mouseX;
  //   star2Y = mouseY;
  //   return;
  // }
  // if (star3X == null || star3Y == null) {
  //   star3X = mouseX;
  //   star3Y = mouseY;
  //   return;
  // }
  // if (star4X == null || star4Y == null) {
  //   star4X = mouseX;
  //   star4Y = mouseY;
  //   return;
  // }
  // if (star5X == null || star5Y == null) {
  //   star5X = mouseX;
  //   star5Y = mouseY;
  //   return;
  // }
  // if (star6X == null || star6Y == null) {
  //   star6X = mouseX;
  //   star6Y = mouseY;
  //   return;
  // }
  // if (star7X == null || star7Y == null) {
  //   star7X = mouseX;
  //   star7Y = mouseY;
  //   return;
  // }
  // if (star8X == null || star8Y == null) {
  //   star8X = mouseX;
  //   star8Y = mouseY;
  //   return;
  // }
  // if (star9X == null || star9Y == null) {
  //   star9X = mouseX;
  //   star9Y = mouseY;
  //   return;
  // }
  // if (star10X == null || star10Y == null) {
  //   star10X = mouseX;
  //   star10Y = mouseY;
  //   return;
  // }

  starLocation.push({ x: mouseX, y: mouseY });
  let maxStarCount = 100;
  if (starLocation.length >= maxStarCount) {
    starLocation[starLocation.length - maxStarCount] = { x: -50, y: -50 };
  }
}

/// 귀
function drawEar() {
  /// 오른쪽 귀
  noStroke();
  fill(getColor(color.skinColor));
  earX = faceX + (size.faceWidth / 2) - 8;
  earY = faceY + 45;
  earWidth = 30;
  earHeight = 50;
  arc(
    earX,
    earY,
    earWidth,
    earHeight,
    -PI / 2 - 0.2,
    PI / 2 + 0.1,
    OPEN
  );

  /// 귀걸이
  stroke("#cccccc");
  strokeWeight(1);
  fill('#ffffff');
  ellipse(
    earX + 3,
    earY + 20,
    10, 10
  );

  /// 귀걸이 푸른보석
  noStroke();
  fill('#d7faf8');
  ellipse(
    earX + 3,
    earY + 23,
    7, 6
  );

  /// 귀걸이 라인
  stroke("#cccccc");
  strokeWeight(1);
  noFill();
  ellipse(
    earX + 3,
    earY + 20,
    10, 10
  );


  /// 귀걸이 반짝임 표시
  noStroke();
  fill('#ffffff20');
  ellipse(
    earX + 3,
    earY + 20,
    30, 30
  );
  ellipse(
    earX + 3,
    earY + 20,
    20, 20
  );
  ellipse(
    earX + 3,
    earY + 20,
    10, 10
  );

  // noFill()
  // stroke('#ffffff70');
  // strokeWeight(2);
  // line(earX - 15, earY, earX + 40, earY + 60);
  // line(earX - 10, earY + 48, earX + 20, earY - 10);


  // stroke('#ffffff50');
  // strokeWeight(10);
  // line(earX - 8, earY + 46, earX + 16, earY - 6);
}


/// 목걸이
function drawNecklace() {

  /// 목걸이 줄
  noFill();
  stroke("#dddddd");
  strokeWeight(2);
  necklaceWidth = 70;
  necklaceHeight = 20;
  necklaceStartX = faceX;
  necklaceStartY = bodyY + 1;
  necklaceEndX = faceX;
  necklaceEndY = necklaceStartY + necklaceHeight;
  line(
    necklaceStartX - (necklaceWidth / 2),
    necklaceStartY,
    necklaceEndX,
    necklaceEndY
  );
  line(
    necklaceStartX + (necklaceWidth / 2),
    necklaceStartY,
    necklaceEndX,
    necklaceEndY
  );

  /// 목걸이 보석
  stroke("#dddddd");
  strokeWeight(1);
  fill(getColor(color.necklaceJewelColor));
  jewelWidth = 6;
  jewelHeight = 7;
  ellipse(
    necklaceEndX,
    necklaceEndY + (jewelHeight / 2),
    jewelWidth,
    jewelHeight
  );
}

/// 블러셔
function drawBlush() {
  glabella = 70;
  addY = 80;
  blushWidth = 60;
  blushHeight = 20;
  noStroke();
  fill(getColor(color.blushColor, 0, 70));
  ellipse(
    faceX - glabella,
    faceY + addY,
    blushWidth,
    blushHeight
  );
  ellipse(
    faceX + glabella,
    faceY + addY,
    blushWidth,
    blushHeight
  );

  // fill(`${color.blushColor}20`);
  // ellipse(
  //   faceX,
  //   faceY + 40,
  //   40,
  //   25,
  // );
}


/// 앞머리
function drawFrontHair() {

  /// 앞머리
  noStroke();
  fill(getColor(color.hairColor));
  arc(
    faceX,
    faceY + 10,
    size.hairWidth,
    size.faceHeight + 30,
    PI + 0.05,
    -0.05,
    OPEN
  );

  /// 앞머리 빈공간
  fill(getColor(color.skinColor));
  noStroke();
  /// 왼쪽 1
  triangle(
    faceX - 90, faceY - 40,
    faceX - 92, faceY + 3,
    faceX - 100, faceY + 3
  );
  /// 왼쪽 2
  triangle(
    faceX - 68, faceY - 40,
    faceX - 70, faceY + 3,
    faceX - 76, faceY + 3
  );
  /// 오른쪽 1
  triangle(
    faceX + 72, faceY - 65,
    faceX + 77, faceY + 3,
    faceX + 95, faceY + 3
  );


  /// 옆머리
  noStroke();
  fill(getColor(color.hairColor));
  startX = faceX - size.hairWidth / 2;
  rect(startX, faceY, 40, 700);
  rect(startX + size.hairWidth, faceY, -40, 700);


  glabella = 170;
  addY = -30;
  hairWidth = 140;
  hairHeight = 180;
  angle1 = 0.2;
  angle2 = 0.8;

  noFill();
  stroke(getColor(color.hairColor3));
  strokeWeight(10);

  lineX = faceX - 30;
  lineY = faceY - (size.faceHeight / 2) + 20;
  lineWidth = -25;
  lineHeight = 15;
  line(lineX, lineY, lineX + lineWidth, lineY + lineHeight);

  lineX = faceX - 15;
  lineY = faceY - (size.faceHeight / 2) + 20;
  lineWidth = -5;
  lineHeight = 20;
  line(lineX, lineY, lineX + lineWidth, lineY + lineHeight);

  lineX = faceX;
  lineY = faceY - (size.faceHeight / 2) + 20;
  lineWidth = 5;
  lineHeight = 25;
  line(lineX, lineY, lineX + lineWidth, lineY + lineHeight);

  lineX = faceX + 20;
  lineY = faceY - (size.faceHeight / 2) + 20;
  lineWidth = 15;
  lineHeight = 20;
  line(lineX, lineY, lineX + lineWidth, lineY + lineHeight);

  noFill();
  stroke(getColor(color.hairColor4));
  strokeWeight(10);

  lineX = faceX - 85;
  lineY = faceY - (size.faceHeight / 2) + 67;
  lineWidth = -25;
  lineHeight = 55;
  line(lineX, lineY, lineX + lineWidth, lineY + lineHeight);

  lineX = faceX - 45;
  lineY = faceY - (size.faceHeight / 2) + 82;
  lineWidth = -10;
  lineHeight = 45;
  line(lineX, lineY, lineX + lineWidth, lineY + lineHeight);

  lineX = faceX - 15;
  lineY = faceY - (size.faceHeight / 2) + 90;
  lineWidth = -5;
  lineHeight = 30;
  line(lineX, lineY, lineX + lineWidth, lineY + lineHeight);

  lineX = faceX;
  lineY = faceY - (size.faceHeight / 2) + 90;
  lineWidth = 5;
  lineHeight = 30;
  line(lineX, lineY, lineX + lineWidth, lineY + lineHeight);

  lineX = faceX + 20;
  lineY = faceY - (size.faceHeight / 2) + 87;
  lineWidth = 15;
  lineHeight = 30;
  line(lineX, lineY, lineX + lineWidth, lineY + lineHeight);

  lineX = faceX + 40;
  lineY = faceY - (size.faceHeight / 2) + 84;
  lineWidth = 20;
  lineHeight = 35;
  line(lineX, lineY, lineX + lineWidth, lineY + lineHeight);

  noFill();
  stroke(getColor(color.hairColor4));
  strokeWeight(4);

  lineX = faceX - 130;
  lineY = faceY - (size.faceHeight / 2) + 95;
  lineWidth = -5;
  lineHeight = 60;
  line(lineX, lineY, lineX + lineWidth, lineY + lineHeight);

  lineX = faceX - 110;
  lineY = faceY - (size.faceHeight / 2) + 80;
  lineWidth = -15;
  lineHeight = 75;
  line(lineX, lineY, lineX + lineWidth, lineY + lineHeight);

  lineX = faceX - 80;
  lineY = faceY - (size.faceHeight / 2) + 80;
  lineWidth = -15;
  lineHeight = 55;
  line(lineX, lineY, lineX + lineWidth, lineY + lineHeight);


  lineX = faceX + 50;
  lineY = faceY - (size.faceHeight / 2) + 73;
  lineWidth = 26;
  lineHeight = 40;
  line(lineX, lineY, lineX + lineWidth, lineY + lineHeight);


  lineX = faceX + 76;
  lineY = faceY - (size.faceHeight / 2) + 70;
  lineWidth = 20;
  lineHeight = 55;
  line(lineX, lineY, lineX + lineWidth, lineY + lineHeight);

  lineX = faceX + 96;
  lineY = faceY - (size.faceHeight / 2) + 70;
  lineWidth = 20;
  lineHeight = 75;
  line(lineX, lineY, lineX + lineWidth, lineY + lineHeight);


  lineX = faceX + 120;
  lineY = faceY - (size.faceHeight / 2) + 70;
  lineWidth = 5;
  lineHeight = 70;
  line(lineX, lineY, lineX + lineWidth, lineY + lineHeight);


  lineX = faceX + 135;
  lineY = faceY - (size.faceHeight / 2) + 95;
  lineWidth = -2;
  lineHeight = 40;
  line(lineX, lineY, lineX + lineWidth, lineY + lineHeight);

}

// 코
function drawNose() {
  noFill();
  stroke(getColor(color.blushColor, 0, 15));
  strokeWeight(12);

  lineX = faceX - 3;
  lineY = faceY + 67;
  lineWidth = 1;
  lineHeight = 5;
  line(lineX, lineY, lineX + lineWidth, lineY + lineHeight);

}

// 입
function drawMouse() {
  addY = 86;
  mouseLevel = 0.3;

  noStroke();
  fill(getColor(color.lipColor));
  ellipse(
    faceX, faceY + addY + 20, // 위치
    40,
    20
  );

  // noStroke();
  // fill(getColor(color.lipColor, 0, 80)); 
  // arc(
  //   faceX, faceY + addY + 16, // 위치
  //   80, 
  //   20, 
  //   PI+0.2, -0.2
  // );


  noFill();
  stroke(getColor(color.skinLineColor));
  strokeWeight(6);
  noStroke();
  fill(getColor(color.skinLineColor));
  arc(
    faceX, faceY + addY, // 위치
    70, 50, // 사이즈
    mouseLevel, PI - mouseLevel, // 각도
    OPEN
  );
}

function drawEyeBraw() {
  glabella = 30;
  addY = 13;
  eyeWidth = 140;
  eyeHeight = 20;
  angle1 = 0.05;
  angle2 = 0.8;

  noFill();
  stroke(getColor(color.skinLineColor, 0, "30"));
  strokeWeight(5);
  arc(
    faceX - (glabella + 10),
    faceY + addY,
    eyeWidth,
    eyeHeight,
    PI + angle1, -angle2
  );
  arc(
    faceX + (glabella + 10),
    faceY + addY,
    eyeWidth,
    eyeHeight,
    PI + angle2, -angle1
  );
}

// 눈1
function drawEye() {
  eyeY = faceY + 50;
  eyeGlabella = 50;

  /// 눈동자
  glabella = eyeGlabella;
  eyeWidth = 40;
  eyeHeight = 50;
  fill(getColor(color.eyeColor));
  ellipse( // 왼쪽
    faceX - glabella,
    eyeY,
    eyeWidth,
    eyeHeight
  );
  ellipse( // 오른쪽
    faceX + glabella,
    eyeY,
    eyeWidth,
    eyeHeight
  );

  /// 눈동자 하이라이터 1
  glabella = eyeGlabella;
  highlightX = faceX + 13;
  highlightY = eyeY - 7;
  highlightWidth = 20;
  highlightHeight = 10;
  fill(255);
  ellipse( // 왼쪽
    highlightX - glabella,
    highlightY,
    highlightWidth, highlightHeight
  );
  ellipse( // 오른쪽
    highlightX + glabella,
    highlightY,
    highlightWidth, highlightHeight
  );


  /// 눈동자 하이라이터 2
  glabella = eyeGlabella;
  highlightX = faceX;
  highlightY = eyeY + 15;
  highlightWidth = 23;
  highlightHeight = 10;
  fill("#ffffff20");
  ellipse( // 왼쪽
    highlightX - glabella,
    highlightY,
    highlightWidth, highlightHeight
  );
  ellipse( // 오른쪽
    highlightX + glabella,
    highlightY,
    highlightWidth, highlightHeight
  );

  ///  눈두덩이 (위)
  glabella = eyeGlabella + 15;
  eyeWidth = 80;
  eyeHeight = 40;
  angle1 = 0.3;
  angle2 = 0.05;
  lineY = eyeY - 39;
  fill(getColor(color.skinColor));
  stroke(getColor(color.skinColor));
  strokeWeight(10);
  rect(
    faceX - glabella - eyeWidth / 2,
    lineY,
    eyeWidth,
    eyeLineCloseY + 15
  );
  rect(
    faceX + glabella - eyeWidth / 2,
    lineY,
    eyeWidth,
    eyeLineCloseY + 15
  );


  /// 애굣살 (아래)
  glabella = eyeGlabella + 15;
  eyeWidth = 80;
  eyeHeight = 40;
  angle1 = 0.3;
  angle2 = 0.05;
  lineY = eyeY + 30;
  fill(getColor(color.skinColor));
  stroke(getColor(color.skinColor));
  strokeWeight(10);
  rect(
    faceX - glabella - eyeWidth / 2,
    lineY,
    eyeWidth,
    -(eyeLineCloseY + 2)
  );
  rect(
    faceX + glabella - eyeWidth / 2,
    lineY,
    eyeWidth,
    -(eyeLineCloseY + 2)
  );

  /// 아이라인
  glabella = eyeGlabella + 15;
  eyeWidth = 80;
  eyeHeight = 40;
  angle1 = 0.3;
  angle2 = 0.05;
  lineY = eyeY - 3 + eyeLineCloseY;
  noFill();
  stroke(getColor(color.skinLineColor));
  strokeWeight(10);
  arc(
    faceX - glabella,
    lineY,
    eyeWidth,
    eyeHeight,
    PI + angle1, -angle2
  );
  arc(
    faceX + glabella,
    lineY,
    eyeWidth,
    eyeHeight,
    PI + angle2, -angle1
  );

  /// 아이라인 (언더)
  glabella = eyeGlabella + 10;
  eyeWidth = 60;
  eyeHeight = 20;
  angle1 = 0.5;
  angle2 = 0.4;
  lineY = eyeY + 30 - eyeLineCloseY;
  noFill();
  stroke(getColor(color.skinLineColor));
  strokeWeight(6);
  arc(
    faceX - glabella,
    lineY,
    eyeWidth,
    eyeHeight,
    PI + angle1, -angle2
  );
  arc(
    faceX + glabella,
    lineY,
    eyeWidth,
    eyeHeight,
    PI + angle2, -angle1
  );

  /// 쌍커풀
  glabella = eyeGlabella + 5;
  eyeWidth = 60;
  eyeHeight = 20;
  angle1 = 0.8;
  angle2 = 0.2;
  lineY = eyeY - 18 + eyeLineCloseY;
  noFill();
  stroke(getColor(color.skinLineColor));
  strokeWeight(4);
  arc(
    faceX - glabella,
    lineY,
    eyeWidth,
    eyeHeight,
    PI + angle1, -angle2
  );
  arc(
    faceX + glabella,
    lineY,
    eyeWidth,
    eyeHeight,
    PI + angle2, -angle1
  );


  /// 속눈썹
  glabella = eyeGlabella + 34;
  eyeWidth = 50;
  eyeHeight = 3;
  angle1 = 0.8;
  angle2 = 0.2;
  lineY = eyeY - 22 + eyeLineCloseY;
  noFill();
  stroke(getColor(color.skinLineColor));
  strokeWeight(4);
  arc(
    faceX - glabella,
    lineY,
    eyeWidth,
    eyeHeight,
    PI / 2, PI
  );
  arc(
    faceX + glabella,
    lineY,
    eyeWidth,
    eyeHeight,
    0, PI / 2
  );
}

// 눈2
function drawEye2() {
  glabella = 75;
  addY = 50;
  eyeWidth = 100;
  eyeHeight = 40;
  angle1 = 0.4;
  angle2 = 0.1;

  noFill();
  stroke(getColor(color.skinLineColor));
  strokeWeight(10);
  arc(
    faceX - glabella,
    faceY + addY,
    eyeWidth,
    eyeHeight,
    PI + angle1, -angle2
  );
  arc(
    faceX + glabella,
    faceY + addY,
    eyeWidth,
    eyeHeight,
    PI + angle2, -angle1
  );

  // level = 0.2;
  // noFill();
  // stroke("#e3c8c8");
  // strokeWeight(2);
  // arc(
  //   faceX - (glabella + 10),
  //   faceY + addY - 10,
  //   70,
  //   40,
  //   PI + 0.4, -0.1
  // );
  // arc(
  //   faceX + (glabella + 10),
  //   faceY + addY - 10,
  //   70,
  //   40,
  //   PI + 0.1, -0.3
  // );
}

function drawHead() {
  stroke(getColor(color.skinLineColor));
  strokeWeight(6);
  noStroke();
  fill(getColor(color.skinColor));
  // ellipse(faceX, faceY, size.faceWidth, size.faceHeight);
  arc(faceX, faceY, size.faceWidth, size.faceHeight, 0, PI);
}

function drawBackHair() {
  noStroke();
  fill(getColor(color.hairColor3));
  rect(faceX - size.hairWidth / 2, faceY, size.hairWidth, 700);
}

function drawBody() {
  shoulderHeight = 130;
  bodyY = faceY + 170;



  stroke('#666666');
  strokeWeight(80);
  noFill();
  lineX = faceX + 130;
  lineY = bodyY + 70;
  lineWidth = 30;
  lineHeight = 180;
  line(lineX, lineY, lineX + lineWidth, lineY + lineHeight);



  noStroke();
  fill("#666666");
  fill(getColor(color.skinColor2));
  ellipse(
    faceX,
    bodyY + (shoulderHeight / 2),
    size.bodyWidth,
    shoulderHeight
  );

  rect(
    faceX - (size.bodyWidth / 2),
    bodyY + (shoulderHeight / 2),
    size.bodyWidth,
    size.bodyHeight
  );



  noStroke();
  fill("#666666");
  arc(
    faceX,
    bodyY + (shoulderHeight / 2),
    size.bodyWidth,
    shoulderHeight + 20,
    PI, -PI / 2 - 1.2
  );

  arc(
    faceX,
    bodyY + (shoulderHeight / 2),
    size.bodyWidth,
    shoulderHeight + 20,
    -PI / 2 + 1.2, 0
  );

  rect(
    faceX - (size.bodyWidth / 2),
    bodyY + (shoulderHeight / 2),
    size.bodyWidth,
    size.bodyHeight
  );


  noStroke();
  fill("#666666");
  rect(
    faceX - (size.bodyWidth / 2),
    bodyY + (shoulderHeight / 2),
    size.bodyWidth,
    size.bodyHeight
  );


  // noFill();
  // stroke("#dddddd");
  // strokeWeight(3);
  // line(
  //   faceX,
  //   bodyY + (shoulderHeight / 2),
  //   faceX,
  //   height
  // );
}

function drawNack() {
  noStroke();
  fill(getColor(color.skinColor2));
  nackWidth = 50;
  nackHeight = 40;
  nackX = faceX - nackWidth / 2;
  nackY = faceY + (size.faceHeight / 2) - 3;

  rect(nackX, nackY, nackWidth, nackHeight);
}

function getColor(originColor, addColor = "000000", opacity = "ff") {
  finalColor = parseInt(parseInt(originColor, 16) + parseInt(addColor, 16)).toString(16);
  return `#${finalColor}${opacity}`;
}

/// 고양이
function drawCat() {
  /// 몸통
  noStroke();
  fill("#333333");
  currentX = catX;
  currentY = catY + 36;
  ellipse(
    currentX, currentY, // 위치
    80, 120 // 사이즈
  );
  ellipse(
    currentX, currentY + 20, // 위치
    90, 120 // 사이즈
  );
  ellipse(
    currentX - 5, currentY + 45, // 위치
    100, 120 // 사이즈
  );
  ellipse(
    currentX - 30, currentY + 90, // 위치
    100, 100 // 사이즈
  );

  ellipse(
    currentX - 40, currentY + 80, // 위치
    110, 100 // 사이즈
  );
  ellipse(
    currentX - 50, currentY + 90, // 위치
    120, 100 // 사이즈
  );
  ellipse(
    currentX - 70, currentY + 90, // 위치 
    120, 100 // 사이즈
  );


  /// 꼬리
  stroke('#333333');
  strokeWeight(15);
  noFill();
  let tailX = catX - 130;
  let tailY = catY + 75;

  /// 꼬리 각도 기준
  let baseStart = PI - 1.9;
  let baseEnd = -PI / 2 + 0.1;

  // 꼬리 각도 변화
  let delta = sin(tailPhase) * 0.3;

  arc(
    tailX, tailY,
    90, 130,
    baseStart + delta, baseEnd + delta
  );



  /// 목 흰털
  noStroke();
  fill("#bbbbbb");
  currentX = catX - 1;
  currentY = catY + 13;
  ellipse(
    currentX, currentY, // 위치
    80, 60 // 사이즈
  );

  /// 얼굴
  stroke("#333333");
  strokeWeight(6);
  fill("#333333");
  ellipse(
    catX, catY, // 위치
    80, 70 // 사이즈
  );

  /// 귀
  triangle(
    catX + 53, catY - 40,
    catX + 40, catY,
    catX - 22, catY - 25
  );
  triangle(
    catX - 30, catY - 55,
    catX - 40, catY,
    catX + 35, catY - 10
  );

  /// 귀 흰부분
  noStroke();
  fill("#666666");
  triangle(
    catX + 53, catY - 40,
    catX + 44, catY - 10,
    catX + 27, catY - 20
  );
  triangle(
    catX - 30, catY - 55,
    catX - 35, catY - 20,
    catX - 15, catY - 30
  );

  /// 눈
  stroke('#ffffff');
  strokeWeight(3);
  noFill();
  lineX = catX - 30;
  lineY = catY - 9;
  lineWidth = 22;
  lineHeight = 12;
  line(lineX, lineY, lineX + lineWidth, lineY + lineHeight);

  lineX = catX + 35;
  lineY = catY;
  lineWidth = -25;
  lineHeight = 5;
  line(lineX, lineY, lineX + lineWidth, lineY + lineHeight);


  /// 코
  noStroke();
  fill("#fab4b460");
  catNoseX = catX;
  catNoseY = catY + 10;
  ellipse(
    catNoseX, catNoseY, // 위치
    5, 5 // 사이즈
  );

  /// 입..?
  // noStroke();
  // fill("#bbbbbb");
  // currentX = catX - 5;
  // currentY = catY + 36;
  // ellipse(
  //   currentX, currentY, // 위치
  //   30, 16 // 사이즈
  // );


  /// 사람 손
  noStroke();
  fill(getColor(color.skinColor2));
  ellipse(
    faceX - 40, faceY + 450, // 위치
    80, 90 // 사이즈
  );

  /// 사람 팔
  stroke('#707070');
  strokeWeight(75);
  noFill();
  lineX = faceX + 165;
  lineY = faceY + 425;
  lineWidth = -170;
  lineHeight = 40;
  line(lineX, lineY, lineX + lineWidth, lineY + lineHeight);

}

/// 달
function drawMoon(moonX, moonY, moonColor) {
  let moonSize = 120;
  noStroke();
  fill(moonColor);
  ellipse(moonX, moonY, moonSize, moonSize);

  fill(color.background);
  ellipse(moonX + 14, moonY - 8, moonSize - 30, moonSize - 30);
  fill(`#ffffff04`);

  for (let i = 0; i < 40; i++) {
    let size = moonSize + 10 + i * 10;
    ellipse(moonX, moonY, size, size);
  }
}

/// 달 움직임
function moveMoon() {
  if ((tick % 3) == 0) {
    movingMoonY += (0.5 * moonDirection);
  }

  if ((tick % 70) == 0) {
    moonDirection *= -1;
  }
}

function moveCharactor() {
  prevFaceY = faceY;
  faceY = faceStartY + charBobY;
  catY = catY + (faceY - prevFaceY);
}

/// 틱 세팅
function setTick() {
  tick += 1;
  tick %= 1000000000;

  /// 캐릭터 움직임
  charBobY = sin(tick * 0.03) * 6;
  /// 고양이 꼬리 움직임
  tailPhase = (tailPhase + 0.05) % TWO_PI;
}


/// 별
function drawStar(starX, starY, starColor) {
  starTick = int(tick / 3);
  noStroke();
  fill(starColor);
  ellipse(starX, starY, 4, 4);

  maxSpread = 20;
  currentTick = (starTick + starX) % maxSpread;

  counter = int(currentTick <= (maxSpread / 2) ? currentTick : maxSpread - currentTick);

  transparency = `${counter < 10 ? '0' : ''}${counter}`;
  // transparency = int(counter % 10);
  fill(`#ffffff${transparency}`);

  spread = counter / 3;
  ellipse(starX, starY, 50 + spread, 50 + spread);

  for (let i = 0; i < 5; i++) {
    let size = 30 + spread + i * 10;
    ellipse(starX, starY, size, size);
  }
}

/// 별똥별
function drawShootingStar() {
  shootingStarTick = tick % 400;
  startTime = 80;
  if (startTime < shootingStarTick && shootingStarTick < startTime + 50) {
    shotingStartTick = (shootingStarTick - startTime) * 20;
    moveLocation = int(shotingStartTick * 4);
    drawStar(700 - moveLocation, moveLocation / 2, '#e3faff');
  }
}

/// 별 전체 그리기
function drawStars() {
  // if (star1X != null && star1Y != null) {
  //   drawStar(star1X, star1Y, starColor1);
  // }
  // if (star2X != null && star2Y != null) {
  //   drawStar(star2X, star2Y, starColor2);
  // }
  // if (star3X != null && star3Y != null) {
  //   drawStar(star3X, star3Y, starColor3);
  // }
  // if (star4X != null && star4Y != null) {
  //   drawStar(star4X, star4Y, starColor4);
  // }
  // if (star5X != null && star5Y != null) {
  //   drawStar(star5X, star5Y, starColor5);
  // }
  // if (star6X != null && star6Y != null) {
  //   drawStar(star6X, star6Y, starColor6);
  // }
  // if (star7X != null && star7Y != null) {
  //   drawStar(star7X, star7Y, starColor7);
  // }
  // if (star8X != null && star8Y != null) {
  //   drawStar(star8X, star8Y, starColor8);
  // }
  // if (star9X != null && star9Y != null) {
  //   drawStar(star9X, star9Y, starColor9);
  // }
  // if (star10X != null && star10Y != null) {
  //   drawStar(star10X, star10Y, starColor10);
  // }

  /// 배열을 사용할 수 없어 주석처리
  for (let i = 0; i < starLocation.length; i++) {
    starColor = starColors[i % starColors.length];
    starX = starLocation[i].x;
    starY = starLocation[i].y;
    drawStar(starX, starY, starColor);
  }
}