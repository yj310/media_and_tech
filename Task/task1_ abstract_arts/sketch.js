///
/// [💼 과제 1] 추상화(abstract arts)를 그려보자.
///
///
/// 다양한 도형 사용
/// - 사각형, 원, 삼각형 등 다양한 도형을 사용하여 작품을 구성하세요.
/// - 이제까지 배운 내용만을 사용해서 완성하세요.
/// 
/// 색상 활용
/// - 다양한 색상을 사용하여 작품에 생동감을 더하세요.
/// - fill(), stroke() 등의 함수를 활용하여 색상을 설정하세요.
///
///
///

let backgroundColor = '#2a2d57';

let pastel = {
  sand1: '#FFEFE1',
  sand2: '#FDE9F2',
  sand3: '#E9F8FF',
  planet: '#DDEBFF',
  planetDeep: '#C8DBFF',
  ring: '#FFFFFF80',
  crater: '#BFD4FF',
  glow: '#FFF5CC66',
  moon: '#F6FFB3',
  star1: '#ffffff',
  star2: '#ffffff80',
  star3: '#ffffff40'
};

function setup() {
  createCanvas(700, 700);
  noLoop(); // 정지 화면 (원하면 애니메이션하려면 지우세요)
}

function draw() {
  background(backgroundColor);
  noStroke();

  // 먼 우주 글로우(연무)
  spaceGlow();

  // 별
  drawStar(200, 200, pastel.star2);
  drawStar(300, 100, pastel.star2);
  drawStar(50, 50, pastel.star1);
  drawStar(570, 330, pastel.star3);
  drawStar(20, 330, pastel.star3);
  drawStar(450, 230, '#e3faff');

  // 지평선 너머 거대 행성(뒤쪽)
  drawGiantPlanet(520, 190, 380, 380, pastel.planetDeep);

  // 고리 달린 행성(중경)
  drawRingedPlanet(180, 150, 90, 90, '#FFE9F2', pastel.ring);

  // 달(전경) + 분화구
  drawMoonWithCraters(570, 120, pastel.moon);

  // 바닥 전(前)풍경: 사막 언덕(곡선으로 층층이)
  drawDunes();

  // 바닥(기존 직사각은 어둠층으로 유지해 대비)
  drawFloor();

  // 고양이들(전경 실루엣)
  drawCat(186, 390, pastel.moon);
  drawCat(350, 400, '#dbdbdb');
}

/* ---- 우주 글로우 ---- */
function spaceGlow() {
  fill(pastel.glow); ellipse(520, 160, 420, 260);
  fill('#D9FFF244'); ellipse(160, 120, 300, 200);
  fill('#EEE0FF44'); ellipse(360, 80, 240, 150);
}

/* ---- 행성들 ---- */
function drawGiantPlanet(x, y, w, h, c) {
  // 뒤쪽의 커다란 행성 (언덕으로 일부 가려짐)
  // 가장자리 부드럽게: 바깥쪽부터 반투명 타원 겹치기
  fill('#C8D4FF22'); ellipse(x, y, w + 60, h + 60);
  fill('#C8D4FF44'); ellipse(x, y, w + 20, h + 20);
  fill(c); ellipse(x, y, w, h);

  // 얼룩/구름 느낌: 연한 타원들
  fill('#FFFFFF22'); ellipse(x - 80, y - 20, w * 0.4, h * 0.16);
  ellipse(x + 60, y + 10, w * 0.35, h * 0.14);
}

function drawRingedPlanet(x, y, w, h, planetColor, ringColor) {
  // 뒤쪽 고리 (수평 타원) — 연하게
  noFill();
  stroke(ringColor); strokeWeight(6);
  ellipse(x, y, w * 1.8, h * 0.5);

  // 행성 본체
  noStroke();
  fill(planetColor);
  ellipse(x, y, w, h);

  // 앞쪽 고리의 전면 띠(행성 앞을 지나가는 느낌)
  // 트릭: 얇은 타원 2~3개를 겹쳐 전면부만 강조
  stroke('#FFFFFFCC'); strokeWeight(3);
  noFill();
  ellipse(x, y, w * 1.8, h * 0.5);
  stroke('#FFFFFFAA'); strokeWeight(2);
  ellipse(x, y + 3, w * 1.78, h * 0.48);
  noStroke();
}

/* ---- 달 + 분화구 ---- */
function drawMoonWithCraters(moonX, moonY, moonColor) {
  // 본체 + 그림자
  fill(moonColor); ellipse(moonX, moonY, 100, 100);
  fill(backgroundColor); ellipse(moonX + 14, moonY - 8, 70, 70);

  // 분화구(연한 타원)
  fill(pastel.crater + 'AA'); ellipse(moonX - 15, moonY + 8, 16, 10);
  fill(pastel.crater + '88'); ellipse(moonX + 12, moonY + 16, 12, 8);
  fill(pastel.crater + '99'); ellipse(moonX + 4, moonY - 2, 8, 5);
}

/* ---- 사막 언덕(곡선) ---- */
function drawDunes() {
  // 가장 먼 언덕
  drawHillLayer([
    [0, 420], [70, 410], [160, 405], [250, 410], [340, 420], [430, 415], [520, 410], [700, 420]
  ], colorBlend(pastel.sand3, '#FFFFFF', 0.05), 420, 700);

  // 중간 언덕
  drawHillLayer([
    [0, 450], [90, 440], [170, 445], [260, 455], [350, 460], [460, 455], [560, 460], [700, 470]
  ], colorBlend(pastel.sand2, '#FFFFFF', 0.03), 470, 700);

  // 가까운 언덕
  drawHillLayer([
    [0, 500], [80, 490], [160, 495], [230, 505], [320, 515], [420, 520], [540, 525], [700, 540]
  ], pastel.sand1, 540, 700);

  // 전경의 밝은 사구(사막 물결)
  fill('#FFF6EEAA'); rect(60, 520, 120, 22, 12);
  fill('#FDE9F2AA'); rect(250, 545, 140, 26, 14);
  fill('#E9F8FFAA'); rect(480, 560, 110, 18, 10);
}

function drawHillLayer(points, fillColor, baseY, baseWidth) {
  noStroke();
  fill(fillColor);
  beginShape();
  // 곡선으로 연결
  for (let i = 0; i < points.length; i++) {
    let p = points[i];
    curveVertex(p[0], p[1]);
  }
  // 하단 채우기
  vertex(baseWidth, height);
  vertex(0, height);
  endShape(CLOSE);
}

/* ---- 기존 별/바닥/고양이 (약간 수정) ---- */

function drawFloor() {
  // 어두운 바닥: 공간 깊이감 유지
  fill('#141424');
  rect(0, 590, width, 110);
}

/// 별
function drawStar(starX, starY, starColor) {
  fill(starColor);
  ellipse(starX, starY, 4, 4);

  let spread = ((starX + starY) % 30) + 5;
  fill(`#ffffff${spread < 10 ? '0' : ''}${spread}`);
  ellipse(starX, starY, 50, 50);
}

/// 고양이
function drawCat(catX, catY, catColor) {
  drawCatTail(catX, catY, catColor);  // arc→bezier
  drawCatBody(catX, catY, catColor);
  drawCatHead(catX, catY, catColor);
  drawCatEye(catX, catY, catColor);
}

/// 고양이 머리
function drawCatHead(catX, catY, catColor) {
  fill(catColor);
  noStroke();

  triangle(catX, catY, catX - 28, catY - 55, catX - 21, catY);
  triangle(catX, catY, catX + 28, catY - 55, catX + 21, catY);
  triangle(catX - 21, catY, catX + 21, catY, catX, catY + 45);
}

/// 고양이 눈
function drawCatEye(catX, catY, catColor) {
  stroke('#000000'); strokeWeight(2);

  let topY = catY + 5;
  let bottomY = topY + 4;

  let eyeLength = 13;

  let leftEyeStartX = catX - 3;
  let leftEyeEndX = leftEyeStartX - eyeLength;

  let rightEyeStartX = catX + 3;
  let rightEyeEndX = rightEyeStartX + eyeLength;

  line(leftEyeStartX, bottomY, leftEyeEndX, topY);
  line(rightEyeStartX, bottomY, rightEyeEndX, topY);
}

/// 몸통
function drawCatBody(catX, catY, catColor) {
  fill(catColor);
  noStroke();
  triangle(catX, catY, catX - 40, catY + 200, catX + 40, catY + 200);
}

function drawCatTail(catX, catY, catColor) {
  // 부드러운 꼬리 곡선
  noFill();
  stroke(catColor); strokeWeight(5);
  bezier(catX + 30, catY + 120, catX + 70, catY + 60, catX + 120, catY + 140, catX + 85, catY + 180);

  stroke(catColor + '88'); strokeWeight(3);
  bezier(catX + 28, catY + 118, catX + 64, catY + 70, catX + 110, catY + 138, catX + 83, catY + 176);
}

/* ---- 유틸 ---- */
function colorBlend(hexA, hexB, t) {
  // 두 색을 t(0~1)로 블렌딩
  let ca = color(hexA), cb = color(hexB);
  let r = red(ca) * (1 - t) + red(cb) * t;
  let g = green(ca) * (1 - t) + green(cb) * t;
  let b = blue(ca) * (1 - t) + blue(cb) * t;
  return color(r, g, b);
}
