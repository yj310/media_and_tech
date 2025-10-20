/// 3 단계: 조건문 사용
/// 목표: 함수 내부에서 조건문을 사용해보자. 


///
/// 문제 1: 홀수/짝수 판별 함수 만들기
/// isEven이라는 함수를 만들어서 
// 매개변수로 받은 숫자가 짝수이면 true, 홀수이면 false를 반환하는 함수를 작성하세요.

function isEven(number) {
    // 짝수면 true, 홀수면 false 반환
    return number % 2 === 0;
}

console.log(isEven(10)); // true
console.log(isEven(11)); // false


/// 
/// 문제 2: 나이로 성인 여부 판별하기
/// isAdult라는 함수를 만들어서 매개변수로 나이를 받고, 
// 나이가 18세 이상이면 true를 18세 미만이면 false를 반환하는 함수를 작성하세요.

function isAdult(age) {
    return age >= 18;
}

console.log(isAdult(18)); // true
console.log(isAdult(17)); // false