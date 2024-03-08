// 배열
// 1) 빈 배열 생성
const arr = [];
const arr2 = new Array();
console.log(arr, arr2);
// 2) 요소 추가
arr.push(1);
arr.push(2);
arr.push(3);
// 3) 요소 길이
console.log(arr.length);
// 4) 요소의 순환
for(let i = 0; i < arr.length; i++){
  console.log(arr[i]);
}
for(let ele of arr){
  console.log(ele);
}
// 5) 요소 삭제
const ele = arr.pop();  // 제일 마지막 요소를 반환하면서 삭제
console.log(ele);
console.log(arr);

arr.push(3, 4, 5);
console.log(arr);
delete arr[2]; // 특정 인덱스의 요소 삭제
console.log(arr);

console.log(arr[1], arr.at(1)); // 배열의 두번째 요소
console.log(arr[arr.length-1], arr.at(-1)); // 배열의 마지막 요소