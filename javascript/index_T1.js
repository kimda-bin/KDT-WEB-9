let colorArray = ["빨강", "주황", "노랑", "초록", "파랑", "남색", "보라"];
console.log(colorArray[1], colorArray[2], colorArray[3], colorArray[4]);

// index가 2인 값 출력
console.log(colorArray[2]);

// 좋아하는 색을 마지막에 추가한 후 배열 출력
colorArray.push("핑크");
console.log(colorArray);

// black이 몇 번째 인덱스에 있는지 출력
console.log(colorArray.indexOf("black"));

// 리스트의 순서를 반전시켜서 출력
console.log(colorArray.reverse());