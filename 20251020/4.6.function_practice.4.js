/// 4 단계: 배열과 함수 사용
/// 목표: 함수 내부에서 반복문을 사용해보자.


///
/// 문제 1: 배열에서 최대값 찾기
/// findMax라는 함수를 만들어서 매개변수로 배열을 받고, 
// 그 배열에서 가장 큰 숫자를 반환하는 함수를 작성하세요.

function findMax(arr) {
    // 배열에서 가장 큰 숫자 반환
    let max = arr[0];

    for (let value of arr) {
        if (value > max) {
            max = value;
        }
    }

    return max;
}

console.log(findMax([1, 2, 3, 4, 5])); // 5


/// 문제 2: 배열의 모든 값 더하기
/// sumArray라는 함수를 만들어서 매개변수로 배열을 받고, 
// 그 배열에 있는 모든 값의 합을 반환하는 함수를 작성하세요.

function sumArray(arr) {
    // 배열의 모든 값의 합을 반환하는 코드 작성
    let sum = 0;

    for (let value of arr) {
        sum += value;
    }

    return sum;
}

console.log(sumArray([1, 2, 3, 4, 5])); // 15