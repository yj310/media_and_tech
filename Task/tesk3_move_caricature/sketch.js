let color = {
  background: "#000000",
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

let faceX;
let faceY;

let catFirstX;
let catFirstY;

let catX;
let catY;

let size = {
  faceWidth: 270,
  faceHeight: 295,
  hairWidth: 300,
  bodyWidth: 330,
  bodyHeight: 500
};

let eyeLineCloseY = 0;



function setup() {
  faceX = 350;
  faceY = 170;
  catFirstX = faceX + 80;
  catFirstY = faceY + 300;
  catX = catFirstX;
  catY = catFirstY;

  createCanvas(700, 700);
}

function draw() {
  background(color.background);

  drawBackHair();
  drawNack();
  drawBody();
  drawHead();
  drawEye();
  drawBlush();
  drawMouse();
  drawNose();
  drawFrontHair();
  drawEyeBraw();
  drawNecklace();
  drawEar();
  drawCat();
}

function keyPressed() {
  if (keyCode === LEFT_ARROW) {
    // catX = catX - 10;
  }
  if (keyCode === RIGHT_ARROW) {
    // catX = catX + 10;
  }
  if (keyCode === UP_ARROW) {
    // catY = catY - 10;
  }
  if (keyCode === DOWN_ARROW) {
    // catY = catY + 10;
  }
}

function mouseDragged() {
  /// 마우스 포인터가 얼굴 안에 들어왔는지 확인
  if (mouseX > faceX - (size.faceWidth / 2) &&
    mouseX < faceX + (size.faceWidth / 2) &&
    mouseY > faceY - (size.faceHeight / 2) &&
    mouseY < faceY + (size.faceHeight / 2)) {
    /// 마우스 움직임에 따라 눈 라인 움직임
    if (mouseY > pmouseY && eyeLineCloseY < 22) {
      eyeLineCloseY = eyeLineCloseY + 2;
    }
    if (mouseY < pmouseY && eyeLineCloseY > 0) {
      eyeLineCloseY = eyeLineCloseY - 2;
    }
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


function drawEar() {
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


  stroke("#cccccc");
  strokeWeight(1);
  fill('#ffffff');
  ellipse(
    earX + 3,
    earY + 20,
    10, 10
  );

  noStroke();
  fill('#d7faf8');
  ellipse(
    earX + 3,
    earY + 23,
    7, 6
  );


  stroke("#cccccc");
  strokeWeight(1);
  noFill();
  ellipse(
    earX + 3,
    earY + 20,
    10, 10
  );

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


  //   noFill()
  //   stroke('#ffffff70'); 
  //   strokeWeight(2);
  //   line(earX - 15, earY, earX + 40, earY + 60);
  //   line(earX - 10, earY + 48, earX + 20, earY - 10);


  //   stroke('#ffffff50'); 
  //   strokeWeight(10);
  //   line(earX - 8, earY + 46, earX + 16, earY - 6);
}

function drawNecklace() {
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

  // noStroke();

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

function drawFrontHair() {

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


  fill(getColor(color.skinColor));
  noStroke();
  triangle(
    faceX - 90, faceY - 40,
    faceX - 92, faceY + 3,
    faceX - 100, faceY + 3
  );
  triangle(
    faceX + 72, faceY - 65,
    faceX + 77, faceY + 3,
    faceX + 95, faceY + 3
  );

  triangle(
    faceX - 68, faceY - 40,
    faceX - 70, faceY + 3,
    faceX - 76, faceY + 3
  );



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
  stroke(getColor(color.hairColor2));
  strokeWeight(10);
  arc(
    faceX + (glabella + 10),
    faceY + addY,
    hairWidth,
    hairHeight,
    PI / 2 + 0.5, -PI
  );
  arc(
    faceX - (glabella + 10),
    faceY + addY,
    hairWidth,
    hairHeight,
    -PI * 2, PI / 2 - 0.5
  );


  noFill();
  stroke(getColor(color.hairColor3));
  strokeWeight(10);

  // lineX = faceX - 60;
  // lineY = faceY - (size.faceHeight / 2) + 47;
  // lineWidth = -25;
  // lineHeight = 50;
  // line(lineX, lineY, lineX + lineWidth, lineY + lineHeight);

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

  //   lineX = faceX + 38;
  //   lineY = faceY - (size.faceHeight / 2) + 78;
  //   lineWidth = 30;
  //   lineHeight = 30;
  //   line(lineX, lineY, lineX + lineWidth, lineY + lineHeight);

  //   lineX = faceX + 73;
  //   lineY = faceY - (size.faceHeight / 2) + 62;
  //   lineWidth = 25;
  //   lineHeight = 40;
  //   line(lineX, lineY, lineX + lineWidth, lineY + lineHeight);



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

  //   lineX = faceX + 73;
  //   lineY = faceY - (size.faceHeight / 2) + 62;
  //   lineWidth = 25;
  //   lineHeight = 40;
  //   line(lineX, lineY, lineX + lineWidth, lineY + lineHeight);




  noFill();
  stroke(getColor(color.hairColor4));
  strokeWeight(4);

  lineX = faceX - 130;
  lineY = faceY - (size.faceHeight / 2) + 95;
  lineWidth = -5;
  lineHeight = 60;
  line(lineX, lineY, lineX + lineWidth, lineY + lineHeight);

  //   lineX = faceX - 110;
  //   lineY = faceY - (size.faceHeight / 2) + 80;
  //   lineWidth = -15;
  //   lineHeight = 75;
  //   line(lineX, lineY, lineX + lineWidth, lineY + lineHeight);

  lineX = faceX - 80;
  lineY = faceY - (size.faceHeight / 2) + 80;
  lineWidth = -15;
  lineHeight = 55;
  line(lineX, lineY, lineX + lineWidth, lineY + lineHeight);


  // lineX = faceX - 65;
  // lineY = faceY - (size.faceHeight / 2) + 70;
  // lineWidth = -25;
  // lineHeight = 60;
  // line(lineX, lineY, lineX + lineWidth, lineY + lineHeight);


  // lineX = faceX + 30;
  // lineY = faceY - (size.faceHeight / 2) + 85;
  // lineWidth = 16;
  // lineHeight = 30;
  // line(lineX, lineY, lineX + lineWidth, lineY + lineHeight);


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
  // fill('red');
  // stroke('red');
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
  //   PI + 0.4, -0.1,
  // );
  // arc(
  //   faceX + (glabella + 10), 
  //   faceY + addY - 10,
  //   70, 
  //   40, 
  //   PI + 0.1, -0.3,
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
  bodyY = 340;



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
  //   height,  
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

function drawCat() {
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

  stroke('#333333');
  strokeWeight(15);
  noFill();
  arc(
    catX - 130, catY + 75,
    90, 130,
    PI - 1.9, -PI / 2 + 0.4);


  noStroke();
  fill("#bbbbbb");
  currentX = catX - 1;
  currentY = catY + 13;
  ellipse(
    currentX, currentY, // 위치
    80, 60 // 사이즈
  );

  stroke("#333333");
  strokeWeight(6);
  fill("#333333");
  ellipse(
    catX, catY, // 위치
    80, 70 // 사이즈
  );

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


  noStroke();
  fill("#fab4b460");
  catNoseX = catX;
  catNoseY = catY + 10;
  ellipse(
    catNoseX, catNoseY, // 위치
    5, 5 // 사이즈
  );



  noStroke();
  fill("#bbbbbb");
  currentX = catX - 5;
  currentY = catY + 36;
  // ellipse(
  //   currentX, currentY, // 위치
  //   30, 16, // 사이즈
  // );


  noStroke();
  fill(getColor(color.skinColor2));
  ellipse(
    faceX - 40, faceY + 450, // 위치
    80, 90 // 사이즈
  );

  stroke('#707070');
  strokeWeight(75);
  noFill();
  lineX = faceX + 165;
  lineY = faceY + 425;
  lineWidth = -170;
  lineHeight = 40;
  line(lineX, lineY, lineX + lineWidth, lineY + lineHeight);



}