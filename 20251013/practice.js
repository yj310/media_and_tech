let paddle, ball, bricks = [];
let cols = 8, rows = 5;
let gameStarted = false;

function setup() {
    createCanvas(480, 640);
    noStroke();
    paddle = new Paddle();
    ball = new Ball();
    createBricks();
}

function draw() {
    background('#fff9f9');
    drawBackgroundDecor();

    paddle.display();
    paddle.move();

    if (gameStarted) {
        ball.update();
        ball.checkCollision(paddle);
        for (let i = bricks.length - 1; i >= 0; i--) {
            bricks[i].display();
            if (ball.hits(bricks[i])) {
                ball.reverseY();
                bricks.splice(i, 1);
            }
        }
    }
    ball.display();

    if (!gameStarted) {
        fill('#ffb6c1');
        textAlign(CENTER, CENTER);
        textSize(20);
        text('Press SPACE to start!', width / 2, height / 2);
    }
}

function keyPressed() {
    if (key === ' ') gameStarted = true;
}

class Paddle {
    constructor() {
        this.w = 100;
        this.h = 20;
        this.x = width / 2 - this.w / 2;
        this.y = height - 60;
        this.speed = 7;
    }
    display() {
        fill('#ffe6f2');
        rect(this.x, this.y, this.w, this.h, 10);
        fill('#ff8fb1');
        rect(this.x + 10, this.y + 3, this.w - 20, this.h - 6, 8);
    }
    move() {
        if (keyIsDown(LEFT_ARROW)) this.x -= this.speed;
        if (keyIsDown(RIGHT_ARROW)) this.x += this.speed;
        this.x = constrain(this.x, 0, width - this.w);
    }
}

class Ball {
    constructor() {
        this.x = width / 2;
        this.y = height / 2;
        this.r = 10;
        this.xSpeed = 4;
        this.ySpeed = 4;
    }
    display() {
        fill('#fce4ec');
        ellipse(this.x, this.y, this.r * 2);
        fill('#f48fb1');
        ellipse(this.x - 3, this.y - 3, this.r * 1.2);
    }
    update() {
        this.x += this.xSpeed;
        this.y += this.ySpeed;
        if (this.x < this.r || this.x > width - this.r) this.xSpeed *= -1;
        if (this.y < this.r) this.ySpeed *= -1;
    }
    reverseY() {
        this.ySpeed *= -1;
    }
    checkCollision(paddle) {
        if (this.x > paddle.x && this.x < paddle.x + paddle.w && this.y + this.r > paddle.y) {
            this.ySpeed *= -1;
            this.y = paddle.y - this.r;
        }
    }
    hits(brick) {
        return this.x > brick.x && this.x < brick.x + brick.w && this.y - this.r < brick.y + brick.h && this.y + this.r > brick.y;
    }
}

class Brick {
    constructor(x, y, color) {
        this.x = x;
        this.y = y;
        this.w = 50;
        this.h = 20;
        this.color = color;
    }
    display() {
        fill(this.color);
        rect(this.x, this.y, this.w, this.h, 5);
    }
}

function createBricks() {
    let pastelColors = ['#ffd6e0', '#ffe0ac', '#c3f0ca', '#b5ead7', '#c7ceea'];
    for (let r = 0; r < rows; r++) {
        for (let c = 0; c < cols; c++) {
            let x = 40 + c * 55;
            let y = 60 + r * 30;
            let color = pastelColors[r % pastelColors.length];
            bricks.push(new Brick(x, y, color));
        }
    }
}

function drawBackgroundDecor() {
    fill('#fff0f5');
    for (let i = 0; i < 10; i++) {
        ellipse(random(width), random(height), random(10, 30));
    }
}
