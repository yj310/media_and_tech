///
///
/// 문제 1
///

console.log("\n==============[1. 배열 요소 출력하기]==============");

/// 문제: 배열[10, 20, 30, 40, 50]의 모든 요소를 for 문을 사용하여 출력하시오.

let arr1 = [10, 20, 30, 40, 50];
console.log("----------------[for]----------------");

for (let i = 0; i < arr1.length; i++) {
    console.log(arr1[i]);
}

console.log("----------------[for of]----------------");

for (let i of arr1) {
    console.log(i);
}

console.log("----------------[for in]----------------");

for (let i in arr1) {
    console.log(arr1[i]);
}

///
///
/// 문제 2
///

console.log("\n==============[2. 배열 요소의 합 구하기]==============");

/// 문제: 배열 [1, 2, 3, 4, 5]의 요소들의 합을 계산하여 출력하시오.

let arr2 = [1, 2, 3, 4, 5];
let sum = 0;
for (let value of arr2) {
    sum += value;
}
console.log(`모든 요소의: ${sum}`);

///
///
/// 문제 3
///

console.log("\n==============[3. 배열에서 최댓값 찾기]==============");

/// 문제: 배열 [12, 5, 8, 130, 44]에서 가장 큰 숫자를 찾아 출력하시오.

let arr3 = [12, 5, 8, 130, 44];
let maxValue3 = 0;

for (let value of arr3) {
    if (value > maxValue3) {
        maxValue3 = value;
    }
}

console.log(`최댓값: ${maxValue3}`);


///
///
/// 문제 4
///


console.log("\n==============[4. 배열에서 특정 값 찾기]============== ");

/// 문제: 배열 [3, 6, 9, 12, 15]에서 숫자 9가 존재하는지 확인하고, 존재하면 "찾았다!"를 출력하시오.

let arr4 = [3, 6, 9, 12, 15];
let targetValue4 = 9;
for (let value of arr4) {
    if (value === targetValue4) {
        console.log("찾았다!");
        break;
    }
}


///
///
/// 문제 5
///


console.log("\n==============[5. 배열을 거꾸로 출력하기]============== ");

/// 문제: 배열 [1, 2, 3, 4, 5]를 뒤에서부터 출력하시오.

let arr5 = [1, 2, 3, 4, 5];

for (let index in arr5) {
    let reverseIndex = (arr5.length - 1) - index;
    console.log(arr5[reverseIndex]);
}


///
///
/// 문제 6
///

console.log("\n==============[6. 배열에서 짝수만 출력하기]============== ");

/// 문제: 배열 [10, 15, 20, 25, 30]에서 짝수만 출력하시오.

let arr6 = [10, 15, 20, 25, 30];

for (let value of arr6) {
    if (value % 2 === 0) {
        console.log(value);
    }
}

///
///
/// 문제 7
///

console.log("\n==============[7. 배열 요소를 제곱하여 새로운 배열 만들기]============== ");

/// 문제: 배열 [2, 3, 4]의 모든 요소를 제곱한 값을 새로운 배열 squaredArr에 저장하고 출력하시오.

let arr7 = [2, 3, 4];
let squaredArr = [];

for (let value of arr7) {
    squaredArr.push(value * value);
}

console.log(squaredArr);

///
///
/// 문제 8
///

console.log("\n==============[8. [참고] 배열에서 중복 제거하기]============== ");

/// 문제: 배열 [1, 2, 2, 3, 4, 4, 5]에서 중복된 요소를 제거하여 새로운 배열 uniqueArr에 저장하시오.

let arr8 = [1, 2, 2, 3, 4, 4, 5];
let uniqueArr = [];

for (let value of arr8) {
    if (!uniqueArr.includes(value)) {
        uniqueArr.push(value);
    }
}

console.log(uniqueArr);
