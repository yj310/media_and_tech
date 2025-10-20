/// 2 단계: 반환 값


///
/// 문제 1: 두 숫자를 더하는 함수 만들기
/// add라는 함수를 만들어서 두 숫자를 입력받아 그 합을 반환하는 함수 작성하세요.

function add(a, b) {
    return a + b;
}

console.log(`10 + 20 = ${add(10, 20)}`); // 30 출력

/// 
/// 문제 2: 문자열을 반환하는 함수 만들기
/// greet라는 함수를 만들어서 이름을 매개변수로 받고, 
/// "Hello, {이름}!" 형식으로 인사 메시지를 반환하는 함수를 작성하세요.

function greet(name) {
    return `Hello, ${name}!`;
}

console.log(greet("Tom"));


///
/// 문제 3: 두 문자열을 합치는 함수 만들기
/// combineStrings 라는 함수를 만들어서 두 문자열을 매개변수로 받고, 
/// 그 두 문자열을 공백을 포함하여 합친 값을 반환하는 함수를 작성하세요.

function combineStrings(str1, str2) {
    return `${str1}${str2}`;
}

console.log(combineStrings("Hello", "World")); // HelloWorld 출력


/// 
/// 문제 4: 숫자에 10을 더하는 함수 만들기
/// addTen이라는 함수를 만들어서 숫자를  매개변수로 받고, 
// 그 숫자에 10을 더한 값을 반환하는 함수를 작성하세요.

function addTen(num) {
    return num + 10;
}

console.log(`1 + 10 = ${addTen(1)}`);