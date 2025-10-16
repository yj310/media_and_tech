/// 
/// [💼 과제 2] 자신의 캐리커처를 그려보자
/// 
///
/// 기본 도형 사용
/// - 얼굴, 눈, 코, 입, 머리 등을 표현하기 위해 원, 타원, 사각형 등의 기본 도형을 사용하세요.
/// - ellipse(), rect(), line(), arc() 등을 활용하여 다양한 얼굴 요소를 그리세요.
///
/// 색상 활용
/// - fill()과 stroke() 함수를 사용하여 얼굴의 다양한 부분에 색상을 적용하세요.
/// - 피부색, 머리카락 색, 눈 색 등을 표현하세요.
///
/// 세부 요소 추가
/// - 안경, 모자, 귀걸이 등 자신을 표현하는 독특한 요소들을 추가하세요.
///
///
///

let color = {
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

let pos = {
  faceX: 350,
  faceY: 170
};

let size = {
  faceWidth: 270,
  faceHeight: 295,
  hairWidth: 300
};

function setup() {
  createCanvas(700, 700);
  background('#000000');
}

function draw() {
  drawBackHair();
  drawNack();
  drawBody();
  drawHead();
  drawBlush();
  drawEye();
  drawMouse();
  drawNose();
  drawFrontHair();
  drawEyeBraw();
  drawNecklace();
  drawEar();
  drawCat();
}

function drawEar() {
  noStroke();
  fill(getColor(color.skinColor));
  earX = pos.faceX + (size.faceWidth / 2) - 8;
  earY = pos.faceY + 45;
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
  necklaceStartX = pos.faceX;
  necklaceStartY = bodyY + 1;
  necklaceEndX = pos.faceX;
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
    pos.faceX - glabella,
    pos.faceY + addY,
    blushWidth,
    blushHeight
  );
  ellipse(
    pos.faceX + glabella,
    pos.faceY + addY,
    blushWidth,
    blushHeight
  );

  // fill(`${color.blushColor}20`);
  // ellipse(
  //   pos.faceX, 
  //   pos.faceY + 40, 
  //   40, 
  //   25, 
  // );
}

function drawFrontHair() {

  noStroke();
  fill(getColor(color.hairColor));
  arc(
    pos.faceX,
    pos.faceY + 10,
    size.hairWidth,
    size.faceHeight + 30,
    PI + 0.05,
    -0.05,
    OPEN
  );


  fill(getColor(color.skinColor));
  noStroke();
  triangle(
    pos.faceX - 90, pos.faceY - 40,
    pos.faceX - 92, pos.faceY + 3,
    pos.faceX - 100, pos.faceY + 3
  );
  triangle(
    pos.faceX + 72, pos.faceY - 65,
    pos.faceX + 77, pos.faceY + 3,
    pos.faceX + 95, pos.faceY + 3
  );

  triangle(
    pos.faceX - 68, pos.faceY - 40,
    pos.faceX - 70, pos.faceY + 3,
    pos.faceX - 76, pos.faceY + 3
  );



  noStroke();
  fill(getColor(color.hairColor));
  startX = pos.faceX - size.hairWidth / 2;
  rect(startX, pos.faceY, 40, 700);
  rect(startX + size.hairWidth, pos.faceY, -40, 700);


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
    pos.faceX + (glabella + 10),
    pos.faceY + addY,
    hairWidth,
    hairHeight,
    PI / 2 + 0.5, -PI
  );
  arc(
    pos.faceX - (glabella + 10),
    pos.faceY + addY,
    hairWidth,
    hairHeight,
    -PI * 2, PI / 2 - 0.5
  );




  noFill();
  stroke(getColor(color.hairColor3));
  strokeWeight(10);

  // lineX = pos.faceX - 60;
  // lineY = pos.faceY - (size.faceHeight / 2) + 47;
  // lineWidth = -25;
  // lineHeight = 50;
  // line(lineX, lineY, lineX + lineWidth, lineY + lineHeight);

  lineX = pos.faceX - 30;
  lineY = pos.faceY - (size.faceHeight / 2) + 20;
  lineWidth = -25;
  lineHeight = 15;
  line(lineX, lineY, lineX + lineWidth, lineY + lineHeight);

  lineX = pos.faceX - 15;
  lineY = pos.faceY - (size.faceHeight / 2) + 20;
  lineWidth = -5;
  lineHeight = 20;
  line(lineX, lineY, lineX + lineWidth, lineY + lineHeight);

  lineX = pos.faceX;
  lineY = pos.faceY - (size.faceHeight / 2) + 20;
  lineWidth = 5;
  lineHeight = 25;
  line(lineX, lineY, lineX + lineWidth, lineY + lineHeight);

  lineX = pos.faceX + 20;
  lineY = pos.faceY - (size.faceHeight / 2) + 20;
  lineWidth = 15;
  lineHeight = 20;
  line(lineX, lineY, lineX + lineWidth, lineY + lineHeight);

  //   lineX = pos.faceX + 38;
  //   lineY = pos.faceY - (size.faceHeight / 2) + 78;
  //   lineWidth = 30;
  //   lineHeight = 30;
  //   line(lineX, lineY, lineX + lineWidth, lineY + lineHeight);

  //   lineX = pos.faceX + 73;
  //   lineY = pos.faceY - (size.faceHeight / 2) + 62;
  //   lineWidth = 25;
  //   lineHeight = 40;
  //   line(lineX, lineY, lineX + lineWidth, lineY + lineHeight);



  noFill();
  stroke(getColor(color.hairColor4));
  strokeWeight(10);

  lineX = pos.faceX - 85;
  lineY = pos.faceY - (size.faceHeight / 2) + 67;
  lineWidth = -25;
  lineHeight = 55;
  line(lineX, lineY, lineX + lineWidth, lineY + lineHeight);

  lineX = pos.faceX - 45;
  lineY = pos.faceY - (size.faceHeight / 2) + 82;
  lineWidth = -10;
  lineHeight = 45;
  line(lineX, lineY, lineX + lineWidth, lineY + lineHeight);

  lineX = pos.faceX - 15;
  lineY = pos.faceY - (size.faceHeight / 2) + 90;
  lineWidth = -5;
  lineHeight = 30;
  line(lineX, lineY, lineX + lineWidth, lineY + lineHeight);

  lineX = pos.faceX;
  lineY = pos.faceY - (size.faceHeight / 2) + 90;
  lineWidth = 5;
  lineHeight = 30;
  line(lineX, lineY, lineX + lineWidth, lineY + lineHeight);

  lineX = pos.faceX + 20;
  lineY = pos.faceY - (size.faceHeight / 2) + 87;
  lineWidth = 15;
  lineHeight = 30;
  line(lineX, lineY, lineX + lineWidth, lineY + lineHeight);

  lineX = pos.faceX + 40;
  lineY = pos.faceY - (size.faceHeight / 2) + 84;
  lineWidth = 20;
  lineHeight = 35;
  line(lineX, lineY, lineX + lineWidth, lineY + lineHeight);

  //   lineX = pos.faceX + 73;
  //   lineY = pos.faceY - (size.faceHeight / 2) + 62;
  //   lineWidth = 25;
  //   lineHeight = 40;
  //   line(lineX, lineY, lineX + lineWidth, lineY + lineHeight);




  noFill();
  stroke(getColor(color.hairColor4));
  strokeWeight(4);

  lineX = pos.faceX - 130;
  lineY = pos.faceY - (size.faceHeight / 2) + 95;
  lineWidth = -5;
  lineHeight = 60;
  line(lineX, lineY, lineX + lineWidth, lineY + lineHeight);

  //   lineX = pos.faceX - 110;
  //   lineY = pos.faceY - (size.faceHeight / 2) + 80;
  //   lineWidth = -15;
  //   lineHeight = 75;
  //   line(lineX, lineY, lineX + lineWidth, lineY + lineHeight);

  lineX = pos.faceX - 80;
  lineY = pos.faceY - (size.faceHeight / 2) + 80;
  lineWidth = -15;
  lineHeight = 55;
  line(lineX, lineY, lineX + lineWidth, lineY + lineHeight);


  // lineX = pos.faceX - 65;
  // lineY = pos.faceY - (size.faceHeight / 2) + 70;
  // lineWidth = -25;
  // lineHeight = 60;
  // line(lineX, lineY, lineX + lineWidth, lineY + lineHeight);


  // lineX = pos.faceX + 30;
  // lineY = pos.faceY - (size.faceHeight / 2) + 85;
  // lineWidth = 16;
  // lineHeight = 30;
  // line(lineX, lineY, lineX + lineWidth, lineY + lineHeight);


  lineX = pos.faceX + 50;
  lineY = pos.faceY - (size.faceHeight / 2) + 73;
  lineWidth = 26;
  lineHeight = 40;
  line(lineX, lineY, lineX + lineWidth, lineY + lineHeight);



  lineX = pos.faceX + 76;
  lineY = pos.faceY - (size.faceHeight / 2) + 70;
  lineWidth = 20;
  lineHeight = 55;
  line(lineX, lineY, lineX + lineWidth, lineY + lineHeight);

  lineX = pos.faceX + 96;
  lineY = pos.faceY - (size.faceHeight / 2) + 70;
  lineWidth = 20;
  lineHeight = 75;
  line(lineX, lineY, lineX + lineWidth, lineY + lineHeight);


  lineX = pos.faceX + 120;
  lineY = pos.faceY - (size.faceHeight / 2) + 70;
  lineWidth = 5;
  lineHeight = 70;
  line(lineX, lineY, lineX + lineWidth, lineY + lineHeight);


  lineX = pos.faceX + 135;
  lineY = pos.faceY - (size.faceHeight / 2) + 95;
  lineWidth = -2;
  lineHeight = 40;
  line(lineX, lineY, lineX + lineWidth, lineY + lineHeight);

}

// 코
function drawNose() {
  noFill();
  stroke(getColor(color.blushColor, 0, 15));
  strokeWeight(12);

  lineX = pos.faceX - 3;
  lineY = pos.faceY + 67;
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
    pos.faceX, pos.faceY + addY + 20, // 위치
    40,
    20
  );

  // noStroke();
  // fill(getColor(color.lipColor, 0, 80)); 
  // arc(
  //   pos.faceX, pos.faceY + addY + 16, // 위치
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
    pos.faceX, pos.faceY + addY, // 위치
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
    pos.faceX - (glabella + 10),
    pos.faceY + addY,
    eyeWidth,
    eyeHeight,
    PI + angle1, -angle2
  );
  arc(
    pos.faceX + (glabella + 10),
    pos.faceY + addY,
    eyeWidth,
    eyeHeight,
    PI + angle2, -angle1
  );
}

// 눈1
function drawEye() {
  glabella = 50;
  addY = 50;
  eyeWidth = 40;
  eyeHeight = 50;

  fill(getColor(color.eyeColor));
  ellipse(
    pos.faceX - glabella,
    pos.faceY + addY,
    eyeWidth,
    eyeHeight
  );
  ellipse(
    pos.faceX + glabella,
    pos.faceY + addY,
    eyeWidth,
    eyeHeight
  );

  glabella = 50;
  highlightX = pos.faceX + 13;
  highlightY = pos.faceY + addY - 7;
  highlightWidth = 20;
  highlightHeight = 10;
  fill(255);
  ellipse(
    highlightX - glabella,
    highlightY,
    highlightWidth, highlightHeight
  );
  ellipse(
    highlightX + glabella,
    highlightY,
    highlightWidth, highlightHeight
  );

  glabella = 50;
  highlightX = pos.faceX;
  highlightY = pos.faceY + addY + 15;
  highlightWidth = 23;
  highlightHeight = 10;
  fill("#ffffff20");
  ellipse(
    highlightX - glabella,
    highlightY,
    highlightWidth, highlightHeight
  );
  ellipse(
    highlightX + glabella,
    highlightY,
    highlightWidth, highlightHeight
  );


  glabella = glabella + 15;
  addY = addY - 3;
  eyeWidth = 80;
  eyeHeight = 40;
  angle1 = 0.3;
  angle2 = 0.05;
  noFill();
  stroke(getColor(color.skinLineColor));
  strokeWeight(10);
  arc(
    pos.faceX - glabella,
    pos.faceY + addY,
    eyeWidth,
    eyeHeight,
    PI + angle1, -angle2
  );
  arc(
    pos.faceX + glabella,
    pos.faceY + addY,
    eyeWidth,
    eyeHeight,
    PI + angle2, -angle1
  );

  glabella = 60;
  addY = addY + 33;
  eyeWidth = 60;
  eyeHeight = 20;
  angle1 = 0.5;
  angle2 = 0.4;
  noFill();
  stroke(getColor(color.skinLineColor));
  strokeWeight(6);
  arc(
    pos.faceX - glabella,
    pos.faceY + addY,
    eyeWidth,
    eyeHeight,
    PI + angle1, -angle2
  );
  arc(
    pos.faceX + glabella,
    pos.faceY + addY,
    eyeWidth,
    eyeHeight,
    PI + angle2, -angle1
  );

  glabella = 55;
  addY = addY - 48;
  eyeWidth = 60;
  eyeHeight = 20;
  angle1 = 0.8;
  angle2 = 0.2;
  noFill();
  stroke(getColor(color.skinLineColor));
  strokeWeight(4);
  arc(
    pos.faceX - glabella,
    pos.faceY + addY,
    eyeWidth,
    eyeHeight,
    PI + angle1, -angle2
  );
  arc(
    pos.faceX + glabella,
    pos.faceY + addY,
    eyeWidth,
    eyeHeight,
    PI + angle2, -angle1
  );

  glabella = 84;
  addY = addY - 4;
  eyeWidth = 50;
  eyeHeight = 3;
  angle1 = 0.8;
  angle2 = 0.2;
  noFill();
  stroke(getColor(color.skinLineColor));
  // stroke('red'); 
  strokeWeight(4);
  arc(
    pos.faceX - glabella,
    pos.faceY + addY,
    eyeWidth,
    eyeHeight,
    PI / 2, PI
  );
  arc(
    pos.faceX + glabella,
    pos.faceY + addY,
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
    pos.faceX - glabella,
    pos.faceY + addY,
    eyeWidth,
    eyeHeight,
    PI + angle1, -angle2
  );
  arc(
    pos.faceX + glabella,
    pos.faceY + addY,
    eyeWidth,
    eyeHeight,
    PI + angle2, -angle1
  );

  // level = 0.2;
  // noFill();
  // stroke("#e3c8c8");
  // strokeWeight(2);
  // arc(
  //   pos.faceX - (glabella + 10), 
  //   pos.faceY + addY - 10, 
  //   70, 
  //   40, 
  //   PI + 0.4, -0.1,
  // );
  // arc(
  //   pos.faceX + (glabella + 10), 
  //   pos.faceY + addY - 10,
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
  // ellipse(pos.faceX, pos.faceY, size.faceWidth, size.faceHeight);
  arc(pos.faceX, pos.faceY, size.faceWidth, size.faceHeight, 0, PI);
}

function drawBackHair() {
  noStroke();
  fill(getColor(color.hairColor3));
  rect(pos.faceX - size.hairWidth / 2, pos.faceY, size.hairWidth, 700);
}

function drawBody() {

  bodyWidth = 330;
  bodyHeight = 500;
  shoulderHeight = 130;
  bodyY = 340;



  stroke('#666666');
  strokeWeight(80);
  noFill();
  lineX = pos.faceX + 130;
  lineY = bodyY + 70;
  lineWidth = 30;
  lineHeight = 180;
  line(lineX, lineY, lineX + lineWidth, lineY + lineHeight);



  noStroke();
  fill("#666666");
  fill(getColor(color.skinColor2));
  ellipse(
    pos.faceX,
    bodyY + (shoulderHeight / 2),
    bodyWidth,
    shoulderHeight
  );

  rect(
    pos.faceX - (bodyWidth / 2),
    bodyY + (shoulderHeight / 2),
    bodyWidth,
    bodyHeight
  );



  noStroke();
  fill("#666666");
  arc(
    pos.faceX,
    bodyY + (shoulderHeight / 2),
    bodyWidth,
    shoulderHeight + 20,
    PI, -PI / 2 - 1.2
  );

  arc(
    pos.faceX,
    bodyY + (shoulderHeight / 2),
    bodyWidth,
    shoulderHeight + 20,
    -PI / 2 + 1.2, 0
  );

  rect(
    pos.faceX - (bodyWidth / 2),
    bodyY + (shoulderHeight / 2),
    bodyWidth,
    bodyHeight
  );


  noStroke();
  fill("#666666");
  rect(
    pos.faceX - (bodyWidth / 2),
    bodyY + (shoulderHeight / 2),
    bodyWidth,
    bodyHeight
  );


  // noFill();
  // stroke("#dddddd"); 
  // strokeWeight(3);
  // line(
  //   pos.faceX, 
  //   bodyY + (shoulderHeight / 2),  
  //   pos.faceX, 
  //   height,  
  // );


}

function drawNack() {
  noStroke();
  fill(getColor(color.skinColor2));
  nackWidth = 50;
  nackHeight = 40;
  nackX = pos.faceX - nackWidth / 2;
  nackY = pos.faceY + (size.faceHeight / 2) - 3;

  rect(nackX, nackY, nackWidth, nackHeight);
}

function getColor(originColor, addColor = "000000", opacity = "ff") {
  finalColor = parseInt(parseInt(originColor, 16) + parseInt(addColor, 16)).toString(16);
  return `#${finalColor}${opacity}`;
}

function drawCat() {
  catX = pos.faceX + 80;
  catY = pos.faceY + 300;

  // ------------

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
    pos.faceX - 40, catY + 150, // 위치
    80, 90 // 사이즈
  );

  stroke('#707070');
  strokeWeight(75);
  noFill();
  lineX = pos.faceX + 165;
  lineY = pos.faceY + 425;
  lineWidth = -170;
  lineHeight = 40;
  line(lineX, lineY, lineX + lineWidth, lineY + lineHeight);



}