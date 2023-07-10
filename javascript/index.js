// 변수란 특정 값을 저장하는 공간
// abc = "abcdef~~"

// 키워드 변수이름 = 값
// 키워드 : var, let, const
// var 보단 let을 권장

var number = 5; // 변수의 선언과 할당이 동시에

var number1; // 변수 선언
number1 = 6; // 변수에 값을 할당


let string = "가나다라";

// var let const
// var : 재선언, 재할당 가능
// let : 재선언 불가, 재할당 가능
// const(상수선언) : 재선언 불가, 재할당 불가, 무조건 선언, 할당 동시에 해야한다
// 상수 : 한번 선언한 뒤 바뀌지 않는 값


// String 선언 : ' '," ",` `
let lll;
console.log(lll);

let name = 'dabeen';
let hihi = `안녕하세요 ${name}입니다`
console.log(hihi);


// 인덱싱
// 인덱스 : ★0부터 시작★
let names = ["홍길동", "성춘향", "짱구"];
console.log(names[2]);

//  배열의 길이를 출력. 배열의 길이 -> 배열 안에 저장되어 있는 값의 개수
console.log(names.length);

// 배열의 마지막에 값을 추가
names.push("짱아");
console.log("push ", names);

// 배열의 마지막 값을 삭제
names.pop(names);
console.log("pop ", names);

// 배열의 제일 앞에 값을 추가
names.unshift("신형만");
console.log("unshift ", names);

// 배열의 제일 앞의 값을 삭제
names.shift();
console.log("shift ", names);

// 해당 배열 안에 짱구가 몇번 인덱스에 위치해 있는지 알려줌
// 만약 값이 없을 경우엔 -1 출력
let index = names.indexOf("짱구");
console.log("indexOf ", index);

// 해당 배열 안에 값이 포함되어 있는지 판별
let isInclude = names.includes("짱아");
console.log("includes ", isInclude);


